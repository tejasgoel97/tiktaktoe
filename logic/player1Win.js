function Player1Win(p, Alert) {
    console.log("P1", p)
    let possible =[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7],[2,5,8], [0,4,8], [2,4,6]];
    for(let i of possible){
        let sum=i.reduce((s, indx)=>{
            return s+p[indx]
            }, 0)
        if(sum ===3) {
            // Alert.alert(
            //             "Player1 WON",
            //             i.toString(),
            //             [
            //               {
            //                 text: "Cancel",
            //                 onPress: () => console.log("Cancel Pressed"),
            //                 style: "cancel"
            //               },
            //               { text: "OK", onPress: () => console.log("OK Pressed") }
            //             ]
            //           );
            return i
        }
        

    }
    return 0
}

export default Player1Win