import React, {useState,useEffect}  from 'react';
import {View, Text, StyleSheet, TouchableOpacity,CheckBox,Button, Alert} from 'react-native';
import Gerenciamento from '../pages/Gerenciador.js';
import Icon from 'react-native-vector-icons/Feather';

export default function UserList({data,deleteItem}){

    //const [checked, setChecked] = useState(false);

    


   
    return(
    <View style={styles.container}>
     
     
   

     
     <Text style={{color: '#FFF', paddingLeft:10,  height:40, width:220,fontSize:18, paddingVertical:4, fontWeight:"bold"}}>
         
         {data.email}
   </Text>
    
      
        <TouchableOpacity onPress={ () => deleteItem(data.key) }  style = {styles.touchBleT2}>
         <Icon name="trash-2" color="white" size={30}/>
         </TouchableOpacity>
  
        
      

      
      
    </View>
    
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#841584',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        alignContent:"center",
        width:360,
        height:100,
       
       

    },
    checkboxContainer: {
        flexDirection: "row",
      },
      checkbox: {
       marginRight:13,
       backgroundColor: 'transparent',
       borderRadius: 0,
       borderWidth: 1,
       
       margin: 2,
   
      },
      touchBleT1:{
        marginLeft:34,
      width:40,

      
      },
      touchBleT2:{
        width:50,
        marginLeft:64,   
            }
     
});