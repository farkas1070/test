

import React, { useEffect,createContext, useState } from 'react'
export const pointsOfInterestContext = createContext();
import { getBorászatok } from "../controllers/PointOfInterestController";



export const PointOfInterestProvider = (props) => {
    const [pointsOfInterest, setpointsOfInterest] = useState([]);
  


  

    useEffect(() => {
      const fetchData = async () => {
        const response = await getBorászatok();
  
        const extractedData = response.map((item) => {
          return {
            title: item.title.rendered,
            content: item.content.rendered,
            logo: item?.acf?.banner?.boraszat_logo?.sizes?.medium,
          };
        });
        setpointsOfInterest(extractedData);
  
      };
  
      fetchData();
    }, []);

  return (

    <pointsOfInterestContext.Provider value={[pointsOfInterest, setpointsOfInterest]} >
      {props.children}   
    </pointsOfInterestContext.Provider>

  )
}