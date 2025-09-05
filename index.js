// Your code here
const dodgerEl = document.getElementById("dodger")
const gameEl = document.getElementById('game')

dodgerEl.style.backgroundColor='pink'
dodgerEl.style.bottom="0px"
const gameWidth = gameEl.offsetWidth
const dodgerWidth = dodgerEl.offsetWidth

//functions
const moveDodgerLeft=()=>{
    const leftNum = dodgerEl.style.left.replace('px', '')
    const left = parseInt(leftNum, 10)
    if(left>0){
        dodgerEl.style.left=`${left-1}px`
    }
}

const moveDodgerRight=()=>{
    const leftNum = dodgerEl.style.left.replace('px', '')
    const left = parseInt(leftNum, 10)
    // const max=parseInt((gameWidth-dodgerWidth), 10)
    if(left<360){
        dodgerEl.style.left=`${left+1}px`
    }
}

document.addEventListener("keydown", function(e){
    if(e.key==="ArrowLeft"){
        moveDodgerLeft()
    }else if(e.key==='ArrowRight'){
        moveDodgerRight()
    }
})