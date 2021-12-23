import React from "react"
import { StyleSheet,Text,View } from "react-native"

const ScoreComp = ({score}) =>{

    return<View style={styles.mainContainer} >
        <View style={styles.container}>
            <View>
                <Text style={styles.textColor}>X's Win</Text>
                <Text style={styles.winText}>{score.p1}</Text>
            </View>
            <View>
                <Text style={styles.textColor}>O's Win</Text>
                <Text style={styles.winText}>{score.p2}</Text>
            </View>
            <View>
                <Text style={styles.textColor}>Draws</Text>
                <Text style={styles.winText}>{score.Draw}</Text>
            </View>
        </View>
    </View>
}


const styles = StyleSheet.create({
    mainContainer:{
        width: "100%",
        
    },
    container:{
        flexDirection:"row", 
        justifyContent:'space-around'
       },
    textColor:{
        color:"yellow",
        fontSize:20
    },
    winText:{
        textAlign:"center",
        color:"yellow",
        fontSize:25

    }
})

export default ScoreComp