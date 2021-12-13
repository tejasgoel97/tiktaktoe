import React from 'react'
import {StyleSheet, Text, View} from "react-native"
import { BLOCK_COLOR } from '../colors/GameColor'


const CrossSign = () =>{
    return (
    <View style={styles.mainContainer}>
        <View style={[styles.bar, {transform:[{rotateX:"45deg"}, {rotateY:"45deg"}]}]}>
            <Text>.</Text>
        </View>
        <View style={[styles.bar2, {transform:[{rotateX: "45deg"}, {rotateY:"-45deg"}]}]}>
            <Text>.</Text>
        </View>
    </View>)
}


const styles = StyleSheet.create({
    mainContainer:{
        width:"120%",
        height:"100%",
        justifyContent:'center'
    },
    bar:{
        backgroundColor:BLOCK_COLOR,
        height:20,
        width:"100%",
        zIndex:12
    },
    bar2:{
        backgroundColor:BLOCK_COLOR,
        // backgroundColor:"#EC255A",
        height:20,
        width:"100%",
        position:"absolute",
        zIndex:1
    }

})

export default CrossSign;