import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#F0EEEF",
    width: "100%",
    height: "100%",
  },
  singlenews: {
    height: 200,
    backgroundColor: "beige",
    margin: 10,
    borderRadius: 20,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  innerview: {
    backgroundColor: "rgba(255,255,255,0.7)",
    width: "50%",
    height: "30%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    textAlign: "center",
  },
  textinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "70%",
    borderRadius: 20,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  card: {
    width: "100%",
    height: 150,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 8,
  },
  dateText: {
    fontSize: 12,
    color: "black",
  },
  textCointainer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  changeButton: {
    marginRight: 20,
    position: "absolute",
    zIndex: 1100000,
    marginTop: 20,
    backgroundColor: "#A8A8A8",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    top: -15,
    right: 10,
  },
  currentEventText:{
    color:'#FF8882',
    marginTop:60,
    marginLeft:20,
    fontSize:20
  },
  currentEventContainer:{
    flexDirection:'column'
  }
});
