import { StyleSheet} from "react-native";
export const styles = StyleSheet.create({
    
    
    card: {
      width:'100%',
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 16,
      elevation: 2,
    },
    image: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      resizeMode: 'cover',
    },
    cardContent: {
      padding: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    content: {
      fontSize: 14,
    },
    
  });