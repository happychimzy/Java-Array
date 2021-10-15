
let Bag = [

    {
        name: " hublot ",
        price: "$950",
        image: "wristwatches.jpg"
    },

    {
        name: " M-purse ",
        price: "$650",
        image: "purseeeeee.jpg"
    },

    {
        name: " Xavier ",
        price: "$700",
        image: "lady-bag.jpg"
    },


    {
        name: " Vikenz ",
        price: "$700",
        image: "accessories.jpg"
    },

    {
        name: " Vogue ",
        price: "$170",
        image: "diff.pieces.jpg"
    },

    {
        name: " Fendi ",
        price: "$250",
        image: "brown-bag.jpg"
    },

    {
        name: " louiton2 ",
        price: "$250",
        image: "acesory.jpg"
    },

    {
        name: "Gucci",
        price: "$250",
        image: "baggggsss.jpg"
    },

    {
        name: "mackenz ",
        price: "$300",
        image: "wristwatches.jpg"
    },


    {
        name: " Prindi ",
        price: "$250",
        image: "minibag.jpg"
    },

    {
        name: "Gucci",
        price: "$250",
        image: "gucci2.jpg"
    },

    {
        name: "mackenz ",
        price: "$300",
        image: "stylebag.jpg"
    },

]

let image_container = document.querySelector('#Bags-secondary')
Bag.forEach(element => {
    let bagCard = `<div class="col-sm-12 col-md-6 col-lg-4">
    <section class="bag-section" >
    <div class="bag-cards">
     <div class="bag-image">
         <img src="./images/${element.image}" alt="louiton"height="250" width="300">
     </div>
     <div class="container d-flex justify-content-between">
     <div class="bag-name">
         <h1 class="text-white">${element.name}</h1>
    </div>
    <div class="bag-price">
        <h3 class="text-white">${element.price}</h3>
     </div>
     </div>
 </div>
 </section>
 </div>`;
    if (image_container)
        image_container.innerHTML += bagCard;

});


const myForm = document.querySelector('.form');
myForm.addEventListener('submit', function (e) {

    e.preventDefault();

    const inputName = document.querySelector('#name').value;
    const inputEmail = document.querySelector('#email').value;

    console.log(inputName);

    console.log(inputEmail);

});
