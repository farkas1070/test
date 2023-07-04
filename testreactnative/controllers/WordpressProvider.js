import axios from "axios";

export const getDataByUrl = async (url) => {
  try {
    const response = await axios.get(`${url}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getWineries = async (language) => {
  let querystring = null;
  
  switch(language) {
    case 'en':
      querystring = "https://soproniborvidek.nemethmark.com/wp-json/wp/v2/wineries?_embed&per_page=100&lang=en"
      break;
    case 'hu':
      querystring = "https://soproniborvidek.nemethmark.com/wp-json/wp/v2/wineries?_embed&per_page=100&lang=hu"
      break;
    
  }
  let data = await getDataByUrl(
    querystring
  );

  return data.map((item) => {
    return {
      //kell még kapcsolat, banner, szociális médiák ha van, ha a terkep false akkor nem kell, ha igen akkor lat long
      title: item?.title?.rendered,
      content: item?.content?.rendered,
      logo: item?.acf?.banner?.boraszat_logo?.sizes?.thumbnail,
      owner_name: item?.acf?.kapcsolat?.tulajdonos_nev,
      type: item?.type,
      services: item?._embedded?.['wp:term'][0],
      connection: {
        adress: item?.acf?.kapcsolat?.cim,
        telephone: item?.acf?.kapcsolat?.telefon,
        website: item?.acf?.banner?.weboldal,

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
};
export const getEvents = async (language) => {
  let querystring = null;
  switch(language) {
    case 'en':
      querystring = "https://soproniborvidek.effixdev.com/wp-json/tribe/events/v1/events/?page=1&per_page=50&start_date=2020-06-16%2000%3A00%3A00&end_date=2025-06-16%2023%3A59%3A59&status=publish&lang=en"
      break;
    case 'hu':
      querystring = "https://soproniborvidek.effixdev.com/wp-json/tribe/events/v1/events/?page=1&per_page=50&start_date=2020-06-16%2000%3A00%3A00&end_date=2025-06-16%2023%3A59%3A59&status=publish&lang=hu"
      break;
    
  }
  let data = await getDataByUrl(
    querystring
  );
  return data.events.map((item) => {
    return {
      start_date: item.start_date,
      end_date: item.end_date,
      title: item.title,
      image: item?.image?.sizes?.medium?.url,
    };
  });
};
export const getNews = async (language) => {
  let querystring = null;
  switch(language) {
    case 'en':
      querystring = "https://soproniborvidek.nemethmark.com/wp-json/wp/v2/posts?_embed&per_page=100&fbclid=IwAR1mdpYOIyVbxj20sInh_LdNCRvyJg3lATQpxUOvdzSnaGBmodr_94UZCuI&lang=en"
      break;
    case 'hu':
      querystring = "https://soproniborvidek.nemethmark.com/wp-json/wp/v2/posts?_embed&per_page=100&fbclid=IwAR1mdpYOIyVbxj20sInh_LdNCRvyJg3lATQpxUOvdzSnaGBmodr_94UZCuI&lang=hu"
      break;
    
  }

  let data = await getDataByUrl(
   querystring
  );
  return data.map((item) => {
    return {
      title: item.title.rendered,
      excerpt: item.excerpt.rendered,
      content: item.content.rendered,
      image: item?._embedded["wp:featuredmedia"]?.[0]?.source_url,
    };
  });
};
