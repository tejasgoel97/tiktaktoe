import React, { useEffect, useRef } from 'react'
import {Animated, StyleSheet, Text, View} from "react-native"
import { BLOCK_COLOR } from '../colors/GameColor'


const CrossSign = ({showAnimation}) =>{

    const fadeAnim = useRef(new Animated.Value(0)).current;

    return (
    <View style={styles.mainContainer}>
        <Animated.View style={[styles.aniContainer, {width:fadeAnim}]}>
            <Text>Hi tere</Text>
        </Animated.View>
        <View style={[styles.bar, {transform:[{rotateX:"45deg"}, {rotateZ:"45deg"}]}]}>
            <Text>.</Text>
        </View>
        <View style={[styles.bar2, {transform:[{rotateX: "45deg"}, {rotateZ:"-45deg"}]}]}>
            <Text>.</Text>
        </View>
    </View>)
}


const styles = StyleSheet.create({
    mainContainer:{
        width:"110%",
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
    }, aniContainer:{
        position:"absolute",
        backgroundColor: "red",
        width:"100%",
        height:"100%"
    }

})

export default CrossSign;