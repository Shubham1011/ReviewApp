import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,Image ,FlatList} from 'react-native';
import { globalstyles } from '../styles/globalstyles';
import {Card} from 'react-native-elements'

export default function Badreviews({navigation}) {
    const data=navigation.getParam('badreviews')
    const changescreen=()=>{
navigation.navigate('Review')
    }
    return (
        <View style={styles.container}>
        <Text style={globalstyles.subtext}>All the bad reviews , right below </Text>
         <Text style={styles.text}>We have got  total {navigation.getParam('badreviews').length} bad reviews </Text>
         <FlatList
        data={data}
        renderItem={({ item }) => (
            <Text style={styles.texxt}>{item}</Text>
        )}
        keyExtractor={item => item.id}
      />
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
    texxt:{
        fontSize:50,
        borderBottomWidth:2,
        width:'100%',
        backgroundColor: '#4f6e45',
        padding:20,
        margin:10,
        flex:1,
        width:600
        
    },
    text:{
        fontSize:20,
    }
    
    
  });
  
  