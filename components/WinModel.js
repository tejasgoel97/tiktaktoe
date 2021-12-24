import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { BACKGROUNG_COLOR, CROSS_COLOR, OVAL_COLOR, STICK_COLOR, WIN_MODEL_BUTTON } from "../colors/GameColor";
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwsome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ScoreComp from "./ScoreComp";
import CrossIcon from "./CrossIcon"

const WinModel = ({setShowModel, showModel, score, resetState}) =>{
  let Textt = "The Game is Draw";
  if(showModel==="p1") Textt = "Player 'O' Won"
  if(showModel==="p2") Textt = "Player 'X' Won"
  let comp = <Text>The Game is Draw</Text>
  if(showModel==="p2") comp =<IconEntypo name="cross" size={30} color={CROSS_COLOR} style={{}} />

  if(showModel==="p1") comp =  <IconFontAwsome name="circle-o" size={30} color={OVAL_COLOR} />;
    return(
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.trpohyAndWinContainer}>
          <MaterialIcons name="emoji-events" color={WIN_MODEL_BUTTON} size={22}/>
          <View style={styles.playerWon}>
            {comp}
            <Text style={styles.modalText}> WON</Text>
          </View>
          <MaterialIcons name="emoji-events" color={WIN_MODEL_BUTTON} size={22}/>

        </View>
        <ScoreComp score={score} />
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            resetState()
            setShowModel(false)
          }}
        >
          <Text style={styles.textStyle}>Continue</Text>
        </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 522,
      },
      modalView: {
        margin: 10,
        width:"90%",
        height: 200,
        backgroundColor: "black",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent:'space-evenly'
      },
      button: {
        borderRadius: 20,
        padding: 10,
        backgroundColor:"black",
        elevation: 2,
        paddingHorizontal:12
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: WIN_MODEL_BUTTON,
        paddingHorizontal: 30
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        // marginBottom: 15,
        textAlign: "center",
        color:WIN_MODEL_BUTTON,
        fontWeight: "700",
        fontSize: 20,
        
      },
      playerWon:{
        justifyContent:'center',
        width: "80%",
        alignItems:'center',
        flexDirection:"row",
      },
      trpohyAndWinContainer:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center"
      }
})
export default WinModel