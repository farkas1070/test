import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  container: {
    flex: 1,
  },
  circlesContainer: {
    width: "100%",
    height: 200,
  },
  footer: {
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerItem: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  drawerItemText: {
    marginLeft: 30,
  },
  iconContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 30,
  },
  privacyPolicyContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },

  yellowCircleContainer: {
    position: "absolute",
    top: -80,
    left: -60,
  },
  redCircleContainer: {
    position: "absolute",
    top: 0,
    right: 30,
    zIndex: 30,
  },
  purplecircleContainer: {
    position: "absolute",
    top: -50,
    right: -20,
  },
  privacyPolicy:{
    color:'#352269'
  }
});
