
let Bag = [

    {
        name: " hublot ",
        price: "$950",
        image: "flat.jpg"
    },

    {
        name: " M-purse ",
        price: "$650",
        image: "diff.pieces.jpg"
    },

    {
        name: " Xavier ",
        price: "$700",
        image: "classy.jpg"
    },


    {
        name: " Vikenz ",
        price: "$700",
        image: "pexels.jpeg"
    },

    {
        name: " Vogue ",
        price: "$170",
        image: "black.jpeg"
    },

    {
        name: " Fendi ",
        price: "$250",
        image: "nude.jpeg"
    },

    {
        name: " louiton2 ",
        price: "$250",
        image: "round.jpeg"
    },

    {
        name: "Gucci",
        price: "$250",
        image: "white.jpeg"
    },

    {
        name: "mackenz ",
        price: "$300",
        image: "classy.jpg"
    },


    {
        name: " Prindi ",
        price: "$250",
        image: "pitch.jpg"
    },

    {
        name: "Gucci",
        price: "$250",
        image: "fashion.jpg"
    },

    {
        name: "mackenz ",
        price: "$300",
        image: "beauty.jpg"
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
