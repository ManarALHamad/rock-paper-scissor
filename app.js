/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let userChoice = ''







/*------------------------ Cached Element References ------------------------*/

const choices = document.querySelector('#choices')
console.log(choices)

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')

const reset =document.querySelector("#reset")





/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function(event){

    if (userChoice === 'rock'){

        //add hidden class to paper and scissors

        paper.classList.add('hidden')
        scissor.classList.add('hidden')

    }

    else if (userChoice === 'paper'){

        rock.classList.add('hidden')
        scissor.classList.add('hidden')
        
    }

    else if (userChoice === 'scissor'){

         paper.classList.add('hidden')
         rock.classList.add('hidden')

    }
    
    userChoice = event.target.id 
    console.log('userChoice: ', userChoice)


})


reset.addEventListener('click', function(){

    paper.classList.remove('hidden')
    scissor.classList.remove('hidden')
    rock.classList.remove('hidden')


})
/*-------------------------------- Functions --------------------------------*/