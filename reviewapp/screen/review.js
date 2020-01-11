import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { globalstyles } from '../styles/globalstyles';
export default function Review({navigation}) {
  const [name,setname]=useState('')
  const [reviews,setreview]=useState('')
  const [product,setproduct]=useState({
    id:'',
    name:'',
    reviews:['']
  })
  const addprod=()=>{
const prod={
  name:name,
  reviews:reviews
}
var url = new URL('https://7dd04f40.ngrok.io/analyze/addproduct/'),
    params = {name:name, reviews:reviews}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

   fetch(url,{method:'GET'})
   .then(navigation.navigate('Analyze',prod))
              .catch((error) => {
                console.error(error);
              });

 
  }
    return (
        <View style={styles.container}>
          <Text style={globalstyles.texxt}> Your Product</Text>
          <Text style={globalstyles.texxt}>Our Sentiment</Text>
          <View style={styles.intain}>
          <TextInput placeholder='Enter the product name here'
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text)=>setname(text)}
      />
      <TextInput placeholder='Enter the reviews in csv format (is nice,is good,is bad)'
      style={{margin:20, height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text)=>setreview(text)}
      />
        
       </View>
       <Button title='Add Product' onPress={addprod}></Button>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a2f5c8',
      alignItems: 'center',
      
    },
    intain:{
      color:'black',
      width:'100%',
      padding:20,
      margin:20,
      backgroundColor:'white'

    },
    inn:{
    
    }
    
  });

  
  