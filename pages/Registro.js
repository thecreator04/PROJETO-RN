import React , {useState}  from 'react';
import { StyleSheet, Text, View,Button, Image, TextInput, Alert, CheckBox} from 'react-native';
import { render } from 'react-dom';
import {useNavigation} from '@react-navigation/native';
import Hamburguer from '../componentes/Header';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

export default function Registro(){
    const firestore = firebase.firestore();
  const navigation = useNavigation();
  
  var user = firebase.auth().currentUser;

  if (user != null) {
    var uid = user.uid;
  }
  let isadm;
  
  let value = () =>{
    if(isSelected == true){
       isadm = "true"
    }
    else{
       isadm = "false"
    }
    //Alert.alert(isadm)
  }
  
  let signUp = async () => {
    if(isSelected == true){
      isadm = "true"
   
    try{
      const NewUser = await firebase.auth().createUserWithEmailAndPassword(myText,mySenha);
     const userId = NewUser.user.uid;
      Alert.alert('sign up realizado');
      
      firestore.collection("users").doc(userId).set({    //coleção dos usuários no banco de dados
        Email:myText,
        senha:mySenha,
        adm:true,
      })
    }
    catch (err){
      console.log(err);
      Alert.alert('ERRO','sign up não pode ser realizado')
    }
  }

    else{
        try{
            const NewUser = await firebase.auth().createUserWithEmailAndPassword(myText,mySenha);
            const userId = NewUser.user.uid;
            Alert.alert('sign up realizado');
        

            firestore.collection("users").doc(userId).set({  
              Email:myText,
              senha:mySenha,
              adm:false,
            })
        }
        catch (err){
          console.log(err);
          Alert.alert('sign up não realizado')
        }
     }

    /* navigation.navigate('Gerenciamento')*/

}

  const [isSelected, setSelection] = useState(false); //muda o estado do botão checkbox de administradores
  const[myText, setMyText] = useState('');// muda o estado do campo email
  const[mySenha, setSenha] = useState('');//muda o estado do campo senha
 

    return (
        <View style={styles.container}>
            <Hamburguer/>
    
            <TextInput
            style={styles.inputUserADM}
            placeholder="Digite o email do  usuário"
            placeholderTextColor="white" 
                value={myText}
                onChangeText={text=>
                {setMyText(text);}}
            
            /> 
            <TextInput
            style={styles.inputUserADM}
            placeholder="Digite a sua senha"
            placeholderTextColor="white" 
            secureTextEntry={true}
            value={mySenha}
            onChangeText={senha =>
            {setSenha(senha);}}
            />
    
          <View style={styles.checkboxContainer}> 
              <CheckBox 
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.checktext}>Administrador</Text>
          </View>
    
            <View style={{paddingTop:50}}>
                <Button
                title="registrar"
                onPress={() => signUp()}
                >
                </Button>
            </View>
           {/* <View style={{paddingTop:50}}>
                <Button
                title="teste"
                onPress={() => value()}
                >
                </Button>
            </View>
            */}
        
        </View>
      );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f1214',
      alignItems: 'center',
     
      
    },
    //estilo para o logo do aplicativo
    logopng:{
      width:80,
      height:80,
      marginTop:20,
      
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
      marginTop:40
    },
    checkbox: {
     marginRight:6
    },
    //estilo para o campo TextInput de usuário e senha(entrada de dados)
    inputUserADM: {
      width:310,
        height:60,
        backgroundColor:"transparent",
        borderBottomWidth:2,
        borderBottomColor:"#fff",
        position:"relative",
        top:4,
        marginTop:70,
        color:"white",
    fontSize:18,
    },
    checktext:{
      color:"white",
      marginRight:180,
      marginTop:6
      
    },
  
    //estilo para o campo que contém informações caso não tenha um administrador cadastrado(texto de ajuda)
    textUserP:{
      width:250,
      height:80,
      color:"white",
      backgroundColor:"#06202d",
      textAlign:"center",
      textAlignVertical:"center",
      borderRadius: 10,
      marginTop:5,
      marginBottom:10,
    },
    
  });