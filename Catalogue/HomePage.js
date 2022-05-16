//First we create the class for the game objects using a constructor
function Game(OwnPage, image, name, description, price, rating, link){
    this.OwnPage = OwnPage;
    this.imageSrc = image;
    this.name = name;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.link = link;

    //Here we create the method that will show all the info of the game when clicked on
    this.showMore = function(){
        document.getElementById("GameName").innerHTML = this.name;
        document.getElementById("Information").innerHTML = "Description: " + this.description + "<br>"+ "Rating: " + this.rating + "<br>" + "Price: R"+this.price;
        myDialog.style.width = "400px";
        myDialog.showModal();
    }

    //function to calculate, alert and display the total
    this.total = function(){            //Have this function loop through all elements in the array and add them together
        total = JSON.parse(sessionStorage.getItem("total"));
        total.push(Number(this.price));
        let lengthOfArray = total.length;
        let myTotal = 0;
        for (let i = 0; i <lengthOfArray; i++){
            myTotal += total[i];
        }
        alert(this.name + " was added to cart" + "\r\n" +"Total: R" + myTotal);
        document.getElementById("Total").innerHTML = "Total in cart: R" + myTotal;
        sessionStorage.setItem("total", JSON.stringify(total));
    }

}

var game1 = new Game(
    "GamePages/EldenRing.html",
    "https://www.gamereactor.eu/media/17/eldenring_3501783b.jpg",
    "Elden Ring",
    "Elden Ring is an action role-playing game played in a third-person perspective with gameplay focusing on combat and exploration.",
    "1070",
    "10/10",
    "https://www.xbox.com/en-ZA/games/elden-ring"
);

var game2 = new Game(
    "GamePages/Horizon.html",
    "https://static.raru.co.za/cover/2021/09/02/8666127-l.jpg?v=1645084639",
    "Horizon 2: Forbidden West",
    "Horizon Forbidden West is a 2022 action RPG developed by Guerrilla Games and published by Sony Interactive Entertainment. A sequel to 2017's Horizon Zero Dawn, the game is set in a post-apocalyptic version of the Western United States, which has been overrun by a deadly plague.",
    "1100",
    "9/10",
    "https://www.playstation.com/en-za/games/horizon-forbidden-west/?emcid=pa-co-422393&gclsrc=aw.ds&gclid=Cj0KCQjwgYSTBhDKARIsAB8Kukvv7otLM3CR2kQlQu6eXBuDrPt13Dl4E9hXgRFBm1Yto1lqxpRuCh4aAr4DEALw_wcB"
);

var game3 = new Game(
    "GamePages/Pokemon.html",
    "https://s2.gaming-cdn.com/images/products/8908/orig-fallback-v1/pokemon-legends-arceus-switch-game-nintendo-eshop-europe-cover.jpg",
    "Pokemon Legends: Arceus",
    "Pokémon Legends: Arceus is an action role-playing game that preserves the core gameplay of past entries in the main line series. The player is able to roam freely across the game map, divided into five large areas of individual biomes.",
    "950",
    "7/10",
    "https://store.nintendo.co.za/products/pokemon-legends-arceus?_pos=1&_psq=pokemon+lege&_ss=e&_v=1.0&utm_source=search&utm_medium=paid&utm_term=mark1&utm_content=20220405-&gclid=Cj0KCQjwgYSTBhDKARIsAB8KuktjEoNF2mIZWD7Njq5ZmEb0jx5hGX4-69S6_dOpgXonDCBTWB2sOAIaAkzYEALw_wcB"
);

var game4 = new Game(
    "GamePages/DyingLight.html",
    "https://image.api.playstation.com/vulcan/ap/rnd/202105/1702/6eh4ZBJoSJmZvwuvnM1ywCCf.jpg",
    "Dying Light 2: Stay Human",
    "Dying Light 2 Stay Human is an action role-playing survival horror video game, featuring a zombie apocalyptic-themed open world. Set 22 years after Dying Light, it stars a new protagonist named Aiden Caldwell (voiced by Jonah Scott), who is equipped with various parkour skills.",
    "950",
    "7/10",
    "https://www.playstation.com/en-za/games/dying-light-2-stay-human/"
);

var game5 = new Game(
    "GamePages/Warhammer.html",
    "https://sm.ign.com/ign_za/cover/t/total-war-/total-war-warhammer-iii_9cn5.jpg",
    "Total War: Warhammer 3",
    "Total War: WARHAMMER III features a captivating narrative that will take you to the mind-bending Realm of Chaos and back again. Tackle it in different ways with different factions, in a strategy sandbox that ensures no two campaigns are ever the same.",
    "715",
    "9/10",
    "https://store.steampowered.com/app/1142710/Total_War_WARHAMMER_III/"
);

