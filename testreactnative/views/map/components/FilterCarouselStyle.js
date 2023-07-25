import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  carousel: {
    position: "relative",
    top: 0,
    
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  slide: {
    justifyContent: "center",
    alignItems:'center',
    width: "100%",
  },
  slideContent: {
    width: "100%",
  },
  textContainer: {
    height: "100%",
  },
  text: {
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    backgroundColor: "rgba(236,236,236,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: 60,
    height: 60,
  },
});
