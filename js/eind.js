var themeSong = document.querySelector("audio");
var themeSongButton = document.querySelector("#music"); 

var bodyElement = document.querySelector("body");

var startPageElements = document.querySelector("#startPage");
var startButton = document.querySelector(".playGame");
var restartButton = document.querySelector("#restart");

var pageOne = document.querySelector("#gamePageOne");

var goodAnswer = document.querySelector("#good");
var okayAnswer = document.querySelector("#okay");
var badAnswer = document.querySelector("#bad");
var answerButtons = document.querySelector("#answers")

var bossText = document.querySelector("#bossText");

var bossMood = 50
var moodBar = document.querySelector("#mood");
var moodLabel = document.querySelector("label");
var questionNumber = 1;

var gameFinished = document.querySelector("#gameFinished");
var endText = document.querySelector("#endText");

// Functie om muziek aan en uit te zetten. Veranderd ook de styling van de button zodat de gebruiker weet dat deze verandering aanbrengt.
function toggleMusic (){
    if (themeSong.paused) {
        themeSong.play();
        themeSongButton.classList.remove("musicOff");
        themeSongButton.classList.add("musicOn")
    }
    else {
        themeSong.pause();
        themeSongButton.classList.remove("musicOn");
        themeSongButton.classList.add("musicOff")
    }
}

// Functie om de game te starten. Zorgt ervoor dat als de gebruiker op de startbutton drukt de achtergrond veranderd en verschillende elementen verdwijnen en andere juist te zien zijn.
function startGame() {
    bodyElement.style.backgroundImage = "url(images/bg_first_question.jpg)"; // Bron: https://time.com/5763852/best-the-office-memes/ 
    startPageElements.classList.add("hidden");
    pageOne.classList.remove("hidden");
    console.log(moodBar);
}

// Functie die bijhoudt wanneer op een goed antwoord wordt gedrukt. De happiness van de baas gaat dan omhoog. Daarnaast wordt bijgehouden bij welke vraag de gebruiker is en hierop gebaseerd worden de elementen goed aangepast.
function goodAnswerSelect() {
    bossMood = bossMood + 15;
    moodBar.setAttribute("value", bossMood);

    if (questionNumber == 1) {
        bossText.textContent = "[MICHAEL] Here's the thing Jim, I know we're best friends, but I'm also your boss. That means that I sometimes have to be strict and that's hard."
        goodAnswer.textContent = "That's what she said!";
        okayAnswer.textContent = "Is something up? Am I in trouble?";
        badAnswer.textContent = "If you would just let me go back to my desk we could skip the hard part.";
        bodyElement.style.backgroundImage = "url(images/bg_sit_down.jpg)";  //* Bron: https://www.inc.com/adam-heitzman/10-things-michael-scott-taught-us-about-managing-people.html 
    }
    else if (questionNumber == 2) {
        bossText.textContent = "[MICHAEL] Hahaha, good one Jim! Anyways, what were we talking about? Oh right, downsizing. Look, the unfortunate truth is that the company is in some financial trouble and corporate said we're gonna have to lay off some of the staff. So the question is simple: Why should the company keep YOU on board?";
        goodAnswer.textContent = "Obviously because we're best friends Michael, you wouldn't want to mess that up right?";
        okayAnswer.textContent = "Well my sales are one of the best of the company. Letting me go would make the company lose more money than they would gain.";
        badAnswer.textContent = "Is this really a decision you're gonna make on your own? Maybe you could ask Toby to help you with this?";
        bodyElement.style.backgroundImage = "url(images/bg_laugh.jpg)"; //* Bron: https://www.reddit.com/r/DunderMifflin/comments/bv2guk/after_he_gives_oscar_the_doll_when_he_leaves_for/ 
    }
    else if(questionNumber == 3) {
        bossText.textContent = "[MICHAEL] You make a good point there, I do consider myself a friend first and a boss second... and probably an entertainer third. But corporate did tell me I have to let someone go today, do you know someone we could miss?";
        goodAnswer.textContent = "Michael arent you THE regional manager of Scranton? You can tell corporate you don't have to fire anyone if you don't want to.";
        okayAnswer.textContent = "What about Dwight? I know he's a good salesman but hasn't he caused enough problems for the company already?";
        badAnswer.textContent = "Maybe Ryan, I mean he's just a temp anyways, right?";
        bodyElement.style.backgroundImage = "url(images/bg_serious.jpeg)";  //* Bron: https://eu.usatoday.com/picture-gallery/entertainment/tv/2020/03/24/the-office-15th-anniversary-where-dunder-mifflin-employees-now/2865611001/
    }
    else if(questionNumber == 4) {
        bossText.textContent = "[MICHAEL] You know what? You're right! I'm gonna call corporate right now. 'David, yes, hi, so I was thinking, I don't wanna fire any of these people and I'm regional manager so I think I have that right... What.. oh sorry... yea okay, I get it'. Okay so apparently I don't have that much of a say in it. Let's continue; What would you say is your best quality?";
        goodAnswer.textContent = "My friends tell me I make a mean chicken pot pie so... maybe I could make you one someday?";
        okayAnswer.textContent = "Well like I said my sales are some of the best in the company, so I guess my best quality is how easily I can convince clients to buy our paper.";
        badAnswer.textContent = "I mean I make some pretty good jokes if I may say so myself. I know how you likes your jokes.";
        bodyElement.style.backgroundImage = "url(images/bg_corporate.jpg)"; //* Bron: https://www.cheatsheet.com/entertainment/the-office-the-genius-way-the-writers-made-michael-scotts-character-lovable-and-pure-after-season-1.html/ 
    }
    else if(questionNumber == 5) {
        bossText.textContent = "[MICHAEL] Ohhh.... that sounds very interesting indeed. Those are definitely the qualities we need in this company. Okay so I think I've figured out what I'm gonna do. Do you have any last thoughts you want to share with me?";
        goodAnswer.textContent = "I think this was a really fun conversation, I really like talking to you Michael.";
        okayAnswer.textContent = "No, I'm good I think.";
        badAnswer.textContent = "If you already know what you're gonna do that's not really gonna make a difference anymore, is it?";
        bodyElement.style.backgroundImage = "url(images/bg_chicken.jpg)"; //* Bron: https://screencrush.com/steve-carell-office-return/
    }
}

