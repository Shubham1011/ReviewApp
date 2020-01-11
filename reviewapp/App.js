import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo';
import Home from './screen/home';
import Navigator from './routes/homeStack'
export default function App() {
  const loadfonts=()=> {
  Font.loadAsync({
    'myfont':require('./assets/fonts/Anton-Regular.ttf')
  })
  }
  
  const [fontsloaded,setfontsloaded]=useState(false)
  if(fontsloaded)
  {
  return (
   <Navigator/>
  );
  }
  else{
    return(
      <AppLoading startAsync={loadfonts} onFinish={()=>setfontsloaded(true)}/>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

