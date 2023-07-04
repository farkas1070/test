import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PointOfInterestProvider } from "./context/PointOfInterestContext.js";
import StackNavigator from "./components/StackNavigator";
import OnBoarding from "./views/home/components/OnBoarding.js";
import React,{useState,useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [firstTimeOpen,setFirstTimeOpen] = useState(null)
  useEffect(()=>{
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('FirstTimeOpen');
        console.log(value)
        if (value !== null) {
          setFirstTimeOpen(false)
        } else {
          setFirstTimeOpen(true)
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  },[])
  return (
    <PointOfInterestProvider>
      <NavigationContainer>
        {firstTimeOpen ?  <OnBoarding />:<StackNavigator/>}
        
      </NavigationContainer>
    </PointOfInterestProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
