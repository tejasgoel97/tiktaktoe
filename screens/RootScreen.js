import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import { useState } from 'react/cjs/react.development'
import HomeScreen from './HomeScreen'
import GameScreen from './GameScreen3'
const RootScreen = () =>{
    const [currentScreen, setCurrentScreen] = useState("HomeScreen")
    return(
        <View style={styles.mainContainer}>
            {currentScreen==="HomeScreen" ? <HomeScreen setCurrentScreen={setCurrentScreen}/> : <GameScreen setCurrentScreen={setCurrentScreen}/>}
        </View>
    )
} 
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
      
    }
})
export default RootScreen;