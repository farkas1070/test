// TodoController.js
import axios from 'axios';
/**
 * if you have an instance of Strapi running on your local
 * machine:
 *
 * 1. Run `adb reverse tcp:8163 tcp:8163` (only on android)
 *
 * 2. You have to change the access IP from localhost
 * to the IP of the machine Strapi is running on.
 */
const url = 'http://10.0.0.113:1337/api/pois';
const url2 = 'https://soproniborvidek.nemethmark.com/wp-json/wp/v2/wineries?_embed&per_page=100';

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