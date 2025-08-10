let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".reset");
let msg = document.querySelector(".msg-container");

let turn = true;
let count = 0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn) {
            box.innerText = "X";
            turn = false;
        }
        else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        let isWinner = checkWinner();
        count++;

        if(count ===9 && !isWinner){
            drawmsg();
        }
    });
});

rstbtn.addEventListener("click",()=>{
    count=0;
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
        msg.innerText = "";
    })
});

const WinPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]

const checkWinner = ()=>{
    for(let pattern of WinPattern){
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val) {
                showmsg(pos1val);
                boxes.forEach((box)=>{
                    box.disabled = true;
                    return true;
                });
            }
        }
    }
    return false;
}

const showmsg = (winner)=>{
    msg.innerText = `${winner} is the winner`;

}

const drawmsg = ()=>{
    msg.innerText = "It is a Draw!";
}