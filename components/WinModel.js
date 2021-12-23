import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import ScoreComp from "./ScoreComp";

const WinModel = ({setShowModel, showModel, score, resetState}) =>{
  let Textt = "The Game is Draw";
  if(showModel==="p1") Textt = "Player 1 Won"
  if(showModel==="p2") Textt = "Player 2 Won"
    return(
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{Textt}</Text>
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
        backgroundColor: "red",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color:'red'
      }
})
export default WinModel