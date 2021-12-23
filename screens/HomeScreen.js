import { Button, StyleSheet, Text, View, BackHandler, Image } from 'react-native'
import React, { useEffect } from 'react' 
import { HOME_SCREEN_BACKGROUND } from '../colors/GameColor'
const HomeScreen = ({ setCurrentScreen}) =>{
    useEffect(()=>{
        function handleBackPress(){
            setCurrentScreen("GameScreen")    
        }
        BackHandler.addEventListener("hardwareBackPress", handleBackPress)

        return ()=>{
            BackHandler.removeEventListener("hardwareBackPress", handleBackPress)
        }
    },[])

    return(
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={require("../tiktaktoelogo.png")} height={100} width={100} resizeMode='center' style={styles.image}/>
            </View>
           <Button color="red" onPress={()=> null} title='Play with Computer'/>
            <Button onPress={()=> setCurrentScreen("GameScreen")} title='Two Player'/>
            <Text>@ Developed by Teja Games and Softwares</Text>
        </View>
    )
} 
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        backgroundColor:HOME_SCREEN_BACKGROUND,
        justifyContent:'space-evenly'
    },
    imageContainer:{
        // backgroundColor:"green",
        height:500
    },
    image:{
        height: 500,
        width: 500
    },
    button:{
        backgroundColor:'red'
    }
})
export default HomeScreen;