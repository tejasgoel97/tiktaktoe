import React from "react";
import { View, Text, TextComponent, StyleSheet,useWindowDimensions, Pressable, ImageBackground } from "react-native";
import InnerCircle from "./InnerCircle"
import CrossSign from "./CrossSign"
import CrossSignTest from "./CrossSignTest"
import { BACKGROUNG_COLOR, BLOCK_COLOR, STICK_COLOR } from "../colors/GameColor";


const SquareBlock = ({index, state,handlePlayerTurn,currentTurn, winBlock})=>{
    let stateValue = state[index-1]
    const {height,width} = useWindowDimensions()
    const boxHeight = width*30/100
    let borderStyle={}
    let showAnimation = false
    // console.log("data",showAnimation)
    if(winBlock.includes(index)){
        // console.log("true")
        showAnimation=true
    }
    let renderSign = null;
    if(stateValue==="p1"){
        renderSign=<InnerCircle showAnimation={showAnimation}/>

    }
    if(stateValue === "p2"){
        renderSign=<CrossSignTest  showAnimation={showAnimation}/>
    }
    if(index%3 ){
        borderStyle ={...borderStyle, borderColor:STICK_COLOR,borderRightWidth:7,}
    }else{
        borderStyle ={...borderStyle, borderRightColor:BACKGROUNG_COLOR,borderRightWidth:7,}

    }
    if(index<7){ 
        borderStyle = {...borderStyle, borderBottomColor:STICK_COLOR,borderBottomWidth:7,}
    }
    else{
        borderStyle = {...borderStyle, borderBottomColor:BACKGROUNG_COLOR,borderBottomWidth:7,}

    }
    function handleMove(){
        // console.log(currentTurn)
        handlePlayerTurn(index, currentTurn)
    }
    
    return <Pressable 
            style={[styles.container, {height:boxHeight}, borderStyle]} 
            onPress={handleMove}
            disabled={stateValue}
            >
                {renderSign}
    </Pressable>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:BACKGROUNG_COLOR,
        justifyContent:"center",
        alignItems:"center",
        width : "30%"
    },
    imageContainer:{
        flex:1,
        width:"100%"
    }
})
export default SquareBlock;