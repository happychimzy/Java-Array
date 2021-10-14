
let Animals = [
    {
        name: " Dog ",
        price: "$70",
        image: "dog.jpg"
    },

    {
        name: " fish ",
        price: "$100",
        image: "fish.jpg"
    },

    {
        name: " monkeys ",
        price: "$90",
        image: "monkey.jpg"
    },

    {
        name: " peacock ",
        price: "$70",
        image: "peacock.jpg"
    },

    {
        name: " pig ",
        price: "$700",
        image: "pig.jpg"
    },

    {
        name: " Toad ",
        price: "$150",
        image: "Toad.jpg"
    },

    {
        name: " Rabbit ",
        price: "$70",
        image: "rabbit.jpg"
    },

    {
        name: " Dog ",
        price: "$170",
        image: "dog.jpg"
    },

    {
        name: " Sheep ",
        price: "$250",
        image: "babysheep.jpg"
    },

    {
        name: " Bird ",
        price: "$250",
        image: "bird.jpg"
    },

    {
        name: "puppy",
        price: "$250",
        image: "babydog.jpg"
    },

    {
        name: "playing animals ",
        price: "$300",
        image: "playinganimals.jpg"
    },

    {
        name: " kenya bird ",
        price: "$350",
        image: "kenya-bird.jpg"
    }

]

let image_container = document.querySelector('#Animals-secondary')
Animals.forEach(element => {
    let animalCard = `<div class="col-sm-12 col-md-6 col-lg-4">
    <section class="animal-section" >
    <div class="animal-cards">
     <div class="animal-image">
         <img src="./images/${element.image}" alt="dog"height="250" width="300">
     </div>
     <div class="container d-flex justify-content-between">
     <div class="animal-name">
         <h1 class="text-primary">${element.name}</h1>
    </div>
    <div class="animal-price">
        <h3 class="text-primary">${element.price}</h3>
     </div>
     </div>
 </div>
 </section>
 </div>`;
    if (image_container)
        image_container.innerHTML += animalCard;

});


const myForm = document.querySelector('.form');
myForm.addEventListener('submit', function (e) {

    e.preventDefault();

    const inputName = document.querySelector('#name').value;
    const inputEmail = document.querySelector('#email').value;

    console.log(inputName);

    console.log(inputEmail);

});
