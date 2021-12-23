import React from "react"
import { StyleSheet, Text,View } from "react-native"
import { OVAL_COLOR } from "../colors/GameColor"

const InnerCircle = () =>{

    return( 
        <View style={styles.mainContainer}>
                <View style={styles.innerContainer}>
                    <Text>.</Text>
                </View>
        </View>)
}

const styles = StyleSheet.create({
    mainContainer:{
        // backgroundColor:"#FCDAB7",
        // backgroundColor:"yellow",

        height:"80%",
        width:"80%",
        borderRadius:900,
        borderWidth:15,
        borderColor:OVAL_COLOR

    },
    innerContainer:{
    }
})


export default InnerCircle