console.log('Project 3 Javascript Final Sprint')
//read file using fetch
fetch('bakery.json')
//convert file into JSON stucture
.then(response => response.json())
.then(data => {
    // Loop through an array as JSON data
    data.forEach(sweet=> {
        // Create a container to hold the pet data
    const container = document.createElement('div');
    container.id = 'bakeryContainer';

        // Create a new div for each sweet
      const sweetDiv = document.createElement('div');
      sweetDiv.className = 'sweet';

        // Add the sweet's data to the div
        sweetDiv.innerHTML = `
        <h2>${bakeryItemDesc(sweet)}</h2>
        <p>Date purchased:  ${datePurchased(sweet)}</p>
        <p>Product cost: ${bakeryCost(sweet)}</p>
      `;

      // Add the sweet's div to the container
      container.appendChild(sweetDiv);
      document.body.appendChild(container);

        //write message to console
        console.log(bakeryItemDesc(sweet));
        console.log(datePurchased(sweet));
        console.log(bakeryCost(sweet));
        
    });
    //Add the container to the body of the HTML
    document.body.appendChild(container);
})
.catch(error =>{
    //Handle any errors that occur 
    console.error(error);
});

function bakeryItemDesc(sweet){
    return `Product Description: ${sweet.flavor} ${sweet.itemDesc}`;
};
function datePurchased(sweet){
    return `${sweet.datePurchased}`;
};

function bakeryCost(sweet) {
    return `\$${sweet.cost}.`;
}

