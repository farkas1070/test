import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  carousel: {
    position: "relative",
    top: 0,
    width: "100%",
    backgroundColor: "rgba(247, 247, 247, 0.5)",
  },
  slide: {
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
    paddingTop: 10,
  },
  slideContent: {
    width: "100%",
  },
  selectedButton: {
    backgroundColor: "#352269",
    alignItems: "center",
    borderRadius: 35,
    height: 50,
    padding: 10,
    flexDirection: "row",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 11,
    marginBottom: 11,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.10)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  textContainer: {
    height: "100%",
  },
  text: {
    fontSize: 13,
    color: "#352269",
    textAlign: "center",
    marginRight: 5,
  },
  unselectedButton: {
    backgroundColor: "rgba(236,236,236,1)",
    alignItems: "center",
    borderRadius: 35,
    height: 50,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "white",
    marginRight: 10,
    marginLeft: 10,
    marginTop:11,
    marginBottom: 11,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.10)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  container: {
    backgroundColor: "rgba(236,236,236,1)",
  },
});
