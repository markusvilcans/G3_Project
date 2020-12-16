import * as React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import styles from '../styles';
import background from '../assets/background.jpg';

export default function HomeScreen({ navigation }) {
  return (

  <ImageBackground source={background} style={styles.backgroundImage}>
  <View style={styles.container}>
  <View style={{height: 220}}>
  </View>
  <View style={{width: 130,alignSelf: 'center'}}>
    <Button title="Take a nap!" onPress={()=>{
          navigation.navigate("Map");
        }}/>
        </View>
  </View>
  </ImageBackground>
  );
}
