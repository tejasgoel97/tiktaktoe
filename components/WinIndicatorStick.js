import { Animated, Easing, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react' 
import { WIN_STICK } from '../colors/GameColor';
const WinIndicatorStick = ({showWinStick}) =>{
    console.log("showIn",showWinStick)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    Animated.timing(fadeAnim, {
        toValue: 100,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver:false
      }).start();
      /// If 1 & 2 & 3
      if(showWinStick>0 && showWinStick<4){
        return (
            <View style={styles.mainContainer}>
                <Animated.View 
                style={[styles.horizontalLine, {width:fadeAnim.interpolate({inputRange:[0,100], outputRange:["0%", `${showWinStick==1? "100%": "0%"}`]})}]}
                >
                    <Text>
                        Hi there
                    </Text>
                </Animated.View>
                <Animated.View 
                style={[styles.horizontalLine, {width:fadeAnim.interpolate({inputRange:[0,100], outputRange:["0%", `${showWinStick==2? "100%": "0%"}`]})}]}
                >
                    <Text>
                        Hi there
                    </Text>
                </Animated.View>
                <Animated.View 
                style={[styles.horizontalLine, {width:fadeAnim.interpolate({inputRange:[0,100], outputRange:["0%", `${showWinStick==3? "100%": "0%"}`]})}]}
                >
                    <Text>
                        Hi there
                    </Text>
                </Animated.View>
            </View>)
      }
      if(showWinStick>=4 && showWinStick<=6){
        return (
            <View style={[styles.mainContainer, {flexDirection:'row'}]}>
                <Animated.View 
                style={[styles.verticalLine, {height:fadeAnim.interpolate({inputRange:[0,100], outputRange:["0%", `${showWinStick==4? "100%": "0%"}`]})}]}
                >
                    <Text>
                        .
                    </Text>
                </Animated.View>
                <Animated.View 
                style={[styles.verticalLine, {height:fadeAnim.interpolate({inputRange:[0,100], outputRange:["0%", `${showWinStick==5? "100%": "0%"}`]})}]}
                >
                    <Text>
                        .
                    </Text>
                </Animated.View>
                <Animated.View 
                style={[styles.verticalLine, {height:fadeAnim.interpolate({inputRange:[0,100], outputRange:["0%", `${showWinStick==6? "100%": "0%"}`]})}]}
                >
                    <Text>
                        .
                    </Text>
                </Animated.View>
            </View>)
      }
      if(showWinStick===8){  
        return(
        <View style={styles.mainContainer}>
            <Animated.View style={[styles.diagonal1Contianer, {width:fadeAnim.interpolate({
            inputRange:[0,100], outputRange:["0%", "130%"]
            })}]}>
                <Text>
                    .
                </Text>
            </Animated.View>
        </View>
        )
      }
      if(showWinStick===7){  
        return(
        <View style={styles.mainContainer}>
            <Animated.View style={[styles.diagonal2Contianer, {width:fadeAnim.interpolate({
            inputRange:[0,100], outputRange:["0%", "130%"]
            })}]}>
                <Text>
                    .
                </Text>
            </Animated.View>
        </View>
        )
      }
} 
const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal: 20,
        width: "100%",
        height: "100%",
        zIndex:99,
        alignItems:"center",
        justifyContent:'space-around'
        
    },
    diagonal1Contianer:{
        width: "10%",
        height: 10,
        backgroundColor:WIN_STICK,
        transform:[{rotateX:"-25deg"}, {rotateZ:"-50deg"}]
    },
    diagonal2Contianer:{
        width: "10%",
        height: 10,
        backgroundColor:WIN_STICK,
        transform:[{rotateX:"25deg"}, {rotateZ:"50deg"}]
    },
    horizontalLine:{
        width: "90%",
        height: 10,
        backgroundColor:WIN_STICK,
    },
    verticalLine:{
        width:10,
        height: 10,
        backgroundColor:WIN_STICK,
    },

})
export default WinIndicatorStick;