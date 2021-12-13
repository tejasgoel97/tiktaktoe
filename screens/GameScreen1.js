import React, { useCallback, useEffect, useState } from "react"
import { View, Text, StyleSheet, Button,Alert,Modal, Pressable } from "react-native"
import SquareBlock from "../components/SquareBlock"
import Player1Win from "../logic/player1Win"
import numberOfMoves from "../logic/numberOfMoves"

import {BACKGROUNG_COLOR, BLOCK_COLOR, STICK_COLOR} from "../colors/GameColor"
import WinModel from "../components/WinModel"
import ScoreComp from "../components/ScoreComp"


const GameScreen = () => {
    let initialState = new Array(9)
    let DUMMY = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const [score, setScore] = useState({p1:0, p2:0, Draw:0});
    const [state, setState] = useState(initialState.fill(0))
    const [player1, setPlayer1] = useState([0,0,0,0,0,0,0,0,0]);
    const [player2, setPlayer2] = useState([0,0,0,0,0,0,0,0,0]);
    const [playerTurn, setPlayerTurn] = useState("p1");
    const [modalVisible, setModalVisible] = useState(false)
    console.log("rendered>>>>>>>>>>>>>>>.")
    const resetState = useCallback(()=>{
        setModalVisible(true)
        setPlayer1([0,0,0,0,0,0,0,0,0])
        setState(initialState.fill(0))
        
        setPlayer2([0,0,0,0,0,0,0,0,0])
        setPlayerTurn("p2")  
    }, [])
    
    let isP1Winning = Player1Win(player1);
    let isP2Winning = Player1Win(player2);
    let moves = numberOfMoves(state);
    useEffect(()=>{
        if(isP1Winning){
 
            resetState();
            console.warn("player 1 won");
            setScore(data=>{
                return {...data, p1:data.p1+1}
            })
        }else if(isP2Winning){

            console.warn("player 2 won")
            resetState();
            setScore(data=>{
                return {...data, p2:data.p2+1}
            })
    
        }else if(moves===9){
          console.warn("Game Draw")
          setScore(data=>{
            return {...data, Draw:data.Draw+1}
        })
      }
    }, [isP1Winning, isP2Winning, moves])
    
    


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
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
       <WinModel setModalVisible={setModalVisible} modalVisible={modalVisible}/>
      </Modal>
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
        <ScoreComp score={score}/>
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
    },
    
})

export default GameScreen