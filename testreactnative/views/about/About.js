import { Text, View,Image,ScrollView } from "react-native";
import React,{useContext} from "react";
import { styles } from "./AboutStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import HomePagePic from "../../assets/homePagePic3.jpg"
import { FontsContext } from "../../context/GlobalContext";

const About = () => {
  const fontsLoaded = useContext(FontsContext);
  
  if(!fontsLoaded) {
    return null
  }
  return (
    <ScrollView style={styles.mainContainer}>
      <Image
      source={HomePagePic}
      resizeMode="cover"
      style={styles.image}
    ></Image>
      <View style={styles.textContainer}>
        <Text style={[styles.aboutText,{fontFamily:'HKGrotesk'}]}>Sopron környékén jóval a rómaiak megjelenése előtt, kelta törzsek telepítették az első szőlőtőkéket, és ezzel kezdetét vette egy évezredeken átívelő, megannyi legendával átszőtt történet. Ha most a Soproni borvidékre látogatsz, abban a szerencsés helyzetben találhatod magad, hogy e históriás kötet legfrissebb fejezetének izgalmas cselekményébe csöppenhetsz. A borvidék sorra fedi fel új és rég elfeledett értékeit. A Fertő tó különlegessége, világörökségi-, nemzeti parki területei, Európa szerte növekvő ismertségnek és népszerűségnek örvendő madárvilága, és a tavat övező terroir csak néhány ezek közül. A borvidéken járva hol pompás kastélyok ejtik ámulatba az utazót, máshol pedig 6-700 éves lakóházak alatt megbúvó pincerendszerek várnak felfedezésre. A pincék mélyén pedig, a semmivel össze nem téveszthető, karakteres borok. A sokszínű kulturális programokhoz illőt választva, még közelebb kerülhetsz teljes összhang megéléséhez. Hagyd, hogy feloldódj a borvidék páratlan harmóniájában, melynek középpontjában az ember, a humánum áll. Ismerd meg nem csak a tájat, a múltunk emlékeit, máig élő hagyományainkat, hanem azt itt élő embereket is. Kitűnő alkalmat kínál erre egy-egy jóízű beszélgetés egy üveg bor, vagy helyi gasztronómiai különlegességeket felvonultató vacsora mellett. A borvidéki apró falvak és szőlőültetvények között kanyargó kerékpáros- és gyalogos útvonalakon, Sopron vagy Kőszeg középkori belvárosának szűk utcácskáin vezetett túrák során pedig a történelmi alakok és legendák elevenednek meg. Mindezek együttléte, együttesen fellépő egységes hatása adja a Soproni borvidék, mint humanista, slow régió semmivel össze nem hasonlítható varázsát.</Text>
        <Text>Soproni Borvidék Hegyközsége 9400 Sopron, Lackner K. u. 48. I/17. ajtó +36 70 509 8780 sopron@soproniborvidek.hu Elnök: Molnár Ákos molnar.akos@soproniborvidek.hu Hegybíró - soproni régió: Mikó Gábor miko.gabor@hnt.hu Hegybíró – kőszegi régió: Benke Alina benke.alina@hnt.hu Soproni Borút Egyesület 9400 Sopron, Ady Endre utca 31. Elnök: Molnár Tibor Áron +36 20 911 2364</Text>
      </View>

    </ScrollView>
  );
};

export default About;
