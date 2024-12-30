let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;//player X, PlayerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const reseGame = () => {
    turnO = true;
    enableBoxes ();
    msgContainer.classList.add("hide")
};

boxes.forEach ((box) => {
    box.addEventListener("click", () => {box.innerText = "Abcd";
        if(turnO) {  ///playerO
            box.innerText = "X";
            turnO = false;
        }else {    ///player1
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        checkwinner ();
    });
});

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {
    for(pattern of winPatterns){
        console.log (pattern[0], pattern[1], pattern[2]);
        console.log(
             boxes[pattern[0]].innerText,
             boxes[pattern[1]].innerText, 
             boxes[pattern[2]].innerText
            );[pattern[0]].innerText

             let pos1val = boxes[pattern[0]].innerText
             let pos2val = boxes[pattern[1]].innerText
             let pos3val = boxes[pattern[2]].innerText
            
             if(pos1val != "" && pos2val != "" && pos3val != "") {
                if (pos1val=== pos2val && pos2val === pos3val) {
                    showWinner(pos1val);
                }
            }
            
    }
};

newGamebtn.addEventListener("click",reseGame);
resetbtn.addEventListener("click",reseGame);