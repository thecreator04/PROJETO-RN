

import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Button, Alert,  TextInput} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
    export default function DataUser(){
        const firestore = firebase.firestore(); 

       const [Teste, setTeste] = useState('');

        useEffect (() =>{

            const loadUser = async ()=>{
                const storageUser = await AsyncStorage.getItem('DataUser')
                const storage = JSON.parse(storageUser)
                data = storage
               setTeste(data);
            }
        loadUser();
        
        console.log(Teste)
    },[])

        console.log("pegou o console log")
        return (
           
<View>< TextInput style={styles.datauserE}>{Teste.email}</ TextInput>

< TextInput style={styles.datauserP}>{Teste.senha}</ TextInput></View>



        );


        }

const styles = StyleSheet.create({
    
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

      

