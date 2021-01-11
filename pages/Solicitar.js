import React , { useState ,useEffect } from 'react';
import { useFocusEffect} from '@react-navigation/native';
import { StyleSheet, Text, View,Button, Image, TouchableHighlight, Alert, Platform, Modal} from 'react-native';
import { render } from 'react-dom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import Hamburguer from '../componentes/Header';
import ReactNativeBiometrics from 'react-native-biometrics';
import gif from '../../src/assets/images/fingerprint.gif';


export default function Solicitar() 
{ 
 useFocusEffect(
React.useCallback(()=>{

  ReactNativeBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
  .then((resultObject) => {
    const { success } = resultObject
  
    if (success) {
      console.log('successful biometrics provided')
      navigation.navigate('openClose');
    } else {
      console.log('user cancelled biometric prompt')
    }
  })
  .catch(() => {
    console.log('biometrics failed')
  })
})


 )


 

 /* useEffect(()=>{
    async function sensor() {
      ReactNativeBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then((resultObject) => {
        const { success } = resultObject
      
        if (success) {
          console.log('successful biometrics provided')
          navigation.navigate('openClose');
        } else {
          console.log('user cancelled biometric prompt')
        }
      })
      .catch(() => {
        console.log('biometrics failed')
      })
        }

sensor();
  }, [])*/
  
  const navigation = useNavigation();

 

 
  return (
    <View style={styles.container}>
  <Hamburguer/>
      <Image
        source={gif}
        style = {styles.log}
    //resize mode: utilizado quando a imagem aparece cortada na interface
        resizeMode="contain"
      ></Image>

    <Text style={styles.textUserP}>Você precisa inserir sua digital no leitor biométrico de seu telefone.
            </Text>
    


            
    </View>
  );
}


//Início dos estilos da página Solicitar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1214',
    alignItems: 'center',
   
  },
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
      marginTop:70,
      marginBottom:10
    },
  buttonContainer:  {
   
   marginTop:500,
   width:120,
   color:'white',
   marginLeft:'auto',
   marginRight:'auto'
  },
 
  log:{
    width:130,
    height:130,
  marginTop:140,
  marginBottom:80
  },


 cancelText:{
    color:'red',
    fontSize:16
 }
});

//final dos estilos da página Home
