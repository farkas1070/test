import { Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./SettingsStyle";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { systemLanguage } from "../../lang/LanguageManager";

const Settings = () => {
  const [language, setLanguage] = useState(systemLanguage);

  return (
    <View style={styles.maincontainer}>
      <View style={styles.bodycontainer}>
        <View style={styles.languagecontainer}>
          <Text style={styles.languagetext}>Language</Text>
          <View style={styles.checkboxcontainer}>
            <BouncyCheckbox
              size={25}
              fillColor="black"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "black" }}
              onPress={() => {
                setLanguage("hu");
              }}
              isChecked={language === "hu"}
            />
            <Text style={styles.checkboxtext}>Magyar</Text>
            <BouncyCheckbox
              size={25}
              fillColor="black"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "black" }}
              onPress={() => {
                setLanguage("en");
              }}
              isChecked={language === "en"}
            />
            <Text style={styles.checkboxtext}>English</Text>
            <BouncyCheckbox
              size={25}
              fillColor="black"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "black" }}
              onPress={() => {
                setLanguage("de");
              }}
              isChecked={language === "de"}
            />
            <Text style={styles.checkboxtext}>Deutsch</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
