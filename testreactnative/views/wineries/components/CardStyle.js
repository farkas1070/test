import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    padding: 8,
    
  },
  imageContainer: {
    padding: 8,
  },
  addressContainer:{
    flexDirection:'row',
    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 8,
    marginTop: 5,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 21,
    
    
    
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginLeft:5,
    marginRight:20,
    textAlign:'left',
  },
  phonetext: {
    marginBottom: 10,
    color: "#666",
  },
});
