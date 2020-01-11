import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { globalstyles } from '../styles/globalstyles';
import {Card} from 'react-native-elements'

export default function Home({navigation}) {
    const changescreen=()=>{
navigation.navigate('Review')
    }
    return (
        <View style={styles.container}>
          <Text style={globalstyles.texxt}>Welcome Aboard</Text>
          <Text style={globalstyles.subtext}>Helping you find problems in your product</Text>
          <Card title='Steps to use our Application'>
              <Text style={globalstyles.subtext}>1:Add a product </Text>
              <Text style={globalstyles.subtext}>2:Add the reviews </Text>
              <Text style={globalstyles.subtext}>3:Press the Process Button </Text>
              <Text style={globalstyles.subtexttwo}>That's it !!! Get going by pressing the below button </Text>
              </Card>
          <Button styles={globalstyles.bt} title='Go to Add Product' onPress={changescreen}> </Button>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a2f5c8',
      alignItems: 'center',
      padding:30,
      
    },
    
    
  });
  
  