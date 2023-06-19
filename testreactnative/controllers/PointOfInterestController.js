
import axios from 'axios';

const poiurl = 'http://10.0.0.113:1337/api/pois';
const borászatokurl = 'https://soproniborvidek.nemethmark.com/wp-json/wp/v2/wineries?_embed&per_page=100';
const eseményekurl = 'https://soproniborvidek.effixdev.com/wp-json/tribe/events/v1/events/?page=1&per_page=50&start_date=2020-06-16%2000%3A00%3A00&end_date=2025-06-16%2023%3A59%3A59&status=publish&fbclid=IwAR0aMf0stRm9O43LVog8yDtdS8FJoDrRRE-Pst82PM-QF06CnTubn9Mjo0Y';
const hírekurl = 'https://soproniborvidek.nemethmark.com/wp-json/wp/v2/posts?_embed&per_page=100&fbclid=IwAR1mdpYOIyVbxj20sInh_LdNCRvyJg3lATQpxUOvdzSnaGBmodr_94UZCuI'

export const get = async () => {
    try {
      const response = await axios.get(`${poiurl}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
export const getBorászatok = async () => {
    try {
      const response = await axios.get(`${borászatokurl}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  export const getEsemények = async () => {
    try {
      const response = await axios.get(`${eseményekurl}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  export const getHírek = async () => {
    try {
      const response = await axios.get(`${hírekurl}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };