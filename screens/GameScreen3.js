import { Button, StyleSheet, Text, View,BackHandler, Alert, Vibration,Modal } from "react-native"
import React ,{ useEffect, useState } from "react";
import { BACKGROUNG_COLOR, STICK_COLOR } from "../colors/GameColor";
import SquareBlock from "../components/SquareBlock";
import ScoreComp from "../components/ScoreComp";
import Player1Win from "../logic/player1Win";
import numberOfMoves from "../logic/numberOfMoves";
import WinIndicatorStick from "../components/WinIndicatorStick";
import WinModel from "../components/WinModel";


const GameScreen = ({setCurrentScreen}) =>{
    //Setting the back Button Handler Going to ROOTSCREEN
    useEffect(()=>{
        function handleBackPress(){
            Alert.alert(
                "Are You sure You want to exit",
                "The Current game will be discarded",
                [
                    { text: "Yes", onPress: () => setCurrentScreen("HomeScreen")   },

                  {
                    text: "No",
                    // onPress: () => console.log("Cancel Pressed"),
                    style: {backgroundColor:'red'}
                  },
                ]
              );
            
            return true 
        }
        BackHandler.addEventListener("hardwareBackPress", handleBackPress)

        return ()=>{
            BackHandler.removeEventListener("hardwareBackPress", handleBackPress)
        }
    },[])

    let DUMMY = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // All UseSTATE are Defined Here
    const [state, setState] = useState([0,0,0,0,0,0,0,0,0]);
    const [playerTurn, setPlayerTurn] = useState("p1");
    const [score, setScore] = useState({p1:0, p2:0, Draw:0});
    const [showWinStick, setShowWinStick] = useState(null);
    const [showModel, setShowModel] = useState(false)



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


    // Check the Winning Conditions;
    useEffect(()=>{
        let isP2Winning = Player1Win(player2)
        let isP1Winning = Player1Win(player1);
        // console.log(isP1Winning)
        if(isP1Winning) {
            setPlayerTurn("p1")
            setShowWinStick(isP1Winning)
            setTimeout(() => {
                // setState([0,0,0,0,0,0,0,0,0])
                setShowWinStick(false)
            }, 2000);
            setShowModel("p1")
            setScore(data=>{
                return {...data, p1:data.p1+1}
            })
        }
        else if(isP2Winning){
            setPlayerTurn("p2")
            setShowWinStick(isP2Winning)
            setTimeout(() => {
                // setState([0,0,0,0,0,0,0,0,0])
                setShowWinStick(false)
                }, 2000);
            setShowModel('p2')

            setScore(data=>{
                return {...data, p2:data.p2+1}
            })
        }
        else if(moves ===9) {
            setTimeout(() => {
                // setState([0,0,0,0,0,0,0,0,0])
                }, 2000);
            setShowModel('DRAW')

            setScore(data=>{
                return {...data, Draw:data.Draw+1}
            })
        }
        

    }, [state])
    // console.log("Hi there")
    // console.log(player1)
    // console.log(player2)


    function handlePlayerTurn(blockIndex, playerName){
        let turn = playerTurn==="p1"? "p2" : "p1";
        setPlayerTurn(turn)
        let newState = [...state];
        newState[blockIndex-1] = playerName
        setState(newState)
    } 

    return (
        <View style={styles.mainContainer} >
            <Modal
                animationType="slide"
                transparent={true}
                visible={!!showModel}
                onRequestClose={() => setShowModel(false)}
            >
                <WinModel 
                    setShowModel={setShowModel} 
                    showModel={showModel} 
                    score={score} 
                    resetState={()=> setState([0,0,0,0,0,0,0,0,0])}
                    />
            </Modal>
            <Text style={styles.turnText}>{`Turn - ${playerTurn==="p1" ? "Player 1 (O)" : "Player 2 (X)"}`}</Text>
            <View style={styles.innerContainer}>
                {showWinStick &&<View style={styles.WinStickContainer}>
                    <WinIndicatorStick showWinStick={showWinStick}/>
                </View>}
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
    WinStickContainer:{
        position:"absolute",
        height:"100%",
        width: "100%"
    }
    
})


export default GameScreen;