import { Platform, StyleSheet, StatusBar,Dimensions } from "react-native"; 
import React from 'react-native';

export default StyleSheet.create({   
  container: {
    flex: 1, justifyContent: 'center', flexDirection: "column",  
    ...Platform.select({ ios: { paddingTop: 20 }, android: { paddingTop: StatusBar.currentHeight } })   
  },
  item: {
    margin: 5, 
    padding: 5,
    color: "slategrey", 
    backgroundColor: "ghostwhite",
    textAlign: "center"
  },
  title: {
    fontSize: 22,
  },
   backgroundImage: {
    width: '100%',
    height: '100%',
    alignitems: "center"
  },
  mapView: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }   
});