// Zelfde als bij function GoodAnswerSelect maar dan wanneer de gebruiker op een "okay" antwoord klikt.
function okayAnswerSelect(){
    bossMood = bossMood -5;
    moodBar.setAttribute("value", bossMood);
    if (questionNumber == 1) {
        bossText.textContent = "[MICHAEL] It might take a while Jim, so please just sit down. Look, I know we're best friends, but I'm also your boss. That means that I sometimes have to be strict and that's hard."
        goodAnswer.textContent = "That's what she said!";
        okayAnswer.textContent = "Is something up? Am I in trouble?";
        badAnswer.textContent = "If you would just let me go back to my desk we could skip the hard part.";
        bodyElement.style.backgroundImage = "url(images/bg_sit_down.jpg)";  //* Bron: https://www.inc.com/adam-heitzman/10-things-michael-scott-taught-us-about-managing-people.html 
    }
    else if (questionNumber == 2) {
        bossText.textContent = "[MICHAEL] No, Jim you're not, I mean... maybe. Look, the truth is that the company is in some financial trouble and corporate said we're gonna have to lay off some of the staff. So the question is simple: Why should the company keep YOU on board?";
        goodAnswer.textContent = "Obviously because we're best friends Michael, you wouldn't want to mess that up right?";
        okayAnswer.textContent = "Well my sales are one of the best of the company. Letting me go would make the company lose more money than they would gain.";
        badAnswer.textContent = "Is this really a decision you're gonna make on your own? Maybe you could ask Toby to help you with this?";
        bodyElement.style.backgroundImage = "url(images/bg_serious2.jpg)";  //* Bron: https://hellogiggles.com/reviews-coverage/tv-shows/the-office-helped-me-through-depression/ 
    }
    else if(questionNumber == 3) {
        bossText.textContent = "[MICHAEL] Hmmm yea, maybe you're right. Your sales numbers are pretty good. That still doesn't help me though, because corporate did tell me I have to let someone go today, do you know someone we could miss?";
        goodAnswer.textContent = "Michael arent you THE regional manager of Scranton? You can tell corporate you don't have to fire anyone if you don't want to.";
        okayAnswer.textContent = "What about Dwight? I know he's a good salesman but hasn't he caused enough problems for the company already? It seems like he's a bit of a liability.";
        badAnswer.textContent = "Maybe Ryan, I mean he's just a temp anyways, right? Seems like that is your best choice.";
        bodyElement.style.backgroundImage = "url(images/bg_serious.jpeg)";  //* Bron: https://eu.usatoday.com/picture-gallery/entertainment/tv/2020/03/24/the-office-15th-anniversary-where-dunder-mifflin-employees-now/2865611001/
    }
    else if(questionNumber == 4) {
        bossText.textContent = "[MICHAEL] Potentially yea... Let me get him in here. 'Dwight, I have to let someone go today. It could be Jim, could be you, could be anyone else. I just don't know how to choose.' [DWIGHT] 'It's all about qualities, I could get this office through a nuclear winter if I had to. What quality does Jim even have?";
        goodAnswer.textContent = "My friends tell me I make a mean chicken pot pie so... maybe I could make you one someday?";
        okayAnswer.textContent = "Well like I said my sales are some of the best in the company, so I guess my best quality is how easily I can convince clients to buy our paper.";
        badAnswer.textContent = "I mean I make some pretty good jokes if I may say so myself. I know how you likes your jokes.";
        bodyElement.style.backgroundImage = "url(images/bg_dwight.jpg)"; //* Bron: https://www.cheatsheet.com/entertainment/the-office-jenna-fischer-says-this-hilarious-michael-and-dwight-scene-is-her-favorite-of-all-time.html/   
    }
    else if(questionNumber == 5) {
        bossText.textContent = "[MICHAEL] Well, you already said that, but yea, I guess that's still an important quality here. You know what... I think I know what I'm going to do. Do you have any last thoughts you want to share with me?";
        goodAnswer.textContent = "I think this was a really fun conversation, I really like talking to you Michael.";
        okayAnswer.textContent = "No, I'm good I think.";
        badAnswer.textContent = "If you already know what you're gonna do that's not really gonna make a difference anymore, is it?";
        bodyElement.style.backgroundImage = "url(images/bg_ending.jpg)";    //* Bron: https://www.youtube.com/watch?v=gemDBt4odwM&ab_channel=JackedJoes
    }
}

