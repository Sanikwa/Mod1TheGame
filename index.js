const gridItems=Array.from(document.getElementsByClassName ("grid-item"));
const winner =document.getElementById("Winner");
const player_2="O"
const player_1="X"
let activePlayer= player_1;
let clickable=true
const winningConditions= [
    [0 , 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
    [0, 3, 6]
];

let clickedSquare =[
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""

];
console.log(gridItems);

for(let i = 0; i<9;i++){
    gridItems[i].addEventListener("click",function(event){
        if(!clickable){
            return;
        }
        let item = event.target;
        console.log(item);
    
        if(activePlayer===player_1){
            if(clickedSquare[i]==="X"|| clickedSquare[i]==="O"){

            }
            else{
            item.innerHTML =player_1;
            clickedSquare[i]=activePlayer
            activePlayer = player_2;
            console.log(activePlayer)
        }
    }
        else if (activePlayer===player_2)

        { if(clickedSquare[i]==="X"|| clickedSquare[i]==="O"){

        }
        else{
            item.innerHTML = player_2;
            clickedSquare[i]=activePlayer
            activePlayer =player_1;
            console.log(activePlayer);


        }
    }
         console.log(clickedSquare);

      for(let i=0; i <winningConditions.length;i++){
        let optionA =winningConditions[i][0];
        let optionB =winningConditions[i][1];
        let optionC =winningConditions[i][2];

        if (clickedSquare[optionA]=== player_1 && clickedSquare[optionB]===player_1 && clickedSquare[optionC]===player_1){
            console.log("player_1 winner");
            winner.innerHTML="You Beat Player 2"
            clickable=false;
            break;
        }
        else if(clickedSquare[optionA=== player_2] && clickedSquare[optionB]===player_2 && clickedSquare[optionC]===player_2){
            console.log("Player_2 is the winner");
            winner.innerHTML = "You Beat Player 1"
            clickable= false
            break;
        }
    
       
        }
      
    if(!clickedSquare.includes("")&& clickable){
        console.log("Cats, Play Again");
        winner.innerHTML = "Cats, Play Again"
        clickable = false;
    }


})
}

var refreshButton = document.getElementById ("Play")
refreshButton.addEventListener("click", function(){
    location.reload();
}
);