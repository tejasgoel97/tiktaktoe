import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import { useState } from 'react/cjs/react.development'
import HomeScreen from './HomeScreen'
import GameScreen from './GameScreen3'
import { BACKGROUNG_COLOR, HOME_SCREEN_BACKGROUND } from '../colors/GameColor'
import ComputerPlayScreen from './ComputerPlayScreen'
const RootScreen = () =>{
    const [currentScreen, setCurrentScreen] = useState("HomeScreen")
    return(

        <View style={styles.mainContainer}>
            <StatusBar hidden color={HOME_SCREEN_BACKGROUND} />

            {currentScreen==="HomeScreen" ? <HomeScreen setCurrentScreen={setCurrentScreen}/> :currentScreen==="TwoPlayerScreen" ? <GameScreen setCurrentScreen={setCurrentScreen}/>: <ComputerPlayScreen setCurrentScreen={setCurrentScreen}/>}
        </View>
    )
} 
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    }
})
export default RootScreen;