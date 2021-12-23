import { Button, StyleSheet, Text, View, BackHandler, Image } from 'react-native'
import React, { useEffect } from 'react' 
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
           <Button onPress={()=> null} title='Play with Computer'/>
            <Button onPress={()=> setCurrentScreen("GameScreen")} title='Two Player'/>
        </View>
    )
} 
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        backgroundColor:'red',
        justifyContent:'space-evenly'
    },
    imageContainer:{
        // backgroundColor:"green",
        height:500
    },
    image:{
        height: 500,
        width: 500
    }
})
export default HomeScreen;