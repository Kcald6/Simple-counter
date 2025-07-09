let countBtn = document.getElementById("countBtn").addEventListener("click",incrementCount)
let passengerCount = document.getElementById("count-el")
let count = 0

let resetBtn = document.getElementById("resetBtn").addEventListener("click", resetCount)

function incrementCount(){
    count++
    passengerCount.innerText = count
    
}

function resetCount(){
    count = 0
    passengerCount.innerText = count
}

