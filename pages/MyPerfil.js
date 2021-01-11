import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Hamburguer from '../componentes/Header';
import DataUserInfo from '../componentes/DataUser/';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
export default function MyPerfil() {

  const [Teste, setTeste] = useState('');
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


  useEffect (() =>{



      const loadUser = async ()=>{
          const storageUser = await AsyncStorage.getItem('DataUser')
          const storage = JSON.parse(storageUser)
          data = storage
         setTeste(data);
         setEmail(Teste.email)
         setPassword(Teste.senha)
      }
  loadUser();
  
  //console.log(Teste + "1111")
},[])



function updateData(userId) {

  firestore()
  .collection('users')
  .doc(userId)
  .update({
    Email: Email,
    senha:Password,
  })
  .then(() => {
    console.log('User updated!');
  });
 
  
}

const [useruid, setUseruid] = useState("");

firebase.auth().onAuthStateChanged(user => {
  if (user) {

    setUseruid(user.uid)
    
  }
})




//let oi = "olá tudo bem?"+authUser

//console.log(authUser + "hey")


 return (
   <View style={styles.container}>

     <Hamburguer/>
     
        
        <TouchableHighlight onPress={() => signout()}>
                       <Image style={styles.perfilRadius} source={require('../../src/assets/images/teste.jpg')} />
        </TouchableHighlight>
        
        <View>
          < TextInput style={styles.datauserE}>{Email}</ TextInput>
</View>
<View>
        <TextInput style={styles.datauserP}>{Password}</ TextInput>
</View>
       

        <View style={styles.saveAlt}>
        <Button
           
              onPress= {() => updateData(useruid) }
              title="salvar alterações"
              color="#841584" 
              />
        </View>
   
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f1214',
      alignItems: 'center',
      
    },
    perfilRadius:{
      alignItems: "center",
      width:200,
      height:200,
      marginTop:20,
      justifyContent:"center",
      borderRadius:100,

    }, 
saveAlt:{

  marginTop:40
},
datauserE:{
  width:200,
  marginTop:30,

  color:'white',
  fontSize:20,
  borderBottomWidth:5,
  borderBottomColor:  'white'

},
datauserP:{
 width:200,
 height:50,
  marginTop:30,
  borderBottomWidth:5,
  borderBottomColor:  'white',
  color:'white',
  fontSize:20

}



  
  });


