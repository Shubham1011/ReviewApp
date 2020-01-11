import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,Image,FlatList } from 'react-native';
import { globalstyles } from '../styles/globalstyles';
import {Card} from 'react-native-elements'

export default function Analyze({navigation}) {
  const [loading,setLoading]=useState('')
  const [show,setShow]=useState(false)
  const [showbad,setshowbad]=useState(false)
  const [decide,setResp]=useState('');
  const [respprev,setResprev]=useState([]);
  const [entireresp,setEntireResp]=useState({
    'goodcount': 1,
    'badcount': 2,
    'goodbadcount': false,
    'badreviews': [
      'bad',
      'bad'
    ]
  })
  const scanbad=()=>{
    console.log('clicked')
    navigation.navigate('Badreviews',entireresp)
  }

  const analyze=()=>{
    setLoading(' Loading ... ')
  const reviews=navigation.getParam('reviews');
  console.log(reviews)
  setShow(true)  
     var url = new URL('https://7dd04f40.ngrok.io/analyze/analyzesentiment'),
    params = {reviews:reviews}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

   fetch(url,{method:'GET'})
   .then(response => {return response.json()})
      .then(json => {
        console.log(json.goodbadcount)
        if(json.goodbadcount)
        {
        setResp('like')
        setShow(true)  
      }
        else
        {
        setResp('hate')
      setshowbad(true)  
      }
        setResprev(json.badreviews)
        setEntireResp({
          'goodcount': json.goodcount.toString(),
    'badcount': json.badcount.toString(),
    'goodbadcount': json.goodbadcount.toString(),
    'badreviews':json.badreviews
        })
       console.log(entireresp) 
      })
    .catch((error) => {
                console.error(error);
              });
  }
    if(show){
    return (
        <View style={styles.container}>
          <Text style={styles.texxt}>Product Analyzed Successfully</Text>
        
          <Text style={styles.texxt}>Bravo !!!</Text>
          <Text style={styles.texxt}>According to our algorithm</Text>
          <Text style={styles.texxt}>More people {decide} your product</Text>
          <Button style={styles.btn} onPress={scanbad} title='Then too Analyze the small Problem in bad reviews'></Button>
       
      
    
          
        </View>
      );
    }
    else if(showbad)
    {
      return(
        <View style={styles.container}>
          <Text style={styles.texxt}>Product Analyzed Successfully</Text>
        
          <Text style={styles.texxt}>Oh no !!!</Text>
          <Text style={styles.texxt}>According to our algorithm</Text><Text style={styles.texxt}>More people {decide} your product</Text>
          <Button style={styles.btn} onPress={scanbad} title='Analyze the Problem' ></Button>
          
         
       
    
    
          
        </View>
      )
    }
    else
    {
      return(
        <View>
              <Button title='Start Processing'  onPress={analyze}></Button>
              <Text style={styles.load}>{loading}</Text>
              </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a2f5c8',
      alignItems: 'center',
      padding:30,
      
    },
    styles:{
      
    },
    load:{
      fontSize:50,
      fontWeight:'bold',
      marginTop:80
     
      
    },
    texxt:{
      fontSize:20,
      fontWeight:'bold',
      borderBottomWidth:1,
      padding:20,
      marginBottom:20
    },
    btn:{
    
    }
    
    
  });
  
  