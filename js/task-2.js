    const ingredients = [
        'Картошка',
        'Грибы',
        'Чеснок',
        'Помидоры',
        'Зелень',
        'Приправы',
    ];

   

    const createsListOfProducts = (products) => {
               
        const selectedById = document.querySelector('#ingredients');
        const elementStringEl = products.reduce(
            (string, item) => string + `<li>${item}</li>`,
            ""
        );
        
        selectedById.innerHTML = elementStringEl;
  }
 

    createsListOfProducts(ingredients);
 