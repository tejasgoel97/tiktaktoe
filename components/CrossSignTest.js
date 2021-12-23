import React, { useEffect, useRef } from 'react'
import {Animated, StyleSheet, Text, View,Easing} from "react-native"
import { BLOCK_COLOR, CROSS_COLOR } from '../colors/GameColor'


const CrossSign = () =>{

    return (
    <View style={styles.mainContainer}>
        <Animated.View style={styles.aniContainer}>
            <Text>.</Text>
        </Animated.View>
        <View style={[styles.bar, {transform:[{rotateX:"45deg"}, {rotateZ:"45deg"}]}]}>
            <Text>.</Text>
        </View>
        <View style={[styles.bar2, {transform:[{rotateX: "45deg"}, {rotateZ:"-45deg"}]}]}>
            <Text>.</Text>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    mainContainer:{
        width:"110%",
        height:"100%",
        justifyContent:'center'
    },
    bar:{
        backgroundColor:CROSS_COLOR,
        height:20,
        width:"100%",
        zIndex:12
    },
    bar2:{
        backgroundColor:CROSS_COLOR,
        height:20,
        width:"100%",
        position:"absolute",
        zIndex:1
    }, aniContainer:{
        position:"absolute",
        width:"100%",
        height:"100%"
    }

})

export default CrossSign;