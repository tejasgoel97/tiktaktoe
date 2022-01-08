import React, { useEffect } from 'react'
import {View, Text, BackHandler, Button, StyleSheet} from 'react-native'
import { HOME_SCREEN_BACKGROUND, HOME_SCREEN_BUTTON, OVAL_COLOR, STICK_COLOR } from '../colors/GameColor'


const ComputerPlayScreen = ({setCurrentScreen}) =>{
      //Setting the back Button Handler Going to ROOTSCREEN
      useEffect(()=>{
        function handleBackPress(){
           
            setCurrentScreen("HomeScreen")
            return true 
        }
        BackHandler.addEventListener("hardwareBackPress", handleBackPress)

        return ()=>{
            BackHandler.removeEventListener("hardwareBackPress", handleBackPress)
        }
    },[])
    return <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>

        <Text style={styles.text}>Play With Computer will be availabe in next version update.</Text>
        <Text style={styles.text2}>Please Play Two Player Game Instead</Text>
        <Button
        color={STICK_COLOR} 
        title="Go Back" 
        onPress={()=>setCurrentScreen("HomeScreen")} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        margin: 20,
        alignSelf:'center',
        // backgroundColor:'red'
    },
    innerContainer:{
        height: "40%",
        // backgroundColor:"green",
        justifyContent:'space-around'
    },
    text:{
        color:OVAL_COLOR,
        fontSize: 30
    },
    text2:{
        fontSize:20,
    }
})


export default ComputerPlayScreen