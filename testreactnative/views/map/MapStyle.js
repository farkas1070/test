import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  carousel: {
    position: "absolute",
    height: "20%",
    bottom: 30,
    borderRadius: 20,
  },
  button: {
    position: "absolute",
    bottom: 15,
    right: 150,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  resetButton: {
    position: "absolute",
    bottom: 80,
    right: 15,
    backgroundColor: "#007AFF",
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  toursButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "#007AFF",
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  filterButton: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "#007AFF",
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  slide: {
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
  },
  slideContent: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  textContainer: {
    width: "65%",
    height: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "35%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },

  callout: {
    width: 125,
    height: 75,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  markerimage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 3,
    marginBottom: 10,
    position: "relative",
  },
  bottomSheetHeaderButton: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
  bottomSheetFooter: {
    flexDirection: "column",
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
  },
  bottomSheetFilterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomSheetFilterButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  bottomSheetFilterBody: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
