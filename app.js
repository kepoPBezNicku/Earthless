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
	green:'#278c2d', //Jakub
	aqua:'#3a71a6', //Marcin
	red:'#ce5263', //Becia
	white:'#efece8', //Unknown
	purple:'#4b3aa6', // Ilia
	yellow:'#c7af42', //Mirek
	darkred:'#85395b', //Albert
	darkblue: '#060d23', //
	lightpurple: '#d8a3dc', //
	orange: '#e58852', // Krzychu
	brown: '#9a5c4c', //
	grey: '#b3c5c2' //
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

function fontAndContrast() {
	let font = document.querySelector("#contrast-and-font-size i:first-of-type");
	let contrast = document.querySelector("#contrast-and-font-size i:nth-of-type(2)");

	font.addEventListener("click", function fontChange() {
		if (font.classList.contains("bigger")) {
			font.classList.remove("bigger");
			font.classList.add("smaller");
			document.documentElement.style.setProperty("font-size", "17px");

			font.style.setProperty("color", colors["white"]);
		} else if (font.classList.contains("smaller")) {
			font.classList.remove("smaller");
			font.classList.add("bigger");
			document.documentElement.style.setProperty("font-size", "23px");

			font.style.setProperty("color", colors["green"]);
		}
	})


	contrast.addEventListener("mouseout", function contrastOut() {
		let buttonLeft = document.querySelector("button#left");
		let buttonRight = document.querySelector("button#right");
		if (contrast.classList.contains("contrastON")) {
			document.documentElement.className = "contrast";
			contrast.style.setProperty("color", colors["green"]);

		} else if (contrast.classList.contains("contrastOFF")) {
			document.documentElement.className = "";
			contrast.style.setProperty("color", colors["white"]);
		}
	})

	contrast.addEventListener("mouseover", function contrastHover() {
		let buttonLeft = document.querySelector("button#left");
		let buttonRight = document.querySelector("button#right");
		if (contrast.classList.contains("contrastON")) {
			document.documentElement.className = "";
			contrast.style.setProperty("color", colors["white"]);

		} else if (contrast.classList.contains("contrastOFF")) {
			document.documentElement.className = "contrast";
			contrast.style.setProperty("color", colors["green"]);
		}
	})


	contrast.addEventListener("click", function contrastChange() {
		let buttonLeft = document.querySelector("button#left");
		let buttonRight = document.querySelector("button#right");
		if (contrast.classList.contains("contrastON")) {
			contrast.classList.remove("contrastON");
			document.documentElement.className = "";
			contrast.style.setProperty("color", colors["white"]);
			contrast.classList.add("contrastOFF");

		} else if (contrast.classList.contains("contrastOFF")) {
			contrast.classList.remove("contrastOFF");
			document.documentElement.className = "contrast";
			contrast.style.setProperty("color", colors["green"]);
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

function showIcons(icon, caption) {
	icon.style.setProperty("display", "flex");
	let info = document.createElement("span");
	info.textContent = caption;
	info.classList.add("iconCaption");
	icon.insertAdjacentElement("beforeend", info);

	setTimeout(function () {
		info.classList.add("closing");
	}, 5000);

	setTimeout(function () {
		info.classList.add("closed");
	}, 6000)
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



	element1.addEventListener("click", function change() {
		data.stats.alienRelations.nerds += list[0];
		data.stats.alienRelations.magicals += list[1];
		data.stats.alienRelations.agreSuS += list[2];
		data.stats.publicOpinion += list[3];
		data.stats.currency += list[4];
		data.stats.adviser += list[5];
		data.stats.research += list[6];
		data.stats.fuel += list[7];
		data.stats.food += list[8];

		let ner = data.stats.alienRelations.nerds;
		let mag = data.stats.alienRelations.magicals;
		let agreS = data.stats.alienRelations.agreSuS;
		let pOp = data.stats.publicOpinion;
		let mon = data.stats.currency;
		let adv = data.stats.adviser;
		let res = data.stats.research;
		let fue = data.stats.fuel;
		let foo = data.stats.food;

		console.log(mon)

		if (data.stats.alienRelations.nerds <= 0) {
			data.stats.alienRelations.nerds = 0;
			gameOverFunction("gameOverDeath", "Twoje relacje z cywilizacją nerdów spadły do zera.");
		} else if (data.stats.alienRelations.nerds > 1) {
			data.stats.alienRelations.nerdsn = 1;
		}

		if (data.stats.alienRelations.magicals <= 0) {
			data.stats.alienRelations.magicals = 0;
			gameOverFunction("gameOverDeath", "Twoje relacje z magami nerdów spadły do zera.");
		} else if (data.stats.alienRelations.magicals > 1) {
			data.stats.alienRelations.magicals = 1;
		}

		if (data.stats.alienRelations.agreSuS <= 0) {
			data.stats.alienRelations.agreSuS = 0;
			gameOverFunction("gameOverDeath", "Twoje relacje z cywilizacją agresorów spadły	 do zera.");
		} else if (data.stats.alienRelations.agreSuS > 1) {
			data.stats.alienRelations.agreSuS = 1;
		}

		if (data.stats.publicOpinion <= 0) {
			data.stats.publicOpinion = 0;
			gameOverFunction("gameOver", "Obywatele cię znienawidzili, nie potrafisz być przywódcą! Twoja głowa została sprzedana na wolnym rynku.");
		} else if (data.stats.publicOpinion > 1) {
			data.stats.publicOpinion = 1;
		}

		if (data.stats.currency <= 0) {
			data.stats.currency = 0;
			gameOverFunction("gameOver", "Zbankrutowałeś.");
		} else if (data.stats.currency > 1) {
			data.stats.currency = 1;
		}

		if (data.stats.adviser <= 0) {
			data.stats.adviser = 0;
			gameOverFunction("gameOver", "Twoja reputacja spadła do zera.");
		} else if (data.stats.adviser > 1) {
			data.stats.adviser = 1;
		}

		if (data.stats.research <= 0) {
			data.stats.research = 0;
			gameOverFunction("gameOver", "Za mały poziom badań.");
		} else if (data.stats.research > 1) {
			data.stats.research = 1;
		}
		
		if (data.stats.fuel <= 0) {
			data.stats.fuel = 0;
			gameOverFunction("gameOver", "Za mały poziom paliwa.");
		} else if (data.stats.fuel > 1) {
			data.stats.fuel = 1;
		}

		if (data.stats.food <= 0) {
			data.stats.food = 0;
			gameOverFunction("gameOverDeath", "Śmierć spowodowana brakiem jedzenia.");
		} else if (data.stats.food > 1) {
			data.stats.food = 1;
		}

		nerds.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.nerds + ")");
		magicals.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.magicals + ")");
		agreSuS.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.agreSuS + ")");
		publicOp.style.setProperty("--transform","scaleY(" + data.stats.publicOpinion + ")");
		money.style.setProperty("--transform","scaleY(" + data.stats.currency + ")");
		adviser.style.setProperty("--transform","scaleY(" + data.stats.adviser + ")");
		research.style.setProperty("--transform","scaleY(" + data.stats.research + ")");
		fuel.style.setProperty("--transform","scaleY(" + data.stats.fuel + ")");
		food.style.setProperty("--transform","scaleY(" + data.stats.food + ")");
		
		statsFuse(data.stats.alienRelations.nerds,
				data.stats.alienRelations.magicals,
				data.stats.alienRelations.agreSuS,
				data.stats.publicOpinion,
				data.stats.currency,
				data.stats.adviser,
				data.stats.research,
				data.stats.fuel,
				data.stats.food);

		colorChanger(ner, mag, agreS, pOp, mon, adv, res, fue, foo);


		colorNerds = window.getComputedStyle(nerds).getPropertyValue("--pseudoElColor");
		colorMagicals = window.getComputedStyle(magicals).getPropertyValue("--pseudoElColor");
		colorAgreSuS = window.getComputedStyle(agreSuS).getPropertyValue("--pseudoElColor");
	
		colorPublicOp = window.getComputedStyle(publicOp).getPropertyValue("--pseudoElColor");
		colorMoney = window.getComputedStyle(money).getPropertyValue("--pseudoElColor");

		colorAdviser = window.getComputedStyle(adviser).getPropertyValue("--pseudoElColor");
		colorResearch = window.getComputedStyle(research).getPropertyValue("--pseudoElColor");
		colorFuel = window.getComputedStyle(fuel).getPropertyValue("--pseudoElColor");
		colorFood = window.getComputedStyle(food).getPropertyValue("--pseudoElColor");

		// ale pierdol sie

		//naprawde
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

function changeChapterPlace(x, place) {
	loadingScreen();
	let chapterNumber = document.querySelector("#chapter h1:first-of-type");
	let chapterPlace = document.querySelector("#chapter h1:nth-of-type(2)");

	let chapterText = "Etap - " + x;
	chapterNumber.textContent = chapterText;

	chapterPlace.textContent = place;
}


function gameOverFunction(gameOverClassName, cause) {
	let body = document.querySelector("body");

	body.textContent = "";
	body.style.setProperty("background-color", "black");
	body.style.setProperty("background-image", "url()");
	body.className = gameOverClassName;
	setTimeout(function() {
		body.style.setProperty("background-image", "url(bogosBinted/gameOver.png)");

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
		playAgain.setAttribute("href", "main.html");
		playAgain.appendChild(buttonNode);
		playAgain.className = "playAgain"
		div.insertAdjacentElement("beforeend", playAgain);
		body.style.setProperty("opacity", 1)
	}, 1000)
}

//==================== CHAPTER 1 ====================
changeChapterPlace(1, "Dom Jakuba");
//===== Underchapter 1 =====

//wstawić jakiś sen (insp. Adamem Mickiewiczem XDDDD)
let c1u1e1 = new MyEvent(
	"bogosBinted/jakub.png", //budzik.png
	[
		new MyLine(
			"bogosBinted/jakub.png", "Jakub", colors["green"],
			"Ooh, co to... co to było? Co to niby miało... JUŻ 8, ZASPAŁEM! Ale ten sen..."
		),
	],
	"O co chodziło z tym snem?",
	"Zaraz się spóźnię!",
	function () {
		doTheEvent(c1u1e2v1);
	},

	function () {
		doTheEvent(c1u1e2v2);
	},

	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u1e2v1 = new MyEvent(
	"bogosBinted/chmurka.png",
	[
		new MyLine("bogosBinted/jakub.png", "Jakub", colors["green"], "Testowy tekst 1"),
		new MyLine("bogosBinted/jakub.png", "bukaJ", colors["red"], "Testowy tekst 2"),
	],
	"Zaraz się spóźnię!",
	"Nie mam czasu, muszę się zbierać",
	function () {
		data.notimeleft = true;

		doTheEvent(c1u1e2v2);
	},
	function () {
		data.notimeleft = true;

		doTheEvent(c1u1e2v2);
	},

	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]

	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// !!!!!!!!! DO ZMIANY TE STATY (ALIENRELATIONS I RESZTA NIE SA WIDOCZNE DLA GRACZA) !!!!!!!!!
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
);

let c1u1e2v2 = new MyEvent(
	"bogosBinted/jakub.png", //budzik.png
	[
		new MyLine(
			"bogosBinted/jakub.png", "Jakub", colors["green"],
			"Na dzisiejszym wywiadzie muszę się dobrze prezentować! Ale mogę nie zdążyć ze wszystkim."
		),
	],
	"Wypij kawę",
	"Wymyj zęby",
	function () {
		data.isCoffeDrunk = true;
		if (data.notimeleft == true) {
			data.stats.publicOpinion-=.05;
			doTheEvent(c1u1e3v3);}
		else doTheEvent(c1u1e3v1);
	},
	function () {
		data.areTeethBrushed = true;
		if (data.notimeleft == true) doTheEvent(c1u1e3v4);
		else doTheEvent(c1u1e3v2);
	},

	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u1e3v1 = new MyEvent(
	"bogosBinted/jakub.png", //kawa.png
	[
		new MyLine(
			"bogosBinted/jakub.png","Jakub", colors["green"],
			"Dzień bez kawy to dzień stracony! Dobra, na szczęscie zostało mi trochę czasu na..."
		),
	],
	"Wymycie zębów",
	"Szbykie śniadanie",
	function () {
		data.areTeethBrushed = true;

		doTheEvent(c1u1e3v4);
	},
	function () {
		data.isBreakfastEaten = true;
		data.stats.publicOpinion-=0.05;

		doTheEvent(c1u1e4v1);
	},

	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u1e3v2 = new MyEvent(
	"bogosBinted/jakub.png", //zeby.png
	[
		new MyLine(
			"bogosBinted/jakub.png","Jakub",colors["green"],
			"No, i takie ząbki ma człowiek sukcesu :DD teraz zostało mi jeszcze trochę czasu żeby .."
		),
	],
	"Zjeść śniadanie",
	"Wypić kawę",
	function () {
		data.isBreakfastEaten = true;

		doTheEvent(c1u1e4v1);
	},
	function () {
		data.isCoffeDrunk = true;

		doTheEvent(c1u1e3v3);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u1e3v3 = new MyEvent(
	"bogosBinted/jakub.png", //kawa.png
	[
		new MyLine(
			"bogosBinted/jakub.png","Jakub",colors["green"],
			"Dzień bez kawy to dzień stracony! No ale już nic innego nie zdążę zrobić, pójdę złapać taxi."
		),
	],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać",
	function () {
		doTheEvent(c1u1e5v1);
	},
	function () {
		doTheEvent(c1u1e5v1);
	},
	[0, 0, 0, 0, -0.05, 0, 0, 0, 0],
	[0, 0, 0, 0, -0.15, 0, 0, 0, 0]
);

let c1u1e3v4 = new MyEvent(
	"bogosBinted/jakub.png", //zeby,png
	[
		new MyLine(
			"bogosBinted/jakub.png","Jakub",colors["green"],
			"No, i takie ząbki ma człowiek sukcesu :DD Dobra, dość tego gapienia się w lustro, lepiej zamówię taxi."
		),
	],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać",
	function () {
		doTheEvent(c1u1e5v1);
	},
	function () {
		doTheEvent(c1u1e5v1);
	},
	[0, 0, 0, 0, -0.05, 0, 0, 0, 0],
	[0, 0, 0, 0, -0.15, 0, 0, 0, 0]
);

let c1u1e4v1 = new MyEvent(
	"bogosBinted/jakub.png", //jedzenie.png
	[
		new MyLine(
			"bogosBinted/jakub.png","Jakub",colors["green"],
			"Dobra, najadłem się, teraz lece zamówić taxi. "
		),
	],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać",
	function () {
		doTheEvent(c1u1e5v1);
	},
	function () {
		doTheEvent(c1u1e5v1);
	},
	[0, 0, 0, 0, -0.05, 0, 0, 0, 0],
	[0, 0, 0, 0, -0.15, 0, 0, 0, 0]
);

let c1u1e5v1 = new MyEvent(
	"bogosBinted/jakub.png", //telefon.png
	[
		new MyLine(
			"bogosBinted/jakub.png","Jakub",colors["green"],
			"Zaraz powinna być, w tym czasie może..."
		),
	],
	"Zobaczę co się dzieje na Y",
	"Po prostu poczekam w samotności, lepiej odpocznę przed wywiadem",
	function () {
		doTheEvent(c1u1e6);
	},
	function () {
		doTheEvent(c1u1e7);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u1e6 = new MyEvent(
	"bogosBinted/Y.png", //y.png
	[
		new MyLine(
			"bogosBinted/noPfpUser.png","SkibidiEdge2k13",colors["white"],
			"Halo?? Dziś jest prima aprilis czy ja o czymś nie wiem???"
		),
		new MyLine(
			"bogosBinted/noPfpUser.png","ArchUserUWU",colors["grey"],
			"Myślicie że ten wyciek był prawdziwy? Przecież by nam powiedzieli o czymś takim..."
		),
		new MyLine(
			"bogosBinted/noPfpUser.png","NwordEnjoyer",colors["white"],
			"No to zaczynamy szturm foliarzy XDDD nie ma szans że to prawda, pewnie jakieś AI"
		),
	],
	"Przewiń dalej",
	"Wyłącz telefon",
	function () {
		doTheEvent(c1u1e7);
	},
	function () {
		doTheEvent(c1u1e7);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u1e7 = new MyEvent(
	"bogosBinted/taxi.png",
	[
		new MyLine(
			"bogosBinted/mirek.png","Pan Mirek",colors["yellow"],
			"Długo będzie jeszcze tam pan stał? Ja mam inne kursy!"
		),
	],
	"O, to już? Szybki pan jest!",
	"Ale spokojnie, gdzie się panu tak śpieszy?",
	function () {
		showIcons(adviser, "Relacja z doradcą");
		doTheEvent(c1u1e8);
	},
	function () {
		showIcons(adviser, "Relacja z doradcą");
		doTheEvent(c1u1e8);
	},
	[0, 0, 0, 0.1, 0, 0, 0, 0, 0],
	[0, 0, 0, -0.1, 0, 0, 0, 0, 0]
);

let c1u1e8 = new MyEvent(
	"bogosBinted/mirek.png",
	[
		new MyLine(
			"bogosBinted/mirek.png","Pan Mirek",colors["yellow"],
			"Widział pan ten filmik z tym jakimś szefem ONZ? Mówił, że niby lecimy w kosmos ha! Większej głupoty nie słyszałem."
		),
		new MyLine(
			"bogosBinted/jakub.png","Jakub",colors["green"],
			"Czekają nas ciekawe czasy, bardzo ciekawe... ale jedźmy już, czeka na mnie mój doradca"
		),
	],
	"Jedźmy pod siedzibę radio PDF FM.",
	"Ruszajmy pod radio PDF FM",
	function () {
		changeChapterPlace(1, "PDF FM");
		doTheEvent(c1u2e1);
	},
	function () {
		changeChapterPlace(1, "PDF FM");
		doTheEvent(c1u2e1);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

//=====Underchapter 2=====

let c1u2e1 = new MyEvent(
	"bogosBinted/marcin.png", //marcin.png
	[
		new MyLine(
			"bogosBinted/marcin.png","Marcin",colors["aqua"], //marcin.png
			'... po czym powiesz "również dziekuję, miłego dnia", uśmiechniesz się i wyjdziesz ze studia. Wszystko jasne?'
		),
		new MyLine(
			"bogosBinted/jakub.png","Jakub",colors["green"],
			"Raczej tak... "
		),
	],
	"ale co jak zapyta o Operację Earthless?",
	"wszystko jasne.",
	function () {
		//hiddenStats

		doTheEvent(c1u2e2v1);
	},
	function () {
		doTheEvent(c1u2e2v2);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u2e2v1 = new MyEvent(
	"bogosBinted/marcin.png", //marcin.png
	[
		new MyLine(
			"bogosBinted/marcin.png","Marcin",colors["aqua"], //marcin.png
			"Słuchaj, tu jeszcze nikt tam niczego nie potwierdził opinii publicznej, po prostu unikaj tematu. Jeszcze wezmą nas za ludzi, którzy wierzą we wszystko co jest w internecie."
		),
	],
	"Dobra, będę go unikał",
	"Ludziom należy się prawda!",
	function () {
		doTheEvent(c1u2e2v2);
	},
	function () {
		doTheEvent(c1u2e3v1);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, -0.1, 0, 0, 0]
);

let c1u2e2v2 = new MyEvent(
	"bogosBinted/chmurka.png",
	[
		new MyLine(
			"bogosBinted/jakub.png","Jakub",colors["green"],
			"Jutro wybory, przed nami globalny kryzys, a ja wciąż nie wiem co mam o tym powiedzieć ludziom!"
		),
		new MyLine(
			"bogosBinted/jakub.png","Jakub",colors["green"],
			"To najbardziej stresujący dzień mojego życia, nie wiem jak bym sobie poradził bez mojego doradcy Marcina Kwiatkowskiego. Poznałem go na początku tej przygody i jest to jedyna osoba której ufam w tym kłamliwym politycznym świecie."
		),
	],
	"Wróc do rozmowy",
	"Wróć do rozmowy",
	function () {
		doTheEvent(c1u2e4v1);
	},
	function () {
		doTheEvent(c1u2e4v1);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u2e3v1 = new MyEvent(
	"bogosBinted/marcin.png",
	[
		new MyLine(
			"bogosBinted/marcin.png","Marcin",colors["aqua"],
			"Stary, ty masz wygrać wybory a nie być jakimś poszukiwaczem prawdy i sprawiedliwości. To jest zły pomysł, ale zrobisz jak uważasz."
		),
	],
	"A żebyś wiedział że zrobię!",
	"Jeszcze się zastanowię",
	function () {
		doTheEvent(c1u2e2v2);
	},
	function () {
		doTheEvent(c1u2e2v2);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u2e4v1 = new MyEvent(
	"bogosBinted/jakub.png", //glosnik.png
	[
		new MyLine(
			"bogosBinted/jakub.png","*młody męski głos*","orange", //nopfp.png
			"Zapraszamy pana Jakuba B do studia. Wchodzimy za 2 minuty!"
		),
	],
	"Dzięki że przyszedłeś, a teraz życz mi powodzenia. Cześć!",
	"Lecę, widzimy się za 20 minut",
	function () {
		doTheEvent(c1u2e5v1);
	},
	function () {
		doTheEvent(c1u2e5v1);
	},
	[0, 0, 0, 0, 0, 0.1, 0, 0, 0],
	[0, 0, 0, 0, 0, -0.05, 0, 0, 0]
);

let c1u2e5v1 = new MyEvent(
	"bogosBinted/radio.png", //radio.png
	[
		new MyLine(
			"bogosBinted/becia.png","*wysoka kobieta ubrana na czerwono*",colors["red"], //becia.png
			"Cześć gotowy? Za 15 sekund wchodzimy."
		),
		new MyLine(
			"bogosBinted/jakub.png","Jakub",colors["green"],
			"Tak odrazu? Myślałem że jeszcze zostało trochę cza..."
		),
		new MyLine(
			"bogosBinted/becia.png","*wysoka kobieta ubrana na czerwono*",colors["red"],
			"Trzy, dwa, jeden... Witamy w wywiadzie dnia radia PDF FM, jest piątek godzina 10, z tej strony Beata Kowalczyk a moim dzisiejszym gościem jest pan Kuba Bukaj, kandydat na prezydent RP 2045. Witam serdecznie! Pojutrze ważny dzień, prawda?"
		),
		new MyLine(
			"bogosBinted/jakub.png","Jakub",colors["green"],
			"Również witam, tak, z pewnością jeden z najważniejszych dni dla współczesnej Polski. Wybory prezydenckie napewno znacząco wpłyną na losy naszego państwa"
		),
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Dobrze, zanim jeszcze przejdziemy do sedna naszego spotkania... ponoć miał pan z wosu 2 na światectwie!"
		),
	],
	"To prawda, przyznaję, że w tym wieku nie bardzo uważałem na oceny. Najważniejsze że zdałem, prawda? Haha",
	"To tylko plotka, w szkole byłem piątkowym uczniem, a tym bardziej z wosu!",
	function () {
		doTheEvent(c1u2e6v1);
	},
	function () {
		doTheEvent(c1u2e6v1);
	},
	[0, 0, 0, 0.1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0.05, 0, 0, 0, 0, 0]
);

let c1u2e6v1 = new MyEvent(
	"bogosBinted/radio.png", //radio.png
	[
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Pytam, bo każdy prezydent powinien znać podstawowe struktury organizacji państwa, dlatego zorganizowałam dla Pana test."
		),
		new MyLine(
			"bogosBinted/jakub.png", "Jakub", colors["green"],
			"Jaki test?"),
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Zadam kilka prostych pytań z wiedzy o społeczeństwie, Zaczynamy!"
		),
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Pytanie pierwsze: Ilu senatorów liczy senat?"
		),
	],
	"460",
	"100",
	function () {
		data.stats.publicOpinion-=.1
		doTheEvent(c1u2e7v1);
	},
	function () {
		data.stats.publicOpinion+=.05
		doTheEvent(c1u2e7v2);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u2e7v1 = new MyEvent(
	"bogosBinted/radio.png",
	[
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Źle! Senat liczy 100 senatorów, możliwe, że pomyliło się panu z liczbą posłów w sejmie, która wynosi 460. Lecimy dalej."
		),
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Pytanie drugie: Czym jest zgromadzenie narodowe?"
		),
	],
	"Wspólną obradą sejmu i senatu",
	"Wspólną obradą senatu i prezydenta",
	function () {
		data.stats.publicOpinion+=.05
		doTheEvent(c1u2e8v1);
	},
	function () {
		data.stats.publicOpinion-=.1
		doTheEvent(c1u2e8v2);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u2e7v2 = new MyEvent(
	"bogosBinted/radio.png",
	[
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Dobrze! Senat liczy 100 senatorów, natomiast sejm liczy 460 posłów. Lecimy dalej."
		),
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Pytanie drugie: Czym jest zgromadzenie narodowe?"
		),
	],
	"Wspólną obradą sejmu i senatu",
	"Wspólną obradą senatu i prezydenta",
	function () {
		data.stats.publicOpinion+=.05
		doTheEvent(c1u2e8v1);
	},
	function () {
		data.stats.publicOpinion-=.1
		doTheEvent(c1u2e8v2);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u2e8v1 = new MyEvent(
	"bogosBinted/radio.png",
	[
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Poprawna odpowiedź! Jest zwoływane np podczas odebranie przysięgi nowo wybranego prezydenta."
		),
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Ostatnie pytanie: Ile lat trzeba mieć żeby zostać posłem?"
		),
	],
	"30 Lat",
	"21 Lat",
	function () {
		data.stats.publicOpinion-=.1
		doTheEvent(c1u2e9v1);
	},
	function () {
		data.stats.publicOpinion+=.05
		doTheEvent(c1u2e9v2);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u2e8v2 = new MyEvent(
	"bogosBinted/radio.png",
	[
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Niestesty, zła odpowiedź. Zgromdzenie narodowe jest zebraniem senatu nie z prezydentem a z sejmem. Jest zwoływane np. podczas odebranie przysięgi nowo wybranego prezydenta."
			),
		new MyLine(
			"bogosBinted/becia.png","Becia",colors["red"],
			"Ostatnie pytanie: Ile lat trzeba mieć żeby zostać posłem?"
			),
	],
	"30 Lat",
	"21 Lat",
	function () {
		data.stats.publicOpinion-=.1
		doTheEvent(c1u2e9v1);
	},
	function () {
		data.stats.publicOpinion+=.05
		doTheEvent(c1u2e9v2);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u2e9v1 = new MyEvent(
	"bogosBinted/chmurka.png",
	[
		new MyLine(
			"bogosBinted/becia.png", "Becia", colors["red"],
			"No nie, żeby zostać posłem wystarczy ukończyć 21 rok życia i do tego mieć prawa wyborcze. Dobrze, skoro pytania mamy za sobą, możemy przejść do właciwej częsci wywiadu. Jak pan się przygoto..."
		),
	],
	"*podejdź do wywiadu na poważnie, nie unikaj trudnych pytań (wymaga skupienia)*",
	"*podejdź do wywiadu na spokojnie, z humorem, unikaj trudnych pytań*",
	function () {
		if(data.isCoffeDrunk||data.isBreakfastEaten){
			data.stats.publicOpinion+=.3
			doTheEvent(c1u2e10v1);
		}else{
			data.stats.publicOpinion-=.2
			doTheEvent(c1u2e10v2);
		}
		
		
	},
	function () {
		if(data.isCoffeDrunk||data.isBreakfastEaten){
			data.stats.publicOpinion+=.1
			doTheEvent(c1u2e10v3);
		}else{
			data.stats.publicOpinion-=.1
			doTheEvent(c1u2e10v4);
		}
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u2e9v2 = new MyEvent(
	"bogosBinted/radio.png",
	[
		new MyLine(
			"bogosBinted/becia.png", "Becia", colors["red"],
			"Zgadza się! Wystaczy ukończyć 21 rok życia i mieć prawa wyborcze. Dobrze, skoro pytania mamy za sobą, możemy przejść do właciwej częsci wywiadu. Jak pan się przygoto..."
		),
	],
	"*podejdź do wywiadu na poważnie, nie unikaj trudnych pytań (wymaga skupienia)*",
	"*podejdź do wywiadu na spokojnie, z humorem, unikaj trudnych pytań*",
	function () {
		if(data.isCoffeDrunk||data.isBreakfastEaten){
			data.stats.publicOpinion+=.3
			doTheEvent(c1u2e10v1);
		}else{
			data.stats.publicOpinion-=.2
			doTheEvent(c1u2e10v2);
		}
	},
	function () {
		if(data.isCoffeDrunk||data.isBreakfastEaten){
			data.stats.publicOpinion+=.1
			doTheEvent(c1u2e10v3);
		}else{
			data.stats.publicOpinion-=.1
			doTheEvent(c1u2e10v4);
		}
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
);

let c1u2e10v1 = new MyEvent(
	"bogosBinted/radio.png",
	[new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"Rozmowa bardzo mi się udała! Dzięki temu, że rano nabrałem energii, bardzo sprytnie odpowiadałem na pytania Beaty. To napewno pomoże mi w kampanii."
	)],
	"Kontynuuj wywiad",
	"Kontynuuj wywiad",
	function (){
		doTheEvent(c1u2e11v1)
	},
	function (){
		doTheEvent(c1u2e11v1)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c1u2e10v2 = new MyEvent(
	"bogosBinted/radio.png",
	[new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"Dałem z siebie wszystko, ale przez to, że rano nie miałem czasu ani na śniadanie ani na kawę, nie byłem dokońca skupiony. Powiedziałem kilka głupich rzeczy, a wyborcy mogą mi tego nie wybaczyć."
	)],
	"Kontynuuj wywiad",
	"Kontynuuj wywiad",
	function (){
		doTheEvent(c1u2e11v1)
	},
	function (){
		doTheEvent(c1u2e11v1)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c1u2e10v3 = new MyEvent(
	"bogosBinted/jakub.png",
	[new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"Starałem się nie wychodzić za bardzo przed szereg i wyszło mi to całkiem dobrze. Dzięki temu, że rano nabrałem siły na cały dzień udało mi się zachować skupienie i zimną krew. To wyjdzie mi na plus w kampanii."
	)],
	"Kontynuuj wywiad",
	"Kontynuuj wywiad",
	function (){
		doTheEvent(c1u2e11v1)
	},
	function (){
		doTheEvent(c1u2e11v1)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c1u2e10v4 = new MyEvent(
	"bogosBinted/radio.png",
	[new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"], //wodą się nie nawodnisz debilu ~ Wojciech 2024
		"Dziś rano nie miałem czasu nabrać siły na ten dzień, więc postanowiłem starać się unikać niewygodnych pytań co mimo wszystko nie zawsze mi wychodziło. Na szczęście nic aż tak głupiego nie powiedziałem w sumie to nie wyszło aż tak źle"
	)],
	"Kontynuuj wywiad",
	"Kontynuuj wywiad",
	function (){
		doTheEvent(c1u2e11v1)
	},
	function (){
		doTheEvent(c1u2e11v1)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c1u2e11v1 = new MyEvent(
	"bogosBinted/radio.png",
	[new MyLine(
		"bogosBinted/becia.png", "Becia", colors["red"],
		"Właśnie dostaliśmy wiadomość z ostatniej chwili! Sekretarz generalny ONZ potwierdziił rzetelność nagrania które było uważane za podrobione sztuczę inteligencją. Panie Jakubie, co teraz? Czy jesteśmy na to gotowi?"
	)],
	"Jak najbardziej, program Earthless...",
	"Myślę, że napewno sobię poradzimy.",
	function (){
		doTheEvent(c1u2e12v1)
	},
	function (){
		doTheEvent(c1u2e12v2)
	},
	[0, 0, 0, .2, 0, -.2, 0, 0, 0],
	[0, 0, 0, -.2, 0, .2, 0, 0, 0]
)

let c1u2e12v1 = new MyEvent(
	"bogosBinted/radio.png", //3
	[new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"Jak najbardziej, program Earthless jest odpowiedzią na ten problem. We wspłpracy z najlepszymi Polskimi naukowcami stworzyliśmy plan emigracji wszystkich Polaków w kosmos. Mamy ambitnych ludzi, nowoczesne narzędzia i dopracowany plan. Teraz jedyne czego potrzebuję żeby go wprowadzić w życie to mnie jako prezydenta. To jest jedyny sposób na zapewnienie bezpieczeństwia Polakom."
	),new MyLine(
		"bogosBinted/becia.png", "Becia", colors["red"],
		"A to był wywiad dnia radia PDF FM! Panie Jakbie, dziękuję bardzo za rozmowę."
	)],
	"Również dziękuję, miłego dnia.",
	"Dzięki wielkie, pamiętajcie Bukaj2060!",
	function (){
		doTheEvent(c1u2e13v1)
	},
	function (){
		doTheEvent(c1u2e13v1)
	},
	[0, 0, 0, 0, 0, .05, 0, 0, 0], 
	[0, 0, 0, .05, 0, -.1, 0, 0, 0] 
)

let c1u2e12v2 = new MyEvent(
	"bogosBinted/radio.png", 
	[new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"Muszę przyznać, że tak jak większość uważaliśmy ten film za nieprawdziwy. W tej sytuacji jedynie co mogę zrobić to zapewnić, że napewno sobie jakoś poradzimy."
	),new MyLine(
		"bogosBinted/becia.png", "Becia", colors["red"],
		"Czy jest coś co może pan zapewnić obywatelom jako możliwy przyszły prezydent Polski?"
	),new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"Mój sztab napewno już się tym zajmuje i zapewniam, że zrobimy wszystko żeby przygotować na to obywateli."
	),new MyLine(
		"bogosBinted/becia.png", "Becia", colors["red"],
		"A to był wywiad dnia radia PDF FM! Panie Jakbie, dziękuję bardzo za rozmowę."
	)],
	"Również dziękuję, miłego dnia.",
	"Dzięki wielkie, pamiętajcie Bukaj2060!",
	function (){
		changeChapterPlace(1, "Siedziba Earthless - Bydgoszcz, Ziemia")
		doTheEvent(c1u2e13v1)
	},
	function (){
		changeChapterPlace(1, "Siedziba Earthless - Bydgoszcz, Ziemia")
		doTheEvent(c1u2e13v1)
	},
	[0, 0, 0, 0, 0, .05, 0, 0, 0],
	[0, 0, 0, .05, 0, -.1, 0, 0, 0] 
)

let c1u2e13v1 = new MyEvent(
	"bogosBinted/stol.png",
	[new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"Co sądzicie, dobrze tam wypadłem?"
	),new MyLine(
		"bogosBinted/amina.png", "Amina", "red",
		"Póki co nie jesteś wyzywany na Y więc chyba nie jest źle"
	),new MyLine(
		"bogosBinted/jakub.png", "Henryk", "red",
		"Spokojnie, zaraz pewnie ktoś coś wytnie z kontekstu i zaraz to obleci cały internet. Kuba, może wejdź tam i zobacz co się dzieje."
	)],
	"Dobra, zobaczmy",
	"Nie bardzo mnie to teraz obchodzi, po prostu czekajmy na wyniki. Musimy być gotowi.",
	function (){
		if (data.areTeethBrushed) doTheEvent(c1u2e14v1)
		else doTheEvent(c1u2e14v2)
	},
	function (){
		doTheEvent(c1u2e15v1)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c1u2e14v1 = new MyEvent(
	"bogosBinted/Y.png",
	[new MyLine(
		"bogosBinted/noPfpUser.png", "FreePenguin", colors["white"],
		"Jakub zaorał wszystkich innych kandydatów! Idol xddd"
	),new MyLine(
		"bogosBinted/noPfpUser.png", "segga_crappost", colors["white"],
		"Chłop po raz pierwszy zaczął gadać z sensem? Wow"
	),new MyLine(
		"bogosBinted/noPfpUser.png", "polish-player-2k09", colors["white"],
		"MÓJ PREZYDENT BUKAJ2060!!11!!11"
	),new MyLine(
		"bogosBinted/noPfpUser.png", "marsrekin", colors["white"],
		"Dziś go podwiozłem pod radio, spoko człowiek!"
	)],
	"Chyba nie jest tak źle",
	"Jest świtnie! Naprawdę mam szansę to wygrać!",
	function (){
		doTheEvent(c1u2e15v1)
	},
	function (){
		doTheEvent(c1u2e15v1)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0], 
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c1u2e14v2 = new MyEvent(
	"bogosBinted/Y.png",
	[new MyLine(
		"bogosBinted/noPfpUser.png", "FreePenguin", colors["white"],
		"Jakub zaorał wszystkich innych kandydatów! Idol xddd"
	),new MyLine(
		"bogosBinted/noPfpUser.png", "segga_crappost", colors["white"],
		"Chłop po raz pierwszy zaczął gadać z sensem? Wow"
	),new MyLine(
		"bogosBinted/noPfpUser.png", "marsrekin", colors["white"],
		"Dziś go podwiozłem pod radio, tak strasznie mu śmierdziało z buzi... Ten człowiek chyba nie myje zębów! Ja mu nie ufam"
	),new MyLine(
		"bogosBinted/noPfpUser.png", "polish-player-2k09", colors["white"],
		"MÓJ PREZYDENT BUKAJ2060!!11!!11"
	)],
	"Chyba nie jest tak źle",
	"Jest świetnie! Naprawdę mam szansę to wygrać!",
	function (){
		doTheEvent(c1u2e15v1)
	},
	function (){
		doTheEvent(c1u2e15v1)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c1u2e15v1 = new MyEvent(
	"bogosBinted/stol.png",
	[new MyLine(
		"bogosBinted/marcin.png", "Marcin", colors["aqua"],
		"Mam nadzieję że ta zniesiona cisza wyborcza nam nie zaszkodzi. Ale za to mamy narzędzie to kamapnii nawet w dzień wyborów!"
	),new MyLine(
		"bogosBinted/krzys.png", "Krzychu", colors['orange'],
		"Chodźcie, jest ogłoszenie wyników!"
	)],
	"Chwila prawdy.",
	"To tylko formalność, ale zobaczmy.",
	function (){
		showIcons(research, "Postęp badań")
		doTheEvent(c1u2e16v1)
	},
	function (){
		showIcons(research, "Postęp badań")
		doTheEvent(c1u2e16v1)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c1u2e16v1 = new MyEvent(
	"bogosBinted/radio.png",
	[new MyLine(
		"bogosBinted/becia.png", "Becia", colors["red"],
		"Uwaga, Państwowa Komisja Wyborcza podała wyniki wyborów prezydenckich 2060! Wy.ory rozstrzygły się w pierwszej turze, a ich zwycięzcą zostaje Jakub Bukaj zdobywając 65% głosów, gratualacje dla Pana prezydenta!"
	),new MyLine(
		"bogosBinted/marcin.png", "Marcin", colors['aqua'],
		"MAMY TO!"
	),new MyLine(
		"bogosBinted/ilia.png", "Ilia", colors['purple'],
		"Udało się!"
	),new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"A więc Panie i Panowie - bierzemy się do pracy! Amina, Henryk i Ilia przygotujcie prezentacje waszych badań, Krzychu idź do Alberta, a ja z Marcinem idziemy nagrać przemówienie."
	),new MyLine(
		"bogosBinted/krzychu.png", "Krzychu", colors['orange'],
		"Kuba, czekaj! Albert ma do ciebie sprawę."
	)],
	"Co ten staruch znowu chce?",
	"Nie mam na to teraz czasu, musimy to natychmiast nagrać.",
	function (){
		doTheEvent(c1u2e17v1)
	},
	function (){
		doTheEvent(c1u2e17v2)
	},
	[-.05, 0, 0, .05, 0, 0, 0, 0, 0], //
	[.05, 0, 0, -.15, 0, 0, 0, 0, 0] //
)

let c1u2e17v2 = new MyEvent(
	"bogosBinted/gsg.png",
	[new MyLine(
		"bogosBinted/noPfpUser.png", "", colors["grey"],
		"Gratulacje, odblokowałeś pierwszy wynalazek: genereator sztucznej grawitacji! Tym razem jeszcze ujdzie Ci to na sucho, ale pamętaj, aby szanować Alberta."
	)],
	"Okej...",
	"Rozumiem.",
	function (){
		changeChapterPlace(2, "Studio nagrań")
		doTheEvent(c2u1e1)
	},
	function (){
		changeChapterPlace(2, "Studio nagrań")
		doTheEvent(c2u1e1)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c1u2e17v1 = new MyEvent(
	"bogosBinted/albert.png",
	[new MyLine(
		"bogosBinted/krzychu.png", "Krzychu", colors['orange'],
		"Twierdzi, że skończył to, co mu zleciłeś."
	),new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"O, czyli jednak? Powoli zaczynałem wątpić w to jego paplanie, ale jednak! Albert, pokaż co tam zmajstrowałeś!"
	),new MyLine(
		"bogosBinted/albert.png", "Albert", colors["darkred"],
		"Nie wierzyłeś we mnie, ale sieidzałem nad tym całymi dniami i jest! Stworzyłem generator sztucznej grawitacji."
	)],
	"Jak to niby jest możliwe?",
	"Nie wierzę, nie ma szans",
	function (){
		doTheEvent(c1u2e18v1)
	},
	function (){
		doTheEvent(c1u2e18v1)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0] 
)

let c1u2e18v1 = new MyEvent(
	"bogosBinted/gsg.png",
	[new MyLine(
		"bogosBinted/albert.png", "Albert", colors["darkred"],
		"Już tłumaczę o co chodzi. Za pomocą kilku skomplikowanych układów elektrycznych, których nikt po za MNĄ nie byłby w stanie zrozumieć swoim małym móżdżkiem, stworzyłem narzędzie opierające się o działaniu nagęszczacza metrii. Zagęszcza on tyle materii, ile potrzeba żeby wytworzyć dane pole grawitacyj..."
	)],
	"Wiesz co, śpieszy mi się... do zobacznia",
	"Mhm, a czym jest ten zagęszczacz materii?",
	function (){
		doTheEvent(c1u2e17v2)
	},
	function (){
		doTheEvent(c1u2e19v1)
	},
	[.05, 0, 0, -.05, 0, 0, 0, 0, 0],
	[-.05, 0, 0, .05, 0, 0, 0, 0, 0]
)

let c1u2e19v1 = new MyEvent(
	"bogosBinted/albert.png",
	[new MyLine(
		"bogosBinted/albert.png", "Albert", colors["darkred"],
		"Cieszę się, że pytasz! Zagęszczacz materii... ha! Co to takiego? To nie jest zwykłe urządzenie, to przełomowa technologia, która wyrywa nas z ram ograniczeń fizyki, to maszyna, która zmienia naszą percepcję rzeczywistości! Wyobraź sobie, że mogę skoncentrować całą masę Wszechświata w jednym punkcie, na tyle małym, że nie mieści się w waszym wyobrażeniu!. Ale jak to możliwe, zapytasz? Otóż ja, wyjątkowy umysł, odkryłem sekrety teoretycznej fizyki kwantowej, a następnie przeniosłem je do praktyki! Zagęszczacz materii wykorzystuje połączenie skomplikowanych manipulacji polami kwantowymi, promieniowaniem gamma i... no cóż, skomplikowanymi obwodami elektronicznymi, których funkcjonowanie przechodzi twoje zwykłe pojęcie!"
	),
	new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"Dobra robota! Krzysiek, zajmiesz się użyciem tego na statku?"
	),
	new MyLine(
		"bogosBinted/krzychu.png", "Krzychu", colors['orange'],
		"Proste, że tak!"
	),
	new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"Super, a ty Albert bierz się teraz za tą minaturową elektrownie jądrową o której Ci mówiłem."
	),
	new MyLine(
		"bogosBinted/albert.png", "Albert", colors["darkred"],
		"Jak niby mam to zrobić?! Kolejna rzecz która łamie prawa fizyki, chodziłeś ty kiedykolwiek do tej szkoły??"
	)
	],
	"Womp womp, do roboty.",
	"Powodzenia!",
	function (){
		changeChapterPlace(2, "Studio nagrań")
		doTheEvent(c2u1e1)
	},
	function (){
		changeChapterPlace(2, "Studio nagrań")
		doTheEvent(c2u1e1)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c2u1e1 = new MyEvent(
	"bogosBinted/jakub.png",
	[new MyLine(
		"bogosBinted/jakub.png", "Jakub", colors["green"],
		"testline"
	)],
	"LewaOpcja",
	"PrawaOpcja",
	function (){
		//doTheEvent(cuev)
	},
	function (){
		//doTheEvent(cuev)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0], //
	[0, 0, 0, 0, 0, 0, 0, 0, 0] //
)

// ZEBY WLACZYC KOLEJNA IKONKE STATOW TRZEBA WPISAC showIcons(np. nerds/alienRelations)
// szczerze?

/*
let cuev = new MyEvent(
	"bogosBinted/jakub.png",
	[new MyLine(
		"bogosBinted/jakub.png", "Jakub", "red",
		"testline"
	)],
	"LewaOpcja",
	"PrawaOpcja",
	function (){
		//doTheEvent(cuev)
	},
	function (){
		//doTheEvent(cuev)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0], //
	[0, 0, 0, 0, 0, 0, 0, 0, 0] //
)
*/

doTheEvent(c1u1e1);