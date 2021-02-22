    const ingredients = [
        'Картошка',
        'Грибы',
        'Чеснок',
        'Помидоры',
        'Зелень',
        'Приправы',
    ];

    const a =[
        'mama',
        'tato',
        'sister',
    ]
    

    const createsListOfProducts = (products) => {
        let number = 0;
        while(number < products.length){
            const positionEl = document.createElement('li');
            positionEl.textContent = products[number];
            console.log(positionEl);
            number += 1;
           ingredients.appendChild(positionEl);
        }
    //     const positionEl = document.createElement('li');
    // products.forEach(product => positionEl.textContent = product);
  }
  
 
  createsListOfProducts(ingredients);
  createsListOfProducts(a);