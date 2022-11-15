const players = [
    {
        id:1,
        name: "Christiano Ronaldo",
        position: "Forward",
        img: "images/ronaldo.jpg",
        about: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team.",
    },
    {
        id:2,
        name: "Neymar da Silva Santos Júnior",
        position: "Forward",
        img: "images/neymar.jpg",
        about: "Neymar da Silva Santos Júnior, known as Neymar, is a Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team. A prolific goalscorer and renowned playmaker, he is regarded as one of the best players in the world.",
    },
    {
        id:3,
        name: "Kylian_Mbappe",
        position: "Forward",
        img: "images/mbappe.png",
        about: "Kylian Mbappé Lottin is a French professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the France national team. Considered one of the best players in the world, Mbappé is renowned for his dribbling abilities, exceptional speed, and finishing.",
    },
    {
        id:4,
        name: "N'Golo Kanté",
        position: "Midfielder",
        img: "images/kante.jpg",
        about: "N'Golo Kanté is a French professional footballer who plays as a central midfielder for Premier League club Chelsea and the France national team. Considered by many to be one of the world's best midfielders, Kanté is widely praised for his work rate and defensive acumen.",
    },
    {
        id:5,
        name: "Erling Haaland",
        position: "Midfielders",
        img:"images/haaland.jpg",
        about: "Erling Braut Haaland is a Norwegian professional footballer who plays as a striker for Premier League club Manchester City and the Norway national team. Considered one of the best players in the world, he is known for his speed, strength and finishing.",
    },

];

// Access items from html
const img = document.getElementById("player-img");
const playerName = document.getElementById("player-name");
const position = document.getElementById("position");
const info = document.getElementById("info");

// Access buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Access the first item from players array
let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPlayer();
});

const showPlayer = () => {
    const item = players[currentItem];
    img.src = item.img;
    playerName.textContent = item.name;
    position.textContent = "Position: " + item.position;
    info.textContent = item.about;
}

// Add functionality to buttons

// The nextBtn
// we put  players.length - 1 to get the last item in the array i.e item index 4 from 5 items
// players.length()  is 5  but we want the last item-index 4 so, minus 1
nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > players.length - 1){
        currentItem = 0;
    }
    showPlayer();
});

// The prevBtn
// When we reach the 0 index player, return the last item i.e players.length -1 which is 5-1 = 4
prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = players.length - 1;
    }
    showPlayer();
});

// The randomBtn

randomBtn.addEventListener('click', () => {
    currentItem =  Math.floor(Math.random() * players.length);
    showPlayer();
})