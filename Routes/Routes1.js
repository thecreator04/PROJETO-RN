import React , { useState ,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, Text,View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Solicitar from '../pages/Solicitar';
import Registro from '../pages/Registro';
import Gerenciador from '../pages/Gerenciador';
import openClose from '../pages/openClose';

//import { ListAccordionGroupContext } from 'react-native-paper/lib/typescript/src/components/List/ListAccordionGroup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import perfil from '../pages/MyPerfil'

const firestore = firebase.firestore();
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

let signout = async () => {
  
    try{
      //const user = await firebase.auth().signOut(myText,mySenha);
      const storage = await AsyncStorage.removeItem('DataUser');
      firebase.auth().signOut().then(function() {
        console.log("deslogado")

        navigation.navigate('Login');
      }).catch(function(error) {
        console.log("ainda logado")
      });
      }
    catch (err){
        console.log(err);
        alert('você fez logout do sistema')
      }
    


  }

  



function CustomDrawerContent({ navigation }) {

    return (
        <View style={styles.container} >

      <View style={styles.spaceItems}> 
      <TouchableOpacity
       style={styles.ButtonClass}
         onPress={() => {
          
             navigation.navigate('perfil');
           }}
      >
        <Text style={{color:"white",  fontSize:18}}>Perfil</Text>
      </TouchableOpacity>


        <TouchableOpacity
       style={styles.ButtonClass}
         onPress={() => {
          
             navigation.navigate('Home');
           }}
      >
        <Text style={{color:"white",  fontSize:18}}>Home</Text>
      </TouchableOpacity>
       
       <TouchableOpacity 
       style={styles.ButtonClass}
         onPress={() => {
          
             navigation.navigate('Gerenciar Usuários');
           }}
      >
        <Text style={{color:"white",  fontSize:18}}>Gerenciar Usuários</Text>
      </TouchableOpacity>


     <TouchableOpacity
       style={styles.ButtonClass}
         onPress={() => {
          
             navigation.navigate('Solicitar Entrada');
           }}
      >
        <Text style={{color:"white",  fontSize:18}}>Solicitar Entrada</Text>
      </TouchableOpacity>


     <TouchableOpacity
       style={styles.logoutButton}
         onPress={() => {
            signout(),
             navigation.navigate('Login');
           }}
      >
        <Text style={{color:"white",  fontSize:18}}>Fazer Logout</Text>
      </TouchableOpacity>
    {/* <Button
     style={styles.logoutButton}
        colorText="red" 
      title="Fazer Logout"
      onPress={() => {
       signout(),
        navigation.navigate('Login');
      }}

    />
    */}
     </View>
     </View>
    );
  }


function MyDrawer() {
    return (
        
        <Drawer.Navigator

        drawerContent={(props) => <CustomDrawerContent {...props} />
    
    }
        >
          
            
       <Drawer.Screen name="Home" component={Home}
        options={{
            drawerLabel : (({focused})=> <Text style={{color:'white'}}>Home</Text>),
 
    }} />
     <Drawer.Screen name="perfil" component={perfil}
        options={{
            drawerLabel : (({focused})=> <Text style={{color:'white'}}>Home</Text>),
 
    }} />
    <Drawer.Screen name="Registro" component={Registro}
        options={{
            drawerLabel : (({focused})=> <Text style={{color:'white'}}>Registro</Text>),
 
    }} />
       <Drawer.Screen name="Gerenciar Usuários" component={Gerenciador} options={{
            drawerLabel : (({focused})=> <Text style={{color:'white'}}>Gerenciar Usuários</Text>),
 
    }} />
    <Drawer.Screen name="Solicitar Entrada" component={Solicitar}  options={{
            drawerLabel : (({focused})=> <Text style={{color:'white'}}>Solicitar entrada</Text>),
 
    }}/>
<Drawer.Screen name="fazer Logout" component={Login}  options={{
            drawerLabel : (({focused})=> <Text style={{color:'white'}}>Fazer Logout</Text>),
 
    }}/>
    
      
     </Drawer.Navigator>

    );
  }

export default function Routes()
{
    
    return(
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
            headerStyle:
            {
                backgroundColor:'#06202d'// cor do background do header da página adicionar
            },
                headerTintColor:'#fff'//cor da fonte do texto no header da pagina adicionar
            }}  />
             <Stack.Screen name="Home" component={MyDrawer} options={{
           /* headerStyle:
            {
                backgroundColor:'#06202d'// cor do background do header da página adicionar
            },
                headerTintColor:'#fff'//cor da fonte do texto no header da pagina adicionar*/
                headerShown:false
            }}  />

            
           <Stack.Screen name="Gerenciar" component={MyDrawer} options={{
            headerStyle:
            {
                backgroundColor:'#06202d'// cor do background do header da página adicionar
            },
                headerTintColor:'#fff'//cor da fonte do texto no header da pagina adicionar
            }}  />
            
            
           
        <Stack.Screen name="Registro" component={MyDrawer}options={{
            headerStyle:
            {
                backgroundColor:'#06202d'// cor do background do header da página adicionar
            },
                headerTintColor:'#fff'//cor da fonte do texto no header da pagina adicionar
            }}  />
            

        <Stack.Screen name="openClose"  component={openClose} options={{
            headerStyle:
            {
                backgroundColor:'#06202d'// cor do background do header da página adicionar
            },
                headerTintColor:'#fff'//cor da fonte do texto no header da pagina adicionar
            }}  />
        
      </Stack.Navigator>
          
    </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
  
      
    },
    ButtonClass:{
    marginTop:25,
   

    },
    spaceItems:{
      marginTop:30

    },
    //estilo para o logo do aplicativo
    logopng:
    {
      width:80,
      height:80,
     marginTop:20
      
    },
   
      logoutButton:{
        alignItems: "center",
        backgroundColor: "red",
     width:140,
     height:40,
        marginTop:340,
        justifyContent:"center",
    borderRadius:20,

      },
  
    //estilo para o campo TextInput de usuário e senha(entrada de dados)
  
  
    //estilo para o campo que contém informações caso não tenha um administrador cadastrado(texto de ajuda)
   
    
  
   
  });
  
/*<Drawer.Navigator 
       drawerStyle={{backgroundColor:'#0a0a0a'
       
       }}
       drawerContentOptions={{
           activeBackgroundColor: '#011120',
          labelStyle:{
              fontWeight:'bold'
          }
       }}
       
       >
            <Drawer.Screen name="Login" component={Login}
       options={{
           drawerLabel : (({focused})=> <Text style={{color:'white'}}>Fazer login em uma conta diferente</Text>),
          
   }} />
      <Drawer.Screen name="Home" component={Home}
       options={{
           drawerLabel : (({focused})=> <Text style={{color:'white'}}>Home</Text>),

   }} />
      <Drawer.Screen name="Gerenciar Usuários" component={MyStack} options={{
           drawerLabel : (({focused})=> <Text style={{color:'white'}}>Gerenciar Usuários</Text>),

   }} />
      <Drawer.Screen name="aparelhos bluetooth disponíveis" component={bluetoothDevice}  options={{
           drawerLabel : (({focused})=> <Text style={{color:'white'}}>aparelhos bluetooth disponíveis</Text>),

   }}/>
     <Drawer.Screen name="Solicitar entrada" component={Solicitar}  options={{
           drawerLabel : (({focused})=> <Text style={{color:'white'}}>Solicitar entrada</Text>),

   }}/>
    </Drawer.Navigator>
            */ 