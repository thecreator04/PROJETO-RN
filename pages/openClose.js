import React, {useEffect} from 'react';
import { StyleSheet, Text, View,Button, Image,  Alert, Platform, Modal, ToastAndroid} from 'react-native';
import { render } from 'react-dom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import RNBluetoothClassic, { BTEvents, BTCharsets } from 'react-native-bluetooth-classic';
import base64 from 'react-native-base64';
export default function openClose() 
{ 

  useEffect(()=>{
    async function VerDispositivosDisponiveis(){
try{

const lista = await RNBluetoothClassic.list();
console.log(lista); 
}
catch (e) {
console.log(e);
}
}
async function AtivarBluetoothDoUsuário(){
try{

const enable = await RNBluetoothClassic.requestEnable();

if(enable){
  ConectarAoDispositivo();
}
}
catch (e) {
console.log(e);
}
}
async function ConectarAoDispositivo(){
  try{
 
  const conectar = await RNBluetoothClassic.connect("98:D3:31:F5:A7:EA");
  console.log(conectar); //caso conectar==true, seu smartphone foi conectado

  if(conectar){
  
  const dado = base64.encode('B');
  const send = await RNBluetoothClassic.writeToDevice(dado);
  console.log(send + "qqq"); 
  }
  }
  catch (e) {
  console.log(e + "errorrrr");
  }
  }

    AtivarBluetoothDoUsuário();
    VerDispositivosDisponiveis();
  }, [])
  
async function buttonGreen(){


  const dado = base64.encode('G');
  const send = await RNBluetoothClassic.writeToDevice(dado);
  console.log(send + "qqq");
}
async function buttonRed(){


  const dado = base64.encode('R');
  const send = await RNBluetoothClassic.writeToDevice(dado);
  console.log(send + "qqq");
}
  
  
  

 
  return (
    <View style={styles.container}>
        
       

        <TouchableOpacity
       style={styles.buttonRed}
         onPress={() => {
            buttonRed()
           
           }}
      >
          
       

        <Text style={{color:"white",  fontSize:18}}>Bloquear Porta</Text>
      </TouchableOpacity>

          

      <TouchableOpacity
       style={styles.buttonGreen}
       onPress={() => {
        buttonGreen()
       
       }}
      >
          
       

        <Text style={{color:"white",  fontSize:18}}>Liberar Porta</Text>
      </TouchableOpacity>
          
        
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f1214',
      alignItems: 'center',
     
    },
    buttonRed: {
      alignItems: "center",
      backgroundColor: "red",
   width:200,
   height:80,
      marginTop:300,
      justifyContent:"center",
  borderRadius:20,

    },
    buttonGreen: {
      alignItems: "center",
      backgroundColor: "green",
   width:200,
   height:80,
      marginTop:50,
      justifyContent:"center",
  borderRadius:20,

    },
   
  });
