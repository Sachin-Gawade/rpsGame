import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const rock = require("./signs/rock.png");
const paper = require("./signs/paper.png");
const scissors=require("./signs/scissors.png");

const randomRPS=()=>{
  const signs=[rock,paper,scissors];
  const rand=Math.floor(Math.random()*3);
  return signs[rand];
}

//color array

const bgColors=['#1abc9c','#3498db','#9b59b6'];

const PlayScreen=()=>{

  //this is hooks function 
  const [counter ,setCounter]=useState(4);

  

  //this is hooks effect
  useEffect(()=>{
    if(counter===0) 
    return;  
     const timer=setTimeout(() => {
        setCounter(counter-1)
      }, 500);
      return ()=>{
        clearTimeout(timer)     
      }
  },[counter])



    return (
        <View style={StyleSheet.compose(styles.container,{backgroundColor:bgColors[counter-1]})}>
          {counter>0?(
             <Text style={styles.header}>{counter} </Text>
          ) :(       
            <>
                             
               <Image style={styles.img} source={randomRPS()} /> 
               <View style={styles.btn}>
               <Button  onPress={()=>setCounter(3)} title="Play Again"/> 
               </View>
          </>
          )}
        </View>
      );
    }


  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
   header:{
       fontSize:250,  
       color:"white"     
   },
   img:{
     width:350,
     height:350
   },
   btn:{
     position:"absolute",
     bottom:20
   }
});

export default PlayScreen
