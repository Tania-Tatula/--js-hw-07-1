const boxesElg = document.querySelector('#boxesEl');



const createBoxes =(amount =>{
    
    let counter = 0;
    if(counter <= amount){
        boxesElg.createElement('div');
    counter +=1;
    }

})

createBoxes(2);