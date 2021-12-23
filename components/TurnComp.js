import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import { CROSS_COLOR, OVAL_COLOR, STICK_COLOR } from '../colors/GameColor'
const TurnComp = ({playerTurn}) =>{
    if(playerTurn==="p1"){
        return(<View style={styles.mainContainer}>
            <Text style={{color:STICK_COLOR, fontSize: 30, }}>
                Turn Player - 
            </Text>
            <Text style={{color: OVAL_COLOR, fontSize: 30, fontWeight:"900"}}>O</Text>
        </View>)
    }
    return(<View style={styles.mainContainer}>
        <Text style={{color:STICK_COLOR, fontSize: 30, }}>
            Turn Player - 
        </Text>
        <Text style={{color: CROSS_COLOR, fontSize: 30, fontWeight:"900"}}>X</Text>
    </View>)
    
} 
const styles = StyleSheet.create({
    mainContainer:{
       flexDirection:'row',
       height: 40,
       width: "50%",
       justifyContent:"space-around"
       
    },
    signContainer:{
        backgroundColor:"green",
        flex:1
    }
})
export default TurnComp;