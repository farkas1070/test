import axios from "axios";

const poiurl = "http://10.0.0.113:1337/api/pois";

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

export const getWineries = async () => {
  const data = await getDataByUrl(
    "https://soproniborvidek.nemethmark.com/wp-json/wp/v2/wineries?_embed&per_page=100"
  );
  return data.map((item) => {
    return {
      title: item.title.rendered,
      content: item.content.rendered,
      logo: item?.acf?.banner?.boraszat_logo?.sizes?.medium,
    };
  });
};
export const getEvents = async () => {
  const data = await getDataByUrl(
    "https://soproniborvidek.effixdev.com/wp-json/tribe/events/v1/events/?page=1&per_page=50&start_date=2020-06-16%2000%3A00%3A00&end_date=2025-06-16%2023%3A59%3A59&status=publish&fbclid=IwAR0aMf0stRm9O43LVog8yDtdS8FJoDrRRE-Pst82PM-QF06CnTubn9Mjo0Y"
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
export const getNews = async () => {
  const data = await getDataByUrl(
    "https://soproniborvidek.nemethmark.com/wp-json/wp/v2/posts?_embed&per_page=100&fbclid=IwAR1mdpYOIyVbxj20sInh_LdNCRvyJg3lATQpxUOvdzSnaGBmodr_94UZCuI"
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
