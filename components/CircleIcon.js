import React, { useEffect, useRef } from 'react'
import {StyleSheet, Text, View, useWindowDimensions} from "react-native"
import { BLOCK_COLOR, CROSS_COLOR, OVAL_COLOR } from '../colors/GameColor'
import Icon from 'react-native-vector-icons/FontAwesome';



const CircleIcon = () =>{
    const {width} = useWindowDimensions();

    const myIcon = <Icon name="circle-o" size={2*width/10} color={OVAL_COLOR} />;

    return (
    <View style={styles.mainContainer}>
       {myIcon}
    </View>
    )
}


const styles = StyleSheet.create({
    mainContainer:{
        width:"110%",
        height:"100%",
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
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

export default CircleIcon;