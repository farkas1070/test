import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InformationModal from "./components/InformationModal";
const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <InformationModal modalVisible={modalVisible} closeModal={closeModal} />
      <Text>**Kurva jol kinezo home screen**</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