var game6 = new Game(
    "GamePages/CallOfDuty.html",
    "https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzEtbzdSYXAySEwuX1NMMTM3OF8uanBn.jpg",
    "Call of Duty Vanguard",
    "Dogfight over the Pacific, airdrop over France, defend Stalingrad with a sniper's precision and blast through advancing forces in North Africa. The single-player campaign will immerse you in a deeply engaging narrative experience featuring combat on an unparalleled global scale.",
    "1300",
    "7/10",
    "https://www.playstation.com/en-za/games/call-of-duty-vanguard/"
);

var game7 = new Game(
    "GamePages/Madden.html",
    "https://pbs.twimg.com/media/E4FwFI7VkAkQABj?format=jpg&name=medium",
    "Madden NFL 2022",
    "Madden NFL 22 is where gameday happens. All-new features in Franchise include staff management, an enhanced scenario engine and weekly strategy. Share avatar progress and player class between Face of The Franchise and The Yard with unified progression.",
    "1000",
    "6/10",
    "https://www.xbox.com/en-ZA/games/madden-22"
);

var game8 = new Game(
    "GamePages/MarioKart.html",
    "https://www.mobygames.com/images/covers/l/519101-mario-kart-8-wii-u-front-cover.jpg",
    "Mario Kart 8",
    "Mario Kart 8 is a kart racing game developed and published by Nintendo, and first released for the Wii U in 2014. It retains Mario Kart series game mechanics, where players control Mario franchise characters in kart racing, collecting a variety of items to hinder opponents or gain advantages in the race.",
    "1200",
    "9/10",
    "https://mariokart8.nintendo.com/"
);

var game9 = new Game(
    "GamePages/FIFA22.html",
    "https://a.espncdn.com/photo/2021/0709/r878390_864x1296_2-3.jpg",
    "FIFA 22",
    "FIFA 22 is Powered by Football, and features groundbreaking new HyperMotion gameplay technology on PlayStation 5, Xbox Series X|S, and Stadia.",
    "1000",
    "7/10",
    "https://www.playstation.com/en-za/games/ea-sports-fifa-22/?emcid=pa-co-422393&gclsrc=aw.ds&gclid=Cj0KCQjwgYSTBhDKARIsAB8KuktDlfjUqrVZZwdXvmic6k97JjAS_YxKr4DV8AeMg8Uj26iw8LH4BU8aAiTDEALw_wcB"
);

var game10 = new Game(
    "GamePages/Minecraft.html",
    "https://www.mobygames.com/images/covers/l/363275-minecraft-playstation-4-edition-xbox-one-front-cover.png",
    "Minecraft",
    "Minecraft is a video game in which players create and break apart various kinds of blocks in three-dimensional worlds. The game's two main modes are Survival and Creative. In Survival, players must find their own building supplies and food. They also interact with blocklike mobs, or moving creatures.",
    "500",
    "9/10",
    "https://www.xbox.com/en-us/games/store/minecraft/9nblggh537bl"
);

var game11 = new Game(
    "GamePages/Gears.html",
    "https://assets.vg247.com/current//2019/05/gears_5_leaked_art_watermark_1.jpg",
    "Gears of War 5",
    "Gears 5 takes place months after the events of Gears of War 4 and focuses on Kait Diaz (Laura Bailey), an Outsider who is descended from Myrrah (Carolyn Seymour), Queen of the Locust Horde. As Kait, the player must uncover the origins of the Locust and the truth behind her family history.",
    "900",
    "9/10",
    "https://www.xbox.com/en-us/games/store/gears-5/c2kdnlt2h7dm"
);

var game12 = new Game(
    "GamePages/GTA5.html",
    "https://www.mobygames.com/images/covers/l/478997-grand-theft-auto-v-xbox-one-front-cover.jpg",
    "GTA 5",
    "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
    "800",
    "10/10",
    "https://www.playstation.com/en-za/games/grand-theft-auto-v/?emcid=pa-co-422393&gclsrc=aw.ds&gclid=Cj0KCQjwgYSTBhDKARIsAB8KukvoAipJqIGlJRuw88IrS1f7gmwP-XdGzOHptCzp2Pwvz3ZqsOHyTL8aAuetEALw_wcB"
);

//Seperate arrays where made for each row.
let rowOne = [game1, game2, game3, game4, game5, game6];
let rowTwo = [game7, game8, game9, game10, game11, game12];

