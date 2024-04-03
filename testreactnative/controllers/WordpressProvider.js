import axios from "axios";

export const getDataByUrl = async (url) => {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (error) {
    if (error.response || error.request) {
      throw new Error("nem sikerult a fetch");
    }
  }
};

export const getWineries = async (language) => {
  const data = await getDataByUrl(
    `https://soproniborvidek.hu/wp-json/wp/v2/wineries?_embed&per_page=100&valami=lol5&lang=${language}`
  );  


  // allservices elokeszitese hogy elmentunk minden servicet egy arrayba
  const allServicesSet = new Set(); 


  const wineriesData = data.map((item) => {
    // wineriesData elokészítése, valamint a map során az allservicest feltöltjük adatokkal hogy utána márcsak a uniqe dolgokat kelljen handlelelni
    const services = item?._embedded?.["wp:term"] || [];
    const servicesArray = item?._embedded?.["wp:term"]?.[0]?.map((service) => ({
      icon1: service.acf.icon,
      icon2: service.acf.icon_2,
      name: service.name,
    }));

  
    

    services.forEach((service) => {
      service.forEach((innerService) => {
        if (innerService !== undefined) {
          
          
          allServicesSet.add({
            icon1: innerService.acf.icon,
            icon2: innerService.acf.icon_2,
            name: innerService.name,
          })
        }
      });
    });

    // Returning the winery data as before
    return {
      title: item?.title?.rendered,
      content: item?.content?.rendered,
      logo: item?.acf?.banner?.boraszat_logo?.sizes?.medium,
      mapping: item?.acf?.banner?.boraszat_logo?.sizes?.thumbnail,
      banner: item?.acf?.banner?.banner_hatter?.url,
      owner_name: item?.acf?.kapcsolat?.tulajdonos_nev,
      type: item?.type,
      services: servicesArray,

      connection: {
        adress: item?.acf?.kapcsolat?.cim,
        telephone: item?.acf?.kapcsolat?.telefon,
        website: item?.acf?.banner?.weboldal,
        email: item?.acf?.kapcsolat?.["e-mail"],
        ownerphoto:item?.acf?.kapcsolat?.tulajdonos_kep?.url,
        webshop:item?.acf?.kapcsolat?.webshop,

        social: {
          facebook: item?.acf?.szocialis_mediak?.facebook,
          linkedin: item?.acf?.szocialis_mediak?.linkedin,
          instagram: item?.acf?.szocialis_mediak?.instagram,
        },
      },
      map: {
        lat: item?.acf?.terkep?.lat,
        lng: item?.acf?.terkep?.lng,
      },
    };
  });

  const allServices = Array.from(allServicesSet); // Convert Set to an array
  const uniqueServices = [
    ...new Map(allServices.map((item) => [item["name"], item])).values(),
  ];

  return { wineriesData, uniqueServices };
};

export const getEvents = async (language) => {
  const data = await getDataByUrl(
    `https://soproniborvidek.hu/wp-json/tribe/events/v1/events/?page=1&per_page=50&start_date=2020-06-16%2000%3A00%3A00&end_date=2030-06-16%2023%3A59%3A59&status=publish&lang=${language}`
  );
  if (data !== null) {
    return data.events.map((item) => {
      const originalStartDate = new Date(item.start_date);
      const startDateDay = originalStartDate.getDate();
      const startDateMonth = originalStartDate.toLocaleString("default", {
        month: "long",
      });
      const startDateYear = originalStartDate.getFullYear();

      const originalEndDate = new Date(item.end_date);
      const endDateDay = originalEndDate.getDate();
      const endDateMonth = originalEndDate.toLocaleString("default", {
        month: "long",
      });
      const endDateYear = originalEndDate.getFullYear();

      return {
        start_date: {
          originalStartDate: item.start_date,
          day: startDateDay,
          month: startDateMonth,
          year: startDateYear,
        },
        end_date: {
          originalEndDate: item.end_date,
          day: endDateDay,
          month: endDateMonth,
          year: endDateYear,
        },
        title: item.title,
        description: item.description,
        image: item?.image?.sizes?.medium?.url,
        description: item?.description?.replace(/<\/?[^>]+(>|$)/g, ""),
        url: item.url,
        location:item?.venue?.venue
      };
    });
  } else {
    return null;
  }
};

export const getNews = async (language) => {
  const data = await getDataByUrl(
    `https://soproniborvidek.hu/wp-json/wp/v2/posts?_embed&per_page=100&lang=${language}`
  );

  if (data !== null) {
    return data.map((item) => {
      const originalDate = new Date(item.date);

      const day = originalDate.getDate();
      const month = originalDate.toLocaleString("default", { month: "long" });
      const year = originalDate.getFullYear();

      return {
        title: item.title.rendered,
        excerpt: item.excerpt.rendered,
        date: {
          day: day,
          month: month,
          year: year,
        },
        content: item.content.rendered,
        image: item?._embedded["wp:featuredmedia"]?.[0]?.source_url,
      };
    });
  } else {
    return null;
  }
};
