let chapter = document.getElementById("chapter");
let headerNav = document.getElementById("headerNav");
let newDiv = document.querySelector(".respNav");
let resources = document.getElementById("resources");
let alienRelationsContainer = document.getElementById("alien-relations");
let burger = document.getElementById("burger");

var buttonLeft = document.querySelector("button#left");
var buttonRight = document.querySelector("button#right");

let backgroundImage = document.querySelector(".background-image-index")

let colors = {
	green:'#278c2d',
	aqua:'#3a71a6',
	red:'#ce5263',
	white:'#efece8',
	purple:'#4b3aa6',
	yellow:'#c7af42',
	darkred:'#85395b',
	darkblue: '#060d23',
	lightpurple: '#d8a3dc',
	orange: '#e58852',
	brown: '#9a5c4c',
	grey: '#b3c5c2'
}

/*
#c7af42
#a58449
#496a4b
#364962
#63798c
#b3c5c2
#efece8
#d8a3dc
#d4629e
#85395b
#ce5263
#f18e74
#d39354
#c76652
#a44857
#9a5c4c
#784cad
#e58852
#fecc80
#8ea3e6
#3a71a6
#4b3aa6
#352959
#060d23
*/

// ============ RESOURCE'S PSEUDOELEMENTS ============

let nerds = document.querySelector("#alien-relations li:nth-of-type(1)");
let magicals = document.querySelector("#alien-relations li:nth-of-type(2)");
let agreSuS = document.querySelector("#alien-relations li:nth-of-type(3)");

let publicOp = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(1)");
let money = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(2)");
let adviser = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(3)");
let research = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(4)");
let fuel = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(5)");
let food = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(6)");

// ====================== LEAVING SITE ALERT ======================
window.addEventListener("beforeunload", function (e) {
	var confirmationMessage = "Czy na pewno chcesz opuścić stronę?";
	e.returnValue = confirmationMessage;
	return confirmationMessage;
});

window.addEventListener("unload", function () {
	console.log("Strona jest odświeżana lub opuszczana.");
});

// ==== Otwieranie repsonsywnego menu przyciskiem ====

burger.addEventListener("click", function () {
	if (resources.className == "") {
		resources.className = "open";
		alienRelationsContainer.className = "open";
		burger.className = "fa-solid fa-circle-xmark";
	} else if (resources.className == "open") {
		resources.className = "";
		alienRelationsContainer.className = "";
		burger.className = "fa-solid fa-chart-simple";
	}
});

// ============ KONTRAST I CZCIONKA ============

let font = document.querySelector("#contrast-and-font-size i:first-of-type");
let contrast = document.querySelector("#contrast-and-font-size i:nth-of-type(2)");

function fontAndContrast() {
	font.addEventListener("click", function fontChange() {
		if (font.classList.contains("bigger")) {
			font.classList.remove("bigger");
			font.classList.add("smaller");
			document.documentElement.style.setProperty("font-size", "17px");

			font.style.setProperty("color", "white");
		} else if (font.classList.contains("smaller")) {
			font.classList.remove("smaller");
			font.classList.add("bigger");
			document.documentElement.style.setProperty("font-size", "23px");

			font.style.setProperty("color", colors['green']);
		}
	})


	contrast.addEventListener("mouseout", function contrastOut() {
		let buttonLeft = document.querySelector("button#left");
		let buttonRight = document.querySelector("button#right");
		if (contrast.classList.contains("contrastON")) {
			document.documentElement.className = "contrast";
			contrast.style.setProperty("color", colors['green']);

		} else if (contrast.classList.contains("contrastOFF")) {
			document.documentElement.className = "";
			contrast.style.setProperty("color", "white");
		}
	})

	contrast.addEventListener("mouseover", function contrastHover() {
		let buttonLeft = document.querySelector("button#left");
		let buttonRight = document.querySelector("button#right");
		if (contrast.classList.contains("contrastON")) {
			document.documentElement.className = "";
			contrast.style.setProperty("color", "white");

		} else if (contrast.classList.contains("contrastOFF")) {
			document.documentElement.className = "contrast";
			contrast.style.setProperty("color", colors['green']);
		}
	})


	contrast.addEventListener("click", function contrastChange() {
		let buttonLeft = document.querySelector("button#left");
		let buttonRight = document.querySelector("button#right");
		if (contrast.classList.contains("contrastON")) {
			contrast.classList.remove("contrastON");
			document.documentElement.className = "";
			contrast.style.setProperty("color", "white");
			contrast.classList.add("contrastOFF");

		} else if (contrast.classList.contains("contrastOFF")) {
			contrast.classList.remove("contrastOFF");
			document.documentElement.className = "contrast";
			contrast.style.setProperty("color", colors['green']);
			contrast.classList.add("contrastON");
		}
	})
}

