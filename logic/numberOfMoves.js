function numberOfMoves(state){
    let sum = 0
    state.forEach(element => {
        if(element){
            sum+=1
        }
    });
    return sum
}

export default numberOfMoves;