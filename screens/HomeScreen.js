import { Button, StyleSheet, Text, View, BackHandler, Image, Switch } from 'react-native'
import React, { useEffect, useState } from 'react' 
import { HOME_SCREEN_BACKGROUND } from '../colors/GameColor'
const HomeScreen = ({ setCurrentScreen}) =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
            <View style={styles.switch}>
                <Text style={styles.toggleText}>Dark Mode</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}  
                    value={isEnabled}
                />
            </View>
            <View style={styles.imageContainer}>
                <Image source={require("../tiktaktoelogo.png")} height={100} width={100} resizeMode='center' style={styles.image}/>
            </View>
            <Button color="red" onPress={()=> null} title='Play with Computer'/>
            <Button onPress={()=> setCurrentScreen("GameScreen")} title='Two Player'/>
            <Text>@ Developed by Deva Games and Softwares</Text>
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
    },
    switch:{
        position:'absolute',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'flex-end',
        width:'80%'

    },
    toggleText:{
        color:"white"
    }
})
export default HomeScreen;