import React , {useState,useEffect}  from 'react';
import { StyleSheet, Text, View,Button, Image, TextInput, Alert, TouchableOpacity, FlatList,CheckBox} from 'react-native';
import { render } from 'react-dom';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import Hamburguer from '../componentes/Header';
import UserList from '../componentes/UserList.js';
import Icon from 'react-native-vector-icons/Feather';


export default function Gerenciador(){
 
  const navigation = useNavigation();
  const firestore = firebase.firestore();   
  const [Account, setAccount] = useState([]);
 
  useEffect(() =>{
    async function  loadUsers(){
     await firestore.collection('users').onSnapshot((snapshot)=>{
      setAccount([]);
      snapshot.forEach(doc => {
        let list = doc.data();
        const data = {
          key:doc.id,
          email:list.Email,
        
        }
        setAccount(oldArray => [...oldArray, data]);
      });
    },
    (error) =>{
      console.log('Error getting documents', err);

    });

  }
      
    loadUsers();
    },[])
    
 

let excluir = async () => {
  //Alert.alert(item.id)

  //let deleteDoc = firestore.collection('users').doc(item.key).delete();
  

}

async function handDelete(key){
  await firestore.collection('users').doc(key).delete();

  var user = firebase.auth().currentUser;

  user.delete().then(function() {
    // User deleted.
  }).catch(function(error) {
    // An error happened.
  });
  Alert.alert('usuário excluido com sucesso')
}

const [checked, setChecked] = useState(false);
    return(
        <View style ={styles.container}>
          
         <Hamburguer/>
         <View style={{ marginLeft:240,backgroundColor:"green", borderRadius:10, borderWidth:2, borderColor:"white", marginBottom:10}}>

         <Icon
    
    name="plus"
    style={{
      color: "white",
      fontSize: 40
    }}

    onPress = { () => {navigation.navigate('Registro')}} 
  />
  
        
        
       
     </View>

        
        
        <FlatList style = {styles.flatStyle}
        data={Account}
        keyExtractor={item => item.key}
        renderItem={ ({item}) => (
        <UserList data={item} deleteItem={handDelete}  />
      
        ) }
    
           
           />
          

              
       
        </View>
       

    );
}
const styles = StyleSheet.create({

    container: {
     flex: 1,
     backgroundColor: '#0f1214',
     alignItems: 'center',
     justifyContent: 'center',
     },

     flatStyle:{
      marginTop:10,

     },
     buttonContainer:  {
      margin:70,
      flexDirection:'row',
      justifyContent:'space-between'
       
     },
     box:{
       flex:1,
       margin:10,
     },
     touch:{
      width:30,
      flexDirection:'row',
  
      alignItems:'center',
      
      
     },
     touchText:{
       fontSize:20,
       color:"black",
       justifyContent:'center',
       
       
     },
     touchPLus:{
    position:"absolute",
    top:50,
   right:20,
  


   

     }



     })