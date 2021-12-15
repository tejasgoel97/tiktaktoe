import { Button, StyleSheet, Text, View } from "react-native"
import React ,{ useEffect, useState } from "react";
import { BACKGROUNG_COLOR, STICK_COLOR } from "../colors/GameColor";
import SquareBlock from "../components/SquareBlock";
import ScoreComp from "../components/ScoreComp";
import Player1Win from "../logic/player1Win";
import numberOfMoves from "../logic/numberOfMoves";


const GameScreen = () =>{
    let DUMMY = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // All UseSTATE are Defined Here
    const [state, setState] = useState([0,0,0,0,0,0,0,0,0]);
    const [playerTurn, setPlayerTurn] = useState("p1");
    const [score, setScore] = useState({p1:0, p2:0, Draw:0});


    // Building the Players from the State (Plyer1 and Player2)
    let player1 = state.map(p=>{
        if(p==="p1") return 1;
        if(p==="p2") return 0;
        if(p===0) return 0;
    })
    let player2 = state.map(p=>{
        if(p==="p2") return 1;
        if(p==="p1") return 0;
        if(p===0) return 0;
    })
    let moves = numberOfMoves(state)
    console.log("hi THHHHHHHHHHHH")
    // Check the Winning Conditions;
    useEffect(()=>{
        let isP2Winning = Player1Win(player2)
        let isP1Winning = Player1Win(player1);
        console.log(isP1Winning)
        if(isP1Winning) {
            setTimeout(() => {
            setState([0,0,0,0,0,0,0,0,0])
                
            }, 2000);
            // setState([0,0,0,0,0,0,0,0,0])
        }
        else if(isP2Winning){
            setTimeout(() => {
                setState([0,0,0,0,0,0,0,0,0])
                    
                }, 2000);
            // setState([0,0,0,0,0,0,0,0,0])
        }
        else if(moves ===9) {
            setTimeout(() => {
                setState([0,0,0,0,0,0,0,0,0])
                    
                }, 2000);
            // setState([0,0,0,0,0,0,0,0,0])

        }
        

    })


    console.log("Hi there")
    console.log(player1)
    console.log(player2)


    function handlePlayerTurn(blockIndex, playerName){
        let turn = playerTurn==="p1"? "p2" : "p1";
        setPlayerTurn(turn)
        let newState = [...state];
        newState[blockIndex-1] = playerName
        setState(newState)

    } 

    return (
        <View style={styles.mainContainer} >
            
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
                                winBlock={[0,1,2,3,4]}
                                />
                })}
            </View>
            <ScoreComp score={score}/>
            <Button onPress={()=> setWinBlock([0,1,2])} title="Click me"/>
        </View>
        )
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


export default GameScreen;