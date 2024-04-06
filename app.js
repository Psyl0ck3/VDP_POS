window.onload=function(){
    //get elements from HTML

//quantity of pastas
const quantity_cottage = document.getElementById('quantity_cottage');
const quantity_burrata = document.getElementById('quantity_burrata');
const quantity_carbonara = document.getElementById('quantity_carbonara');
const quantity_mushroom = document.getElementById('quantity_mushroom');
const quantity_fivecheese = document.getElementById('quantity_fivecheese');
const quantity_spicy = document.getElementById('quantity_spicy');
const quantity_skilleti = document.getElementById('quantity_skilleti');
const quantity_squid = document.getElementById('quantity_squid');
const quantity_pesto = document.getElementById('quantity_pesto');


//buttons for adding the pasta order
const cottage_button = document.getElementById('cottage_button');
const burrata_button = document.getElementById('burrata_button');
const carbonara_button = document.getElementById('carbonara_button');

const mushroom_button = document.getElementById('mushroom_button');
const fivecheese_button = document.getElementById('fivecheese_button');
const spicy_button = document.getElementById('spicy_button');

const skilleti_button = document.getElementById('skilleti_button');
const squid_button = document.getElementById('squid_button');
const pesto_button = document.getElementById('pesto_button');

//button for confirming the payment
const pay_button = document.getElementById('pay_button');

//for payment input

const total_input = document.getElementById('total_input');

//for order area 

const orderContainer = document.getElementById('area_order');

//initializing variables

let totalPrice = 0;



//display Total Price
   //get total amount area element
   const TotalAmountArea = document.getElementById('total-amount-area');

   //new element for total price
   const TotalPriceElement = document.createElement('h3');
   

   //append the total price element to total amount area div 
   TotalAmountArea.appendChild(TotalPriceElement);

//adding event listeners to add order quantity 

cottage_button.addEventListener('click', function() {
    //getting the option and quantity 
    const quantity = quantity_cottage.value;
    const cottage_price = 500;

    //calculating the price of pasta and quantity

    const price = quantity * cottage_price;


    //displaying the added order to order area

    const orderDiv = document.createElement('div');

    orderDiv.innerHTML = `
        <p>Cottage Cheese Tomato Pasta: ₱${price}</p>
        
    
    `;

    orderContainer.appendChild(orderDiv);

    totalPrice += price;

    //get the p element inside the total-amount-area div
    const totalPriceElement = document.querySelector('#total-amount-area h3');

    //update the text content of the total price element
    totalPriceElement.textContent = `₱${totalPrice}`;
        
});

burrata_button.addEventListener('click', function() {
    //getting the option and quantity 
    const quantity = quantity_burrata.value;
    const burrata_price = 700;

    //calculating the price of pasta and quantity

    const price = quantity * burrata_price;

   //displaying the added order to order area

   const orderDiv = document.createElement('div');

   orderDiv.innerHTML = `
       <p>Burrata Bliss Ravioli: ₱${price}</p>
   
   `;

   orderContainer.appendChild(orderDiv);

   totalPrice += price;
   //get the p element inside the total-amount-area div
   const totalPriceElement = document.querySelector('#total-amount-area h3');

   //update the text content of the total price element
   totalPriceElement.textContent = `₱${totalPrice}`;

   
    
});

carbonara_button.addEventListener('click', function() {
    //getting the option and quantity 
    const quantity = quantity_carbonara.value;
    const carbonara_price = 700;

    //calculating the price of pasta and quantity

    const price = quantity * carbonara_price;

    //add order to the order array(container kung san nakastore) 


   //displaying the added order to order area

   const orderDiv = document.createElement('div');

   orderDiv.innerHTML = `
       <p>Guanciale Grande Carbonara Pasta: ₱${price}</p>
   
   `;

   orderContainer.appendChild(orderDiv);

   totalPrice += price;
   //get the p element inside the total-amount-area div
   const totalPriceElement = document.querySelector('#total-amount-area h3');

   //update the text content of the total price element
   totalPriceElement.textContent = `₱${totalPrice}`;

   
    
});

mushroom_button.addEventListener('click', function() {
    //getting the option and quantity 
    const quantity = quantity_mushroom.value;
    const mushroom_price = 400;

    //calculating the price of pasta and quantity

    const price = quantity * mushroom_price;

    //add order to the order array(container kung san nakastore) 


   //displaying the added order to order area

   const orderDiv = document.createElement('div');

   orderDiv.innerHTML = `
       <p>Mushroom & Garlic Pasta: ₱${price}</p>
   
   `;

   orderContainer.appendChild(orderDiv);

   totalPrice += price;
   //get the p element inside the total-amount-area div
   const totalPriceElement = document.querySelector('#total-amount-area h3');

   //update the text content of the total price element
   totalPriceElement.textContent = `₱${totalPrice}`;

   
    
});

fivecheese_button.addEventListener('click', function() {
    //getting the option and quantity 
    const quantity = quantity_fivecheese.value;
    const fivecheese_price = 300;

    //calculating the price of pasta and quantity

    const price = quantity * fivecheese_price;

    //add order to the order array(container kung san nakastore) 


   //displaying the added order to order area

   const orderDiv = document.createElement('div');

   orderDiv.innerHTML = `
       <p> 5 Cheese Macaroni Pasta: ₱${price}</p>
   
   `;

   orderContainer.appendChild(orderDiv);

   totalPrice += price;
   //get the p element inside the total-amount-area div
   const totalPriceElement = document.querySelector('#total-amount-area h3');

   //update the text content of the total price element
   totalPriceElement.textContent = `₱${totalPrice}`;

   
    
});

spicy_button.addEventListener('click', function() {
    //getting the option and quantity 
    const quantity = quantity_spicy.value;
    const spicy_price = 300;

    //calculating the price of pasta and quantity

    const price = quantity * spicy_price;

    //add order to the order array(container kung san nakastore) 


   //displaying the added order to order area

   const orderDiv = document.createElement('div');

   orderDiv.innerHTML = `
       <p>Spicy Tomato Fusilli Pasta: ₱${price}</p>
   
   `;

   orderContainer.appendChild(orderDiv);

   totalPrice += price;
   //get the p element inside the total-amount-area div
   const totalPriceElement = document.querySelector('#total-amount-area h3');

   //update the text content of the total price element
   totalPriceElement.textContent = `₱${totalPrice}`;

    
});

skilleti_button.addEventListener('click', function() {
    //getting the option and quantity 
    const quantity = quantity_skilleti.value;
    const skilleti_price = 500;

    //calculating the price of pasta and quantity

    const price = quantity * skilleti_price;

    //add order to the order array(container kung san nakastore) 


   //displaying the added order to order area

   const orderDiv = document.createElement('div');

   orderDiv.innerHTML = `
       <p>Skilleti Alfredo Penne Pasta: ₱${price}</p>
   
   `;

   orderContainer.appendChild(orderDiv);

   totalPrice += price;
   //get the p element inside the total-amount-area div
   const totalPriceElement = document.querySelector('#total-amount-area h3');

   //update the text content of the total price element
   totalPriceElement.textContent = `₱${totalPrice}`;

    
});

squid_button.addEventListener('click', function() {
    //getting the option and quantity 
    const quantity = quantity_squid.value;
    const squid_price = 600;

    //calculating the price of pasta and quantity

    const price = quantity * squid_price;

    //add order to the order array(container kung san nakastore) 


   //displaying the added order to order area

   const orderDiv = document.createElement('div');

   orderDiv.innerHTML = `
       <p>Squid Ink Spaghetti Pasta: ₱${price}</p>
   
   `;

   orderContainer.appendChild(orderDiv);

   totalPrice += price;
   //get the p element inside the total-amount-area div
   const totalPriceElement = document.querySelector('#total-amount-area h3');

   //update the text content of the total price element
   totalPriceElement.textContent = `₱${totalPrice}`;

    
});

pesto_button.addEventListener('click', function() {
    //getting the option and quantity 
    const quantity = quantity_pesto.value;
    const pesto_price = 400;

    //calculating the price of pasta and quantity

    const price = quantity * pesto_price;

    //add order to the order array(container kung san nakastore) 


   //displaying the added order to order area

   const orderDiv = document.createElement('div');

   orderDiv.innerHTML = `
       <p>Spinach Pesto Fusilli Pasta: ₱${price}</p>
   
   `;

   orderContainer.appendChild(orderDiv);

   totalPrice += price;
   //get the p element inside the total-amount-area div
   const totalPriceElement = document.querySelector('#total-amount-area h3');

   //update the text content of the total price element
   totalPriceElement.textContent = `₱${totalPrice}`;

    
});




//pay button
pay_button.addEventListener('click', function(){
    const payment = parseInt(total_input.value);

    //calculate the change
    const change = payment - totalPrice;

    //Display the change 
    if (change >= 0) {
        alert(`Molte grazie! your change is ₱${change}`);
    } else {
        alert('Insufficient payment');
    }
});



    
}

