
import axios from 'axios';

const url = 'http://10.0.0.113:1337/api/pois';
const url2 = 'https://soproniborvidek.nemethmark.com/wp-json/wp/v2/wineries?_embed&per_page=100';
const url3 = 'https://soproniborvidek.nemethmark.com/wp-json/tribe/events/v1/events?fbclid=IwAR24Rfi0wsaERL2G7ZWmu4cV6db6ilT6xuwuDBwb44cT9fIUtczC7v3o2cM';

export const get = async () => {
    try {
      const response = await axios.get(`${url}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
export const getBorászatok = async () => {
    try {
      const response = await axios.get(`${url2}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  export const getHírek = async () => {
    try {
      const response = await axios.get(`${url3}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };