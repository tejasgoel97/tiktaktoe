function Player1Win(p) {
    console.log("Here", p)
    let possible =[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7],[2,5,8], [0,4,8], [2,4,6]];
    for(let i in possible){
        let sum=possible[i].reduce((s, indx)=>{
            return s+p[indx]
            }, 0)
        if(sum ===3) {
            return +i+1
        }
        

    }
    return 0
}

export default Player1Win