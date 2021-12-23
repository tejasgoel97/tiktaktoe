import React from "react"
import { StyleSheet,Text,View } from "react-native"
import { SCORE_COLOR } from "../colors/GameColor"

const ScoreComp = ({score}) =>{

    return<View style={styles.mainContainer} >
        <View style={styles.container}>
            <View>
                <Text style={styles.textColor}>X's Win</Text>
                <Text style={styles.winText}>{score.p2}</Text>
            </View>
            <View>
                <Text style={styles.textColor}>O's Win</Text>
                <Text style={styles.winText}>{score.p1}</Text>
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
        width: "90%",
    },
    container:{
        flexDirection:"row", 
        justifyContent:'space-around'
       },
    textColor:{
        color:SCORE_COLOR,
        fontSize:20,
        fontWeight: "500"
    },
    winText:{
        textAlign:"center",
        color:SCORE_COLOR,
        fontSize:25,
        fontWeight: "500"
    }
})

export default ScoreComp