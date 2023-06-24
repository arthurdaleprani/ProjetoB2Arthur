import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MAX_WIDTH = Dimensions.get('window').width * 0.9;
const MAX_HEIGHT = Dimensions.get('window').height * 0.7;

export default function CardFilme({ filme }) {
  const baseUrl = 'https://api.otaviolube.com';
  const navigation = useNavigation();

  const navigateToMovieDetails = () => {
    navigation.navigate('MovieDetailsPage', { filme: filme });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url }}
        style={styles.image}
      />
      <Text style={styles.title}>{filme.titulo}</Text>
      <Text style={styles.sinopse}>
        {filme.sinopse.length > 200 ? filme.sinopse.substring(0, 200) + '...' : filme.sinopse}
      </Text>
      <TouchableOpacity style={styles.btnText} onPress={navigateToMovieDetails}>
        <Text>Saiba mais...</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: MAX_WIDTH,
    flexDirection: 'column',
    padding: 10,
    margin: 15,
    justifyContent: 'center',
    backgroundColor:'red',
    height:MAX_HEIGHT,
    alignItems:'center'

  },
  button: {
   height:50,
   width:'50%',
   backgroundColor:'black',
   alignItems:'center',
   justifyContent:'center',
   marginTop: 20
   
 
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  

  image: {
    width: '30%',
    height: '40%',
    borderRadius: 10,
   
    
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5
  },
  sinopse: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
    textAlign:'justify'
  },
});

//npm install react-native-screens react-native-safe-area-context