var loadPage = {};

//The dialog element is stored in myDialog
const myDialog = document.getElementById("myDialog");

//total is used to store just the prices of the items
var total = [];

//gameObj stores the game objects
var gameObj = [];

function myLoad(){
    let totalVariable = document.getElementById("Total");

    if (sessionStorage.getItem("hasCodeRunBefore") === null){
        sessionStorage.setItem("total", JSON.stringify(total));
        sessionStorage.setItem("hasCodeRunBefore", true);
    }else{
        total = JSON.parse(sessionStorage.getItem("total"));
        let lengthOfArray = total.length;
        let myTotal = 0;
        for (let i = 0; i <lengthOfArray; i++){
            myTotal += total[i];
        }
        totalVariable.innerHTML = "Total in cart: R" + myTotal;
    }
}

loadPage.addGames = function() {

    //This function creates row one, to make another row we copy this but change the array and the TableRow variable
    rowOne.forEach(function(game){

        //TableRow will be appended to TableBody
        let TableBody = document.getElementById("Body");

        //TableData will be appended to TableRow
        let TableRow = document.getElementById("RowOne");

        //ImageIsLink and title will be appended to TableData
        let TableData = document.createElement("td");

        //Creating image element for the game image
        let gameImage = document.createElement("img");
        gameImage.src = game.imageSrc;
        gameImage.alt = game.name;
        gameImage.className = "img-thumbnail";
        gameImage.style.width = "150px";
        gameImage.style.height = "180px";

        //Creating p element for the title shown below the game
        let title = document.createElement("p");
        title.innerHTML = game.name;

        //When an image is clicked on the dialog box will appear showing more information
        gameImage.addEventListener("click", function(e){
            game.showMore();
        });

        gameImage.addEventListener("dblclick", function(c){
            gameImage.src;
        })

        //Create an add to cart button that will be appended to each game
        let addButton = document.createElement("button");
        addButton.innerHTML = "Add to cart";

        addButton.addEventListener("click", function(a){
            game.total();
        });

        //create the link tag for each games page that will be disguised as a more button
        let gameLink = document.createElement("a");
        gameLink.href = game.OwnPage;

        //Create more button that will be appended to each game
        let moreButton = document.createElement("button");
        moreButton.innerHTML = "More";

        gameLink.appendChild(moreButton);
        TableData.appendChild(gameImage);
        TableData.appendChild(title);
        TableData.appendChild(addButton);
        TableData.appendChild(gameLink);
        TableRow.appendChild(TableData);
        TableBody.appendChild(TableRow);

        
    });

/**-------------------------------------------------------------------------------------------------------------------------------------------------- */

    //Row2
    rowTwo.forEach(function(game){

        //TableRow will be appended to TableBody
        let TableBody = document.getElementById("Body");

        //TableData will be appended to TableRow
        let TableRow = document.getElementById("RowTwo");

        //ImageIsLink and title will be appended to TableData
        let TableData = document.createElement("td");


        //Creating image element which will have the image of the game
        let gameImage = document.createElement("img");
        gameImage.src = game.imageSrc;
        gameImage.alt = game.name;
        gameImage.className = "img-thumbnail";
        gameImage.style.width = "150px";
        gameImage.style.height = "180px";

        //Creating p element for the title shown below the game
        let title = document.createElement("p");
        title.innerHTML = game.name;

        //When an image is clicked on the dialog box will appear showing more information
        gameImage.addEventListener("click", function(e){
            game.showMore();
        });

        //Create an add to cart button that will be appended to each game
        let addButton = document.createElement("button");
        addButton.innerHTML = "Add to cart";

        addButton.addEventListener("click", function(a){
            game.total();
        });

        //create the link tag for each games page that will be disguised as a more button
        let gameLink = document.createElement("a");
        gameLink.href = game.OwnPage;

        //Create more button that will be appended to each game
        let moreButton = document.createElement("button");
        moreButton.innerHTML = "More";

        //We append all our elements
        gameLink.appendChild(moreButton);
        TableData.appendChild(gameImage);
        TableData.appendChild(title);
        TableData.appendChild(addButton);
        TableData.appendChild(gameLink);
        TableRow.appendChild(TableData);
        TableBody.appendChild(TableRow);
    });

    
};

loadPage.addGames();
$(document).ready(function(){
    $("#more").mouseover(function(){
        $("#myDropdown").slideDown(500);
    }).mouseout(function(){
        $("#myDropdown").slideUp(500);
    })
});