fontAndContrast();

// ============ LOADING SCREEN ============

function loadingScreen() {
	let loadingScreen = document.querySelector("#loading-screen");
	loadingScreen.style.setProperty("display", "flex");
	loadingScreen.style.setProperty("opacity", 1);
	setTimeout(function () {
		loadingScreen.style.setProperty("display", "none");
		loadingScreen.style.setProperty("opacity", 0);
	}, 3190);
}

// loadingScreen();

// ============ DISPLAYING ICONS ============

function showIcons(icon) {
	icon.style.setProperty("display", "flex");
}

// =========================================================

let middleDiv = document.querySelector("div#middleDiv");

let data = {
	chapter: 1,
	underchapter: 1,
	stats: {
		publicOpinion: 0.5,
		currency: 0.5,
		adviser: 0.5,
		research: 0.5,
		fuel: 0.5,
		food: 0.5,
		alienRelations: {
			nerds: 0.5,
			magicals: 0.5,
			agreSuS: 0.5,
		},
	},
	notimeleft: false,
	areTeethBrushed: false,
	isCoffeDrunk: false,
	isBreakfastEaten: false,
};

var colorNerds = window.getComputedStyle(nerds).getPropertyValue("--pseudoElColor");
var colorMagicals = window.getComputedStyle(magicals).getPropertyValue("--pseudoElColor");
var colorAgreSuS = window.getComputedStyle(agreSuS).getPropertyValue("--pseudoElColor");

var colorPublicOp = window.getComputedStyle(publicOp).getPropertyValue("--pseudoElColor");
var colorMoney = window.getComputedStyle(money).getPropertyValue("--pseudoElColor");

var colorAdviser = window.getComputedStyle(adviser).getPropertyValue("--pseudoElColor");
var colorResearch = window.getComputedStyle(research).getPropertyValue("--pseudoElColor");
var colorFuel = window.getComputedStyle(fuel).getPropertyValue("--pseudoElColor");
var colorFood = window.getComputedStyle(food).getPropertyValue("--pseudoElColor");


