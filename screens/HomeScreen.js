import { Button, StyleSheet, Text, View, BackHandler, Image, Switch , useWindowDimensions} from 'react-native'
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
    const {height, width} = useWindowDimensions();
    const ImgHeight= (height/100)*60;

    return(
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={require("../tiktaktoelogo.png")}
                 height={ImgHeight} 
                 width={width} 
                 resizeMode='contain' 
                 style={{height:ImgHeight, width:width+100 }}/>
            </View>
            <Button color="red" onPress={()=> setCurrentScreen("ComputerPlayScreen")} title='Play with Computer'/>
            <Button onPress={()=> setCurrentScreen("TwoPlayerScreen")} title='Two Player'/>
            <Text style={{color:'#A9A9A9'}}>@ Developed by Teja Games and Softwares</Text>
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
        marginTop:40,
        // backgroundColor:"yellow"
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