// Zelfde als bij function GoodAnswerSelect maar dan wanneer de gebruiker op een "bad" antwoord klikt.
function badAnswerSelect() {
    bossMood = bossMood - 20;
    moodBar.setAttribute("value", bossMood);
    if (questionNumber == 1) {
        bossText.textContent = "Jim, that's ridiculous, just take a seat. Look, I know we're best friends, but I'm also your boss. That means that I sometimes have to be strict and that's hard."
        goodAnswer.textContent = "That's what she said!";
        okayAnswer.textContent = "Is something up? Am I in trouble?";
        badAnswer.textContent = "If you would just let me go back to my desk we could skip the hard part.";
        bodyElement.style.backgroundImage = "url(images/bg_sit_down.jpg)";
    }
    else if (questionNumber == 2) {
        bossText.textContent = "[MICHAEL] No that's not gonna happen... you're not helping okay. Look, the truth is that the company is in some financial trouble and corporate said we're gonna have to lay off some of the staff. So the question is simple: Why should the company keep YOU on board?";
        goodAnswer.textContent = "Obviously because we're best friends Michael, you wouldn't want to mess that up right?";
        okayAnswer.textContent = "Well my sales are one of the best of the company. Letting me go would make the company lose more money than they would gain.";
        badAnswer.textContent = "Is this really a decision you're gonna make on your own? Maybe you could ask Toby to help you with this?";
        bodyElement.style.backgroundImage = "url(images/bg_serious2.jpg)";  //* Bron: https://hellogiggles.com/reviews-coverage/tv-shows/the-office-helped-me-through-depression/ 
    }
    else if(questionNumber == 3) {
        bossText.textContent = "[MICHAEL] TOBY? Have you lost your goddamn mind because I'll help you find it! No, I'm not asking Toby. Corporate told me I have to let someone go today, it's my decision. Anyways, do you know someone we could miss?";
        goodAnswer.textContent = "Michael arent you THE regional manager of Scranton? You can tell corporate you don't have to fire anyone if you don't want to.";
        okayAnswer.textContent = "What about Dwight? I know he's a good salesman but hasn't he caused enough problems for the company already? It seems like he's a bit of a liability.";
        badAnswer.textContent = "Maybe Ryan, I mean he's just a temp anyways, right? Seems like that is your best choice.";
        bodyElement.style.backgroundImage = "url(images/bg_serious.jpeg)";  //* Bron: https://eu.usatoday.com/picture-gallery/entertainment/tv/2020/03/24/the-office-15th-anniversary-where-dunder-mifflin-employees-now/2865611001/
    }
    else if(questionNumber == 4) {
        bossText.textContent = "[MICHAEL] Ryan? No why would I fire Ryan? Everybody loves him, it would be a huge hit to morale. Ryan has too many good qualities to let him go. What are your best qualities Jim? What can you offer to this branch?";
        goodAnswer.textContent = "My friends tell me I make a mean chicken pot pie so... maybe I could make you one someday?";
        okayAnswer.textContent = "Well like I said my sales are some of the best in the company, so I guess my best quality is how easily I can convince clients to buy our paper.";
        badAnswer.textContent = "I mean I make some pretty good jokes if I may say so myself. I know how you likes your jokes.";
        bodyElement.style.backgroundImage = "url(images/bg_annoyed.jpg)"; //* Bron: https://www.cheatsheet.com/entertainment/the-office-jenna-fischer-says-this-hilarious-michael-and-dwight-scene-is-her-favorite-of-all-time.html/   
    }
    else if(questionNumber == 5) {
        bossText.textContent = "[MICHAEL] I do like my jokes... MY jokes. One entertainer is more than enough in this office. You know what... I think I know what I'm going to do. Do you have any last thoughts you want to share with me?";
        goodAnswer.textContent = "I think this was a really fun conversation, I really like talking to you Michael.";
        okayAnswer.textContent = "No, I'm good I think.";
        badAnswer.textContent = "If you already know what you're gonna do that's not really gonna make a difference anymore, is it?";
        bodyElement.style.backgroundImage = "url(images/bg_ending.jpg)";    //* Bron: https://www.youtube.com/watch?v=gemDBt4odwM&ab_channel=JackedJoes
    }
}

