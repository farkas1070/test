
import axios from 'axios';

const url = 'http://10.0.0.113:1337/api/pois';
const url2 = 'https://soproniborvidek.nemethmark.com/wp-json/wp/v2/wineries?_embed&per_page=100';
const url3 = 'https://soproniborvidek.effixdev.com/wp-json/tribe/events/v1/events/?page=1&per_page=50&start_date=2020-06-16%2000%3A00%3A00&end_date=2025-06-16%2023%3A59%3A59&status=publish&fbclid=IwAR0aMf0stRm9O43LVog8yDtdS8FJoDrRRE-Pst82PM-QF06CnTubn9Mjo0Y';

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