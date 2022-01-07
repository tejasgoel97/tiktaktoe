import { StyleSheet, Text, View } from 'react-native'
import IconFontAwsome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from "react-native-vector-icons/Entypo"
import React from 'react' 
import { CROSS_COLOR, OVAL_COLOR, SCORE_COLOR, STICK_COLOR } from '../colors/GameColor'



const TurnComp = ({playerTurn}) =>{
    let comp = <IconFontAwsome name="circle-o" size={30} color={OVAL_COLOR}  />
    if(playerTurn==="p2")
        comp=<IconEntypo name="cross" size={30} color={CROSS_COLOR}  />

    // if(playerTurn==="p1"){
    //     return(<View style={styles.mainContainer}>
    //         <Text style={{color:SCORE_COLOR, fontSize: 25, }}>
    //             Turn Player - 
    //         </Text>
            
    //     </View>)
    // }
    return(<View style={styles.mainContainer}>
        <Text style={{color:SCORE_COLOR, fontSize: 25, }}>
            Turn Player - 
        </Text>
        {comp}
        {/* <IconEntypo name="cross" size={30} color={CROSS_COLOR}  /> */}
    </View>)
    
} 
const styles = StyleSheet.create({
    mainContainer:{
       flexDirection:'row',
       height: 40,
       width: "50%",
       justifyContent:"space-around",
       alignItems:'center',
       borderRadius:10
       
    },
    signContainer:{
        backgroundColor:"green",
        flex:1
    }
})
export default TurnComp;