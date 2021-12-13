import React from "react"
import { StyleSheet, Text,View } from "react-native"

const InnerCircle = () =>{

    return <View style={styles.mainContainer}>
                <View style={styles.innerContainer}>
                    <Text>.</Text>
                </View>
    </View>
}

const styles = StyleSheet.create({
    mainContainer:{
        // backgroundColor:"#FCDAB7",
        // backgroundColor:"yellow",

        height:"80%",
        width:"80%",
        borderRadius:900,
        borderWidth:15,
        borderColor:"red"

    },
    innerContainer:{
    }
})


export default InnerCircle