// Functie die bijhoudt hoeveel vragenn er zijn geweest. Deze functie zorgt ervoor dat om en om de antwoorden in verschillende volgorden staan zodat de gebruiker niet doorheeft dat het bovenste antwoord bijvoorbeeld altijd het goede antwoord is.
// Daarnaast houdt deze functie ook bij wanneer de "mood" onder of boven een bepaalde hoeveelheid gaat en veranderd dan de kleur van de tekst "Boss happiness".
// Als laatste houdt deze functie bij wanneer alle vragen voorbij zijn of wanneer de bossMood helemaal vol of leeg is. Dan eindigt het spel en wordt er aangegeven of de gebruiker het gehaald heeft of niet.
function countQuestion() {
    questionNumber ++;
    console.log(questionNumber);
    console.log(moodBar.value);

    if (questionNumber%2 == 0) {
    answerButtons.style.flexDirection = ("column-reverse");
    }
    else {
    answerButtons.style.flexDirection = ("column");
    }

    if (moodBar.value < 25) {
        moodLabel.style.color = "red";
    }
    else if (moodBar.value > 75) {
        moodLabel.style.color = "green";
    }
    else {
        moodLabel.style.color = "black";
    }

    
    if (bossMood >= 100) {
        bodyElement.style.backgroundImage = "url(images/bg_good.gif)";  //* Bron: https://travelingtwogether.com/2021/01/16/5-spots-every-fan-of-the-office-must-visit-in-scranton-pa/
        pageOne.classList.add("hidden");
        gameFinished.classList.remove("hidden");
    }
    else if (bossMood <= 0) {
        bodyElement.style.backgroundImage = "url(images/bg_bad.gif)";  //* Bron: https://giphy.com/gifs/sad-crying-the-office-YLgIOmtIMUACY
        pageOne.classList.add("hidden");
        gameFinished.classList.remove("hidden");
        endText.textContent = "Oh no! You did not impress Michael and now you got fired. You can choose to play again to try and get a better ending... or to try and find some of the hidden easter eggs."
    }
    else if (questionNumber > 6) {
        bodyElement.style.backgroundImage = "url(images/bg_okay.gif)"; //* Bron: https://64.media.tumblr.com/81049a1b48e6a647f4f07906ba5b06b1/tumblr_pdg7x9VpX01xx5z6ao1_500.gifv 
        pageOne.classList.add("hidden");
        gameFinished.classList.remove("hidden");
        endText.textContent = "You made sure you didn't get fired, good job! Play again to try to get yourself a nice pay raise! Oh and to find some of the hidden easter eggs."
    }
}

// Deze functie zorgt ervoor dat een gebruiker op de "Play again" button kan klikken en dan wordt de pagina opnieuw geladen, waardoor de gebruiker dus opnieuw kan spelen.
function restartGame() {
    location.reload();
}

// Alle eventlisteners die ervoor zorgen dat buttonclicks gelezen worden en de bijbehorende functies worden uitgevoerd.
themeSongButton.addEventListener("click", toggleMusic);
startButton.addEventListener("click", startGame);

answerButtons.addEventListener("click", countQuestion)

goodAnswer.addEventListener("click", goodAnswerSelect);
okayAnswer.addEventListener("click", okayAnswerSelect);
badAnswer.addEventListener("click", badAnswerSelect);

restartButton.addEventListener("click", restartGame);