function statsChanger(element1, list) {
	function colorChanger(nerds1, magicals1, agreSuS1, pOp1, mon1, adviser1, research1, fue1, food1) {
		if (nerds1 > 0.7) {
			nerds.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (nerds1 >= 0.4 && nerds1 <= 0.7) {
			nerds.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (nerds1 > 0 && nerds1 < 0.4) {
			nerds.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (magicals1 > 0.7) {
			magicals.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (magicals1 >= 0.4 && magicals1 <= 0.7) {
			magicals.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (magicals1 > 0 && magicals1 < 0.4) {
			magicals.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (agreSuS1 > 0.7) {
			agreSuS.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (agreSuS1 >= 0.4 && agreSuS1 <= 0.7) {
			agreSuS.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (agreSuS1 > 0 && agreSuS1 < 0.4) {
			agreSuS.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (pOp1 > 0.7) {
			publicOp.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (pOp1 >= 0.4 && pOp1 <= 0.7) {
			publicOp.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (pOp1 > 0 && pOp1 < 0.4) {
			publicOp.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (mon1 > 0.7) {
			money.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (mon1 >= 0.4 && mon1 <= 0.7) {
			money.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (mon1 > 0 && mon1 < 0.4) {
			money.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (adviser1 > 0.7) {
			adviser.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (adviser1 >= 0.4 && adviser1 <= 0.7) {
			adviser.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (adviser1 > 0 && adviser1 < 0.4) {
			adviser.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (research1 > 0.7) {
			research.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (research1 >= 0.4 && research1 <= 0.7) {
			research.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (research1 > 0 && research1 < 0.4) {
			research.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (fue1 > 0.7) {
			fuel.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (fue1 >= 0.4 && fue1 <= 0.7) {
			fuel.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (fue1 > 0 && fue1 < 0.4) {
			fuel.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (food1 > 0.7) {
			food.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (food1 >= 0.4 && food1 <= 0.7) {
			food.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (food1 > 0 && food1 < 0.4) {
			food.style.setProperty("--pseudoElColor", colors["red"]);
		}
	}

	function statsFuse(nerds2, magicals2, agreSuS2, pOp2, mon2, adviser2, research2, fue2, food2) {
		if (nerds2 >= 0 && nerds2 <= 1) {
			nerds.style.setProperty("--transform", "scaleY(" + nerds2 + ")");
		} else if (nerds2 > 1) {
			nerds.style.setProperty("--transform", "scaleY(1)");
		} else {
			nerds.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (magicals2 >= 0 && magicals2 <= 1) {
			magicals.style.setProperty("--transform", "scaleY(" + magicals2 + ")");
		} else if (magicals2 > 1) {
			magicals.style.setProperty("--transform", "scaleY(1)");
		} else {
			magicals.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (agreSuS2 >= 0 && agreSuS2 <= 1) {
			agreSuS.style.setProperty("--transform", "scaleY(" + agreSuS2 + ")");
		} else if (agreSuS2 > 1) {
			agreSuS.style.setProperty("--transform", "scaleY(1)");
		} else {
			agreSuS.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (pOp2 >= 0 && pOp2 <= 1) {
			publicOp.style.setProperty("--transform", "scaleY(" + pOp2 + ")");
		} else if (pOp2 > 1) {
			publicOp.style.setProperty("--transform", "scaleY(1)");
		} else {
			publicOp.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (mon2 >= 0 && mon2 <= 1) {
			money.style.setProperty("--transform", "scaleY(" + mon2 + ")");
		} else if (mon2 > 1) {
			money.style.setProperty("--transform", "scaleY(1)");
		} else {
			money.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (adviser2 >= 0 && adviser2 <= 1) {
			adviser.style.setProperty("--transform", "scaleY(" + adviser2 + ")");
		} else if (adviser2 > 1) {
			adviser.style.setProperty("--transform", "scaleY(1)");
		} else {
			adviser.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (research2 >= 0 && research2 <= 1) {
			research.style.setProperty("--transform", "scaleY(" + research2 + ")");
		} else if (research2 > 1) {
			research.style.setProperty("--transform", "scaleY(1)");
		} else {
			research.style.setProperty("--transform", "scaleY(0)");
		}
		
		if (fue2 >= 0 && fue2 <= 1) {
			fuel.style.setProperty("--transform", "scaleY(" + fue2 + ")");
		} else if (fue2 > 1) {
			fuel.style.setProperty("--transform", "scaleY(1)");
		} else {
			fuel.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (food2 >= 0 && food2 <= 1) {
			food.style.setProperty("--transform", "scaleY(" + food2 + ")");
		} else if (food2 > 1) {
			food.style.setProperty("--transform", "scaleY(1)");
		} else {
			food.style.setProperty("--transform", "scaleY(0)");
		}
	}	

	element1.addEventListener("mouseover", function hover() {
		let ner = data.stats.alienRelations.nerds + list[0];
		let mag = data.stats.alienRelations.magicals + list[1];
		let agreS = data.stats.alienRelations.agreSuS + list[2];
		let pOp = data.stats.publicOpinion + list[3];
		let mon = data.stats.currency + list[4];
		let adv = data.stats.adviser + list[5];
		let res = data.stats.research + list[6];
		let fue = data.stats.fuel + list[7];
		let foo = data.stats.food + list[8];

		statsFuse(ner, mag, agreS, pOp, mon, adv, res, fue, foo);
		colorChanger(ner, mag, agreS, pOp, mon, adv, res, fue, foo);
	});
	
	element1.addEventListener("mouseout", function out() {
		nerds.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.nerds + ")");
		magicals.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.magicals + ")");
		agreSuS.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.agreSuS + ")");
		publicOp.style.setProperty("--transform","scaleY(" + data.stats.publicOpinion + ")");
		money.style.setProperty("--transform","scaleY(" + data.stats.currency + ")");
		adviser.style.setProperty("--transform","scaleY(" + data.stats.adviser + ")");
		research.style.setProperty("--transform","scaleY(" + data.stats.research + ")");
		fuel.style.setProperty("--transform","scaleY(" + data.stats.fuel + ")");
		food.style.setProperty("--transform","scaleY(" + data.stats.food + ")");

		console.log("!!!!" + colorPublicOp + "!!!")
		nerds.style.setProperty("--pseudoElColor", colorNerds);
		magicals.style.setProperty("--pseudoElColor", colorMagicals);
		agreSuS.style.setProperty("--pseudoElColor", colorAgreSuS);
		publicOp.style.setProperty("--pseudoElColor", colorPublicOp);
		money.style.setProperty("--pseudoElColor", colorMoney);
		adviser.style.setProperty("--pseudoElColor", colorAdviser);
		research.style.setProperty("--pseudoElColor", colorResearch);
		fuel.style.setProperty("--pseudoElColor", colorFuel);
		food.style.setProperty("--pseudoElColor", colorFood);
	});
}

nerds.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.nerds + ")");
magicals.style.setProperty("--transform", "scaleY(" + data.stats.alienRelations.magicals + ")");
agreSuS.style.setProperty("--transform", "scaleY(" + data.stats.alienRelations.agreSuS + ")");

publicOp.style.setProperty("--transform","scaleY(" + data.stats.publicOpinion + ")");
money.style.setProperty("--transform", "scaleY(" + data.stats.currency + ")");
adviser.style.setProperty("--transform", "scaleY(" + data.stats.adviser + ")");
research.style.setProperty("--transform","scaleY(" + data.stats.research + ")");
fuel.style.setProperty("--transform", "scaleY(" + data.stats.fuel + ")");
food.style.setProperty("--transform", "scaleY(" + data.stats.food + ")");

class MyEvent {
	constructor(photoPath, line, opL, opP, fL, fP, sL, sP) {
		this.photoPath = photoPath; //ex jakub.png
		this.line = line; //list of obiects (path,who, color, line)
		this.opL = opL; //string
		this.opP = opP; //string
		this.fL = fL; //function
		this.fP = fP; //function
		this.sL = sL; //list
		this.sP = sP; //list
	}
}

class MyLine {
	constructor(photoPath, who, color, text) {
		this.photoPath = photoPath;
		this.who = who;
		this.color = color;
		this.text = text;
	}
}

class Samouczek {
	constructor(element, text) {
		this.element = element;
		this.text = text;
	}
}


// ============= KLONOWANIE (USUWANIE EVENTOW) =============

function eventsRemover() {
	let buttonLeft = document.querySelector("button#left");
	let buttonRight = document.querySelector("button#right");
	buttonLeft.replaceWith(buttonLeft.cloneNode(true));
	buttonRight.replaceWith(buttonRight.cloneNode(true));
}

// =========================================================

function doTheEvent(ob) {
	middleDiv.textContent = "";

	eventsRemover();

	publicOp.style.setProperty("--transform","scaleY(" + data.stats.publicOpinion + ")");
	fuel.style.setProperty("--transform", "scaleY(" + data.stats.fuel + ")");
	money.style.setProperty("--transform","scaleY(" + data.stats.currency + ")");

	let buttonLeft = document.querySelector("button#left");
	let buttonRight = document.querySelector("button#right");

	let newBigPhoto = document.createElement("img");
	newBigPhoto.setAttribute("src", ob.photoPath);
	middleDiv.insertAdjacentElement("beforeend", newBigPhoto);
	newBigPhoto.classList.add("bigPhoto");

	ob.line.forEach((element) => {
		let whoinfo = document.createElement("div");
		whoinfo.classList.add("whoInfo");
		middleDiv.insertAdjacentElement("beforeend", whoinfo);

		let newPhoto = document.createElement("img");
		newPhoto.setAttribute("src", element.photoPath);
		whoinfo.insertAdjacentElement("beforeend", newPhoto);
		newPhoto.classList.add("linePhoto");

		let newSpanNode = document.createTextNode(element.who);
		let newSpan = document.createElement("span");
		newSpan.appendChild(newSpanNode);
		newSpan.style.color = element.color;
		newPhoto.insertAdjacentElement("afterend", newSpan);
		newSpan.classList.add("lineWho");

		let newTextNode = document.createTextNode(element.text);
		let newText = document.createElement("span");
		newText.appendChild(newTextNode);
		newSpan.insertAdjacentElement("afterend", newText);
		newText.classList.add("lineText");

		middleDiv.insertAdjacentElement("beforeend", document.createElement("br"));
	});

	buttonLeft.textContent = ob.opL;
	buttonRight.textContent = ob.opP;

	buttonLeft.addEventListener("click", ob.fL);
	buttonRight.addEventListener("click", ob.fP);

	statsChanger(buttonLeft, ob.sL);
	statsChanger(buttonRight, ob.sP);
}

let chapterNumber = document.querySelector("#chapter h1:first-of-type");
let chapterPlace = document.querySelector("#chapter h1:nth-of-type(2)");

function changeChapterPlace(x, place) {
	loadingScreen();
	let chapterText = "Etap - " + x;
	chapterNumber.textContent = chapterText;

	chapterPlace.textContent = place;
}


function gameOverFunction(gameOverClassName, cause) {
	let body = document.querySelector("body");

	body.textContent = "";
	body.style.setProperty("background-color", "black")
	body.className = gameOverClassName;
	let div = document.createElement("div");
	body.insertAdjacentElement("afterbegin", div);
	div.className = "gameOverContainer"

	let newP = document.createElement("p");
	let caseNode = document.createTextNode(cause);
	newP.appendChild(caseNode);
	div.insertAdjacentElement("afterbegin", newP);
	newP.className = "gameOverP";

	let playAgain = document.createElement("a");
	let buttonNode = document.createTextNode("Zagraj ponownie");
	playAgain.setAttribute("href", "samouczek.html")
	playAgain.appendChild(buttonNode);
	playAgain.className = "playAgain"
	div.insertAdjacentElement("beforeend", playAgain);
}

let samouczekNext = document.getElementById("samouczek-next");

let leftDiv = document.getElementById("leftDiv");
let rightDiv = document.getElementById("rightDiv")

function tutorialBox(ob) {
	let samouczekDiv = document.getElementById("samouczek-box");
	ob.element.classList.add("samouczek")
	samouczekDiv.textContent = ob.text;
}

// ---------------- SAMOUCZEK ---------------- 
changeChapterPlace(1, "Samouczek");

let s1 = new Samouczek (
	leftDiv,
	"Wszystkie omawiane elementy będą oznaczane czerwoną ramką. Teraz oznaczony jest przycisk lewy od decyzji. Przytrzymaj go aby sprawdzić, jak zmienią się statystyki."
)

let s2 = new Samouczek (
	rightDiv,
	"Przycisk do podjęcia decyzji. Przytrzymaj go aby sprawdzić, jak zmienią się statystyki."
)

let s3 = new Samouczek (
	money,
	"Przechodzimy do statystyk. Jeżeli korzystasz z telefonu/tabletu, kliknij ikonke trzech pasków w prawym górnym rogu ekranu. Jeżeli korzystasz z komputera, spójrz w górę. Zobaczysz tam ile masz aktualnie pieniędzy."
)

let s4 = new Samouczek (
	publicOp,
	"Kolejną oznaczoną ikoną jest Twoja opinia społeczna."
)

let s5 = new Samouczek (
	adviser,
	"Możesz zauważyć, że kolejna oznaczona ikona właśnie się pojawiła. Z czasem będzie się ich pojawiało coraz więcej. Ta statystyka oznacza relację z Twoim doradcą."
)

let s6 = new Samouczek (
	font,
	"Przycisk od zmiany rozmiaru czcionki na gry."
)

let s7 = new Samouczek (
	contrast,
	"Przycisk od zmiany zmiany kontrastu."
)

let s8 = new Samouczek (
	chapterNumber,
	"Numer Twojego aktualnego rozdziału gry."
)

let s9 = new Samouczek (
	chapterPlace,
	"Lokalizacja głównego bohatera (Jakuba)."
)

let s10 = new Samouczek (
	samouczekNext,
	"To tyle, aby zacząć główną część gry, kliknij przycisk 'Dalej'"
)

let sArray = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10]

let test1 = new MyEvent(
	"bogosBinted/jakub.png", //budzik.png
	[
		new MyLine(
			"bogosBinted/jakub.png", "Jakub", colors['green'],
			"Ooh, co to... co ty było? Co to niby miało... JUŻ 8, ZASPAŁEM! Ale ten sen..."
		),
	],
	"O co chodziło z tym snem?",
	"Zaraz się spóźnię!",
	function () {
	},

	function () {
	},

	[0, 0, 0, -0.3, -0.3, 0, 0, 0, 0],
	[0, 0, 0, -0.1, 0.4, 0, 0, 0, 0]
);
let samouczekProgress = 0;
tutorialBox(s1);
doTheEvent(test1);

samouczekNext.addEventListener("click", function () {
	sArray[samouczekProgress].element.classList.remove("samouczek");
	samouczekProgress++;
	tutorialBox(sArray[samouczekProgress]);
	if (samouczekProgress == 4) {
		showIcons(adviser);
	}
	if (samouczekProgress == 9) {
		samouczekNext.textContent = "";
		let link = document.createElement("a");
		let node = document.createTextNode("Przejdź do gry");
		link.style.setProperty("color", "black");
		link.setAttribute("href", "main.html");
		link.appendChild(node);
		samouczekNext.insertAdjacentElement("afterbegin", link);
	}
})
