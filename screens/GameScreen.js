import React, { useState } from "react"
import { View, Text, StyleSheet, Button,Alert } from "react-native"
import SquareBlock from "../components/SquareBlock"
import Player1Win from "../logic/player1Win"
import numberOfMoves from "../logic/numberOfMoves"

import {BACKGROUNG_COLOR, BLOCK_COLOR, STICK_COLOR} from "../colors/GameColor"


const GameScreen = () => {
    let initialState = new Array(9)
    let DUMMY = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    const [state, setState] = useState(initialState.fill(0))
    const [player1, setPlayer1] = useState([0,0,0,0,0,0,0,0,0]);
    const [player2, setPlayer2] = useState([0,0,0,0,0,0,0,0,0]);
    const [playerTurn, setPlayerTurn] = useState("p1")
 
    function resetState(){
        setPlayer1([0,0,0,0,0,0,0,0,0])
        setState(initialState.fill(0))
        
        setPlayer2([0,0,0,0,0,0,0,0,0])
        setPlayerTurn("p2")
    }

    let isP1Winning = Player1Win(player1);
    let isP2Winning = Player1Win(player2);
    let moves = numberOfMoves(state);
    if(moves===9){
        Alert.alert(
            "The Game is Draw",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => resetState(),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
    }
    if(isP1Winning){
        Alert.alert(
                    "Player1 WON",
                    "My Alert Msg",
                    [
                      {
                        text: "Cancel",
                        onPress: () => resetState(),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
    }
    if(isP2Winning){
        Alert.alert(
                    "Player2 WON",
                    "My Alert Msg",
                    [
                      {
                        text: "Cancel",
                        onPress: () => resetState(),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
    }
    


    function handlePlayerTurn(blockIndex, playerName){
        let turn = playerTurn==="p1"? "p2" : "p1";
        setPlayerTurn(turn)
        if(playerName==="p1"){
            let newPlayer1 = player1;
            newPlayer1[blockIndex-1] = 1;
            setPlayer1(newPlayer1);
            let newState = state;
            newState[blockIndex-1] = "p1"
            setState(newState)


        }
        else if(playerName==="p2"){
            let newPlayer2 = player2;
            newPlayer2[blockIndex-1] = 1;
            setPlayer2(newPlayer2);
            let newState = state;
            newState[blockIndex-1] = "p2"
            setState(newState)
        }

    } 
    return <View style={styles.mainContainer} >
        <Text style={styles.turnText}>{`Turn - ${playerTurn==="p1" ? "Player 1 (O)" : "Player 2 (X)"}`}</Text>
        {/* <Text style={styles.turnText}>{`Turn - ${moves}`}</Text> */}
        <View style={styles.innerContainer}>
            {DUMMY.map((value, index) => {
                return <SquareBlock 
                            key={index}
                            index={index + 1} 
                            state={state} 
                            player1={player1} 
                            player2={player2}
                            handlePlayerTurn={handlePlayerTurn}
                            currentTurn={playerTurn}
                             />
            })}
        </View>
        <Button onPress={()=> {
            console.log("Player 1",player1)
            console.log("Player 2",player2)
            console.log("state",state)
    }} title="Click me" />
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        
        justifyContent: "space-evenly",
        alignItems: 'center',
        // backgroundColor: "#133B5C"
        backgroundColor:BACKGROUNG_COLOR
    },
    innerContainer: {
        
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: 'center',
    },
    turnText:{
        fontSize:30,
        color:STICK_COLOR
    }
})

export default GameScreen