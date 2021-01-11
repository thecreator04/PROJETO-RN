import React, {useState} from 'react';
import { StyleSheet, Text, View,Button, Image, TouchableHighlight, Alert, Platform, Modal, ToastAndroid} from 'react-native';
import { render } from 'react-dom';
//import * as LocalAuthentication from 'expo-local-authentication';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import RNBluetoothClassic, { BTEvents, BTCharsets } from 'react-native-bluetooth-classic';

export default function openClose() 
{ 

    return(
<View>
<Text>


    olá
</Text>
  
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f1214',
      alignItems: 'center',
     
    },
   
  });
