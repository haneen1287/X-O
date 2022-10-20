const grid=document.querySelector('.grid')
const turn=document.querySelector('#turn')
const squares=document.querySelectorAll('.square')
let player1=true

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,3,6],
    [0,4,8],
    [2,4,6]
]

function play(){
for(let i=0;i<squares.length;i++){
    squares[i].onclick=()=>{
        if(player1 && !squares[i].classList.contains('player2') ){
            squares[i].classList.add('player1')
            player1=false
            turn.innerHTML="Player 2 turn!"
            
        }
        else if(!player1 && !squares[i].classList.contains('player1')){
            squares[i].classList.add('player2')
            player1=true
            turn.innerHTML="Player 1 turn!"
        }

           winner()  
     

        
    }
    
  
}
}


function winner(){
    for(let i=0;i<win.length;i++){
        const sqr1=squares[win[i][0]]
        const sqr2=squares[win[i][1]]
        const sqr3=squares[win[i][2]]

        if(sqr1.classList.contains('player1') && sqr2.classList.contains('player1') && sqr3.classList.contains('player1')){
            turn.innerHTML="Player1 wins!!"
            
        }
        else if(sqr1.classList.contains('player2') && sqr2.classList.contains('player2') && sqr3.classList.contains('player2') ){
            turn.innerHTML="Player2 wins!!"

        }
        

        
    }
g
       
    
        
}


play()