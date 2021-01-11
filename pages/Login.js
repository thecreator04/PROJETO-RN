 import React , { useState ,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Touchable, Keyboard} from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { render } from 'react-dom';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login(){
    const navigation = useNavigation();
    //var user = firebase.auth().currentUser;
    const[Email, setEmail] = useState('');
    const[Password, setPassword] = useState('');
    



useEffect(()=> {

async function loadStorage(){

  const storageUser = await AsyncStorage.getItem('DataUser')
var obj = JSON.parse(storageUser) //transforma o conteúdo da variável storageUser(String) em um arquivo JSON

if(storageUser){
  navigation.navigate('Home');


}
else{
console.log('sem dados')
  navigation.navigate('Login');
}
 

}
loadStorage();





//login();

    }, [])
    
    
    
    let login = async () => {

        try{
          //const user = await firebase.auth().signInWithEmailAndPassword(Email,Password);
         //   if(login){

             // let data = {
             //   email: Email,
             //   senha:Password
          //  }

           // DataLoginUser(data);
           // console.log(data)

              navigation.navigate('Home');
            //}
          }
        catch (err){
            console.log(err);
            alert('usuário ou senha estão incorretos')
          }
    }
      

     
       

 /* async function DataLoginUser(data){
    await AsyncStorage.setItem('DataUser', JSON.stringify(data)); // Transforma JSON em string
  }*/

    return(
        <View style={styles.container}>
              <Image
              source={require('../../src/assets/logopng.png')}
    
              //resize mode: utilizado quando a imagem aparece cortada na interface
              style = {styles.logopng} resizeMode="contain"
              /> 
            

              <TextInput
              style={styles.inputUserADM}
              placeholder="Digite o seu email"
              placeholderTextColor="white" 
              value={Email}
              onChangeText={text=>
              {setEmail(text);}}
              /> 
    
              <TextInput
              style={styles.inputUserADM}
              
              placeholder="Digite a Sua senha"
              placeholderTextColor="white"
              secureTextEntry={true}
              value={Password}
              onChangeText={senha =>
              {setPassword(senha);}}
              >


               
              </TextInput>
    
              <Button
           
              onPress= {() => login() }
              title="Login"
              color="#841584" 
              />
              <Text style={styles.textUserP}>Caso você não tenha sua conta cadastrada no sistema, contate algum administrador.
              </Text>
              <Text style={styles.exclamation}>( ! )</Text>
        </View> 
      );
};
const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      backgroundColor: '#0f1214',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    //estilo para o logo do aplicativo
    logopng:
    {
      width:80,
      height:80,
      marginTop:20,
      
    },
  
    //estilo para o campo TextInput de usuário e senha(entrada de dados)
    inputUserADM:
   {
      width:240,
      height:50,
      backgroundColor:"transparent",
      borderBottomWidth:2,
      borderBottomColor:"#fff",
      position:"relative",
      top:-30,
      marginTop:60,
      color:"white",
      
    
    },
  
    //estilo para o campo que contém informações caso não tenha um administrador cadastrado(texto de ajuda)
    textUserP:
    {
      fontSize:16,
      width:300,
      height:80,
      color:"white",
      backgroundColor:"#06202d",
      textAlign:"center",
      textAlignVertical:"center",
      borderRadius: 10,
      marginTop:30,
      marginBottom:10
    },
    exclamation:{
      color:"white",
      fontSize:20
    }
  
    
  
   
  });
  