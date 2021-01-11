import React , { useState ,useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert,TouchableHighlight, TouchableOpacity, FlatList, ScrollView, ScrollViewComponent} from 'react-native';
import { render } from 'react-dom';
import {useNavigation} from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Hamburguer from '../componentes/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar, Card, Title,Button, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export default function Home() {
   let signout = async () => {
  
        try{
          const user = await firebase.auth().signOut(myText,mySenha);
          const storage = await AsyncStorage.removeItem('DataUser');
          }
        catch (err){
            console.log(err);
            alert('você fez logout do sistema')
          }
          navigation.navigate('Login');
    
    
      }
      
      const firestore = firebase.firestore();
      
    
      const navigation = useNavigation();
    
      const [Adm, setAdm] = useState(false);
    
    
      
      var user = firebase.auth().currentUser;
      //var userUid = user.uid;
     
    
      
    
     /* let usersRef = firestore.collection("users").doc(userUid);
      let getDoc = usersRef.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } 
         else {
         
            console.log('Document data:', doc.data());
            
              if(doc.data().adm == true){
                setAdm(true);
                  
                  
                }
                else{
                  setAdm(false);
                  
                }

                console.log(Adm)
          }
         
        })
        .catch(err => {
          console.log('Error getting document', err);
        }); 
        */
    
    
    //lista de usuários vindos do firebase
    const [Account, setAccount] = useState([]); // hook para mudar o estado dos dados vindos do firestore
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
        (err) =>{
          console.log('Error getting documents', err);
    
        });
    
      }
          
        loadUsers();
        },[])

        const MyComponent = () => (
          <Card style={styles.MyComponentSt}>
            <Card.Title title="Thiago Cazuni" subtitle="" left={LeftContent} />
            <Card.Content>
            
            </Card.Content>
            <Card.Cover source={{ uri: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/97795768_1568319526664153_1842065684608057344_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=nTszSPpTF_QAX-RSE4f&_nc_ht=scontent-gru2-2.xx&oh=08e2dbe7b553d98a95a39188f06ecce6&oe=5FC95724' }} />
            <Card.Actions>
            <Icon
    
    name="home"
    style={{
      color: "green",
      fontSize: 40,
      marginLeft:100,
    
    }}

  
  />
  
            </Card.Actions>
            
          </Card>
          
          

          
        );
        const MyComponent2 = () => (
          <Card style={styles.MyComponentSt}>
            <Card.Title title="Amanda Santos" subtitle="" left={LeftContent} />
            <Card.Content>
            
            </Card.Content>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/originals/7a/6b/93/7a6b93844db102febbad7f4771d692b4.jpg' }} />
            <Card.Actions>
            <Icon
    
    name="home"
    style={{
      color: "red",
      fontSize: 40,
      marginLeft:100,
    
    }}

  
  />
  
            </Card.Actions>
            
          </Card>
          
          
          

          
        );
        
        const MyComponent3 = () => (
          <Card style={styles.MyComponentSt}>
            <Card.Title title="Rodrigo Silveira" subtitle="" left={LeftContent} />
            <Card.Content>
            
            </Card.Content>
            <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKSAH0D_Nam6N9px6VIQr725qpewsj4cjBQ&usqp=CAU' }} />
            <Card.Actions>
            <Icon
    
    name="home"
    style={{
      color: "green",
      fontSize: 40,
      marginLeft:100,
    
    }}

  
  />
  
            </Card.Actions>
            
          </Card>
          
          

          
        );
        
        
    
        return (
      <ScrollView>
            <View style={styles.container}>

                <Hamburguer/>
        
             {/* <Image
                source={require('../../src/assets/logoresolution.png') }
                style = {styles.log}
        
             //resize mode: utilizado quando a imagem aparece cortada na interface
                resizeMode="contain"
             />*/} 
            
              <MyComponent/>
              <MyComponent2/>
              <MyComponent3/>

             
                  <TouchableHighlight onPress={() => signout()}>
                       <Image style={styles.power} source={require('../../src/assets/power.png')} />
                </TouchableHighlight>
                      
                
        
            </View>
            </ScrollView>
          );
        }
  
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#0f1214',
              alignItems: 'center',
              
            },
            buttonContainer:  {
             
              margin:20,
            },
            MyComponentSt:{
              marginTop:30,
              width:250

            },
            power:{
              width:40,
              height:40,
              marginTop:60
            },
           
            log:{
              width:140,
              height:140,
            marginTop:40,
          
            }
          });
          