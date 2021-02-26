const btnBox = document.querySelector('#controls');
const btnDestroy = btnBox.lastElementChild;
const btnRender = btnDestroy.previousElementSibling;
const boxesEl = document.querySelector('#boxes');
const numberEl = btnBox.firstElementChild;



// const createBoxes =(amount =>{
    
//     let counter = 1;
//     while(counter <= amount){
//     boxesEl.insertAdjacentHTML('afterbegin', '<div class="list-styles_`${counter}`"></div>');
//     counter += 1;
//     }

// })



const handleClearOutput = () => {
    
    boxesEl.innerHTML ='';
    
}

const handleIntroductionNumber = () => {
  const numberOfInputs = numberEl.value
  let counter = 1;
    while(counter <= numberOfInputs){
    boxesEl.insertAdjacentHTML('afterbegin', '<div class="list-styles_`${counter}`"></div>');
    counter += 1;
    }

}

btnDestroy.addEventListener('click', handleClearOutput);
btnRender.addEventListener('click', handleIntroductionNumber);


