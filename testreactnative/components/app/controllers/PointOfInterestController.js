// TodoController.js

/**
 * if you have an instance of Strapi running on your local
 * machine:
 *
 * 1. Run `adb reverse tcp:8163 tcp:8163` (only on android)
 *
 * 2. You have to change the access IP from localhost
 * to the IP of the machine Strapi is running on.
 */
const url = 'http://localhost:1337/api/pois';

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