import React, { useEffect, useRef } from 'react'
import {StyleSheet, Text, View, useWindowDimensions} from "react-native"
import { BLOCK_COLOR, CROSS_COLOR } from '../colors/GameColor'
import Icon from 'react-native-vector-icons/Entypo';



const CrossSign = ({size}) =>{
    const {width} = useWindowDimensions();
    let iconSize= 2*width/7
    if(size){
        iconSize=size
    }
    const myIcon = <Icon name="cross" size={iconSize} color={CROSS_COLOR} style={{}} />;

    return (
    <View style={styles.mainContainer}>
       {myIcon}
    </View>
    )
}


const styles = StyleSheet.create({
    mainContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
   
})

export default CrossSign;