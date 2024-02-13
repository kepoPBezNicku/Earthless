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
	jakub:'#496a4b', //colors["jakub"]
	marcin:'#3a71a6', //colors["marcin"]
	playAgainColor:'#ce5263',
	chuj:'value2',
	chuj:'value2',
	chuj:'value2',
	chuj:'value2',}

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

			font.style.setProperty("color", "white");
		} else if (font.classList.contains("smaller")) {
			font.classList.remove("smaller");
			font.classList.add("bigger");
			document.documentElement.style.setProperty("font-size", "23px");

			font.style.setProperty("color", "green");
		}
	})


	contrast.addEventListener("mouseout", function contrastOut() {
		let buttonLeft = document.querySelector("button#left");
		let buttonRight = document.querySelector("button#right");
		if (contrast.classList.contains("contrastON")) {
			document.documentElement.className = "contrast";
			contrast.style.setProperty("color", "green");

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
			contrast.style.setProperty("color", "green");
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
			contrast.style.setProperty("color", "green");
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

function statsChanger(element1, list) {
	let colorNerds = window.getComputedStyle(nerds).getPropertyValue("--pseudoElColor");
	let colorMagicals = window.getComputedStyle(magicals).getPropertyValue("--pseudoElColor");
	let colorAgreSuS = window.getComputedStyle(agreSuS).getPropertyValue("--pseudoElColor");

	let colorPublicOp = window.getComputedStyle(publicOp).getPropertyValue("--pseudoElColor");
	let colorMoney = window.getComputedStyle(money).getPropertyValue("--pseudoElColor");
	let colorAdviser = window.getComputedStyle(adviser).getPropertyValue("--pseudoElColor");
	let colorResearch = window.getComputedStyle(research).getPropertyValue("--pseudoElColor");
	let colorFuel = window.getComputedStyle(fuel).getPropertyValue("--pseudoElColor");
	let colorFood = window.getComputedStyle(food).getPropertyValue("--pseudoElColor");
	function colorChanger(nerds1, magicals1, agreSuS1, pOp1, mon1, adviser1, research1, fue1, food1) {
		if (nerds1 > 0.7) {
			nerds.style.setProperty("--pseudoElColor", "green");
		} else if (nerds1 >= 0.4 && nerds1 <= 0.7) {
			nerds.style.setProperty("--pseudoElColor", "yellow");
		} else if (nerds1 > 0 && nerds1 < 0.4) {
			nerds.style.setProperty("--pseudoElColor", "red");
		}

		if (magicals1 > 0.7) {
			magicals.style.setProperty("--pseudoElColor", "green");
		} else if (magicals1 >= 0.4 && magicals1 <= 0.7) {
			magicals.style.setProperty("--pseudoElColor", "yellow");
		} else if (magicals1 > 0 && magicals1 < 0.4) {
			magicals.style.setProperty("--pseudoElColor", "red");
		}

		if (agreSuS1 > 0.7) {
			agreSuS.style.setProperty("--pseudoElColor", "green");
		} else if (agreSuS1 >= 0.4 && agreSuS1 <= 0.7) {
			agreSuS.style.setProperty("--pseudoElColor", "yellow");
		} else if (agreSuS1 > 0 && agreSuS1 < 0.4) {
			agreSuS.style.setProperty("--pseudoElColor", "red");
		}

		if (pOp1 > 0.7) {
			publicOp.style.setProperty("--pseudoElColor", "green");
		} else if (pOp1 >= 0.4 && pOp1 <= 0.7) {
			publicOp.style.setProperty("--pseudoElColor", "yellow");
		} else if (pOp1 > 0 && pOp1 < 0.4) {
			publicOp.style.setProperty("--pseudoElColor", "red");
		}

		if (mon1 > 0.7) {
			money.style.setProperty("--pseudoElColor", "green");
		} else if (mon1 >= 0.4 && mon1 <= 0.7) {
			money.style.setProperty("--pseudoElColor", "yellow");
		} else if (mon1 > 0 && mon1 < 0.4) {
			money.style.setProperty("--pseudoElColor", "red");
		}

		if (adviser1 > 0.7) {
			adviser.style.setProperty("--pseudoElColor", "green");
		} else if (adviser1 >= 0.4 && adviser1 <= 0.7) {
			adviser.style.setProperty("--pseudoElColor", "yellow");
		} else if (adviser1 > 0 && adviser1 < 0.4) {
			adviser.style.setProperty("--pseudoElColor", "red");
		}

		if (research1 > 0.7) {
			research.style.setProperty("--pseudoElColor", "green");
		} else if (research1 >= 0.4 && research1 <= 0.7) {
			research.style.setProperty("--pseudoElColor", "yellow");
		} else if (research1 > 0 && research1 < 0.4) {
			research.style.setProperty("--pseudoElColor", "red");
		}

		if (fue1 > 0.7) {
			fuel.style.setProperty("--pseudoElColor", "green");
		} else if (fue1 >= 0.4 && fue1 <= 0.7) {
			fuel.style.setProperty("--pseudoElColor", "yellow");
		} else if (fue1 > 0 && fue1 < 0.4) {
			fuel.style.setProperty("--pseudoElColor", "red");
		}

		if (food1 > 0.7) {
			food.style.setProperty("--pseudoElColor", "green");
		} else if (food1 >= 0.4 && food1 <= 0.7) {
			food.style.setProperty("--pseudoElColor", "yellow");
		} else if (food1 > 0 && food1 < 0.4) {
			food.style.setProperty("--pseudoElColor", "red");
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
			gameOverFunction("gameOver", "Twoja reputacja spadła do zera.");
		} else if (data.stats.publicOpinion > 1) {
			data.stats.publicOpinion = 1;
		}

		if (data.stats.currency <= 0) {
			data.stats.currency = 0;
			gameOverFunction("gameOver", "Straciłeś/aś wszystkie pieniądze.");
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
		colorChanger();
		// console.log(data.stats.publicOpinion);
		// console.log(data.stats.fuel);
		// console.log(data.stats.currency);

		// ↑ NIE WYWALAC CONSOLLOGUF DOPOKI NIE BEDZIEMY ODDAWAC PROJEKTU

		// ale pierdol sie

		//naprawde
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

function changeChapterPlace(x, place) {
	loadingScreen();
	let chapterNumber = document.querySelector("#chapter h1:first-of-type");
	let chapterPlace = document.querySelector("#chapter h1:nth-of-type(2)");

	let chapterText = "Chapter - " + x;
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
	playAgain.setAttribute("href", "main.php")
	playAgain.appendChild(buttonNode);
	playAgain.className = "playAgain"
	div.insertAdjacentElement("beforeend", playAgain);
}

//==================== CHAPTER 1 ====================
changeChapterPlace(1, "Dom Jakuba");
//===== Underchapter 1 =====

//wstawić jakiś sen (insp. Adamem Mickiewiczem XDDDD)
let c1u1e1 = new MyEvent(
	"bogosBinted/jakub.png", //budzik.png
	[
		new MyLine(
			"bogosBinted/jakub.png", "Jakub", "green",
			"Ooh, co to... co ty było? Co to niby miało... JUŻ 8, ZASPAŁEM! Ale ten sen..."
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
	"bogosBinted/jakub.png", //chmurka.png
	[
		new MyLine("bogosBinted/jakub.png", "Jakub", "green", "Testowy tekst 1"),
		new MyLine("bogosBinted/jakub.png", "bukaJ", "red", "Testowy tekst 2"),
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

	[0, 0, 0, 0.2, -0.3, 0, 0, 0, 0],
	[0, 0, 0, -0.2, 0.3, 0, 0, 0, 0]

	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// !!!!!!!!! DO ZMIANY TE STATY (ALIENRELATIONS I RESZTA NIE SA WIDOCZNE DLA GRACZA) !!!!!!!!!
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
);

let c1u1e2v2 = new MyEvent(
	"bogosBinted/jakub.png", //budzik.png
	[
		new MyLine(
			"bogosBinted/jakub.png", "Jakub", "green",
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
			"bogosBinted/jakub.png","Jakub", "green",
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
			"bogosBinted/jakub.png","Jakub","green",
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
			"bogosBinted/jakub.png","Jakub","green",
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
			"bogosBinted/jakub.png","Jakub","green",
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
			"bogosBinted/jakub.png","Jakub","green",
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
			"bogosBinted/jakub.png","Jakub","green",
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
			"bogosBinted/noPfpUser.png","SkibidiEdge2k13","white",
			"Halo?? Dziś jest prima aprilis czy ja o czymś nie wiem???"
		),
		new MyLine(
			"bogosBinted/noPfpUser.png","ArchUserUWU","white",
			"Myślicie że ten wyciek był prawdziwy? Przecież by nam powiedzieli o czymś takim..."
		),
		new MyLine(
			"bogosBinted/noPfpUser.png","NwordEnjoyer","white",
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
	"bogosBinted/mirek.png", //taxi.png
	[
		new MyLine(
			"bogosBinted/mirek.png","Pan Mirek","yellow", //panmirek.png
			"Długo będzie jeszcze tam pan stał? Ja mam inne kursy!"
		),
	],
	"O, to już? Szybki pan jest!",
	"Ale spokojnie, gdzie się panu tak śpieszy?",
	function () {
		showIcons(adviser);
		doTheEvent(c1u1e8);
	},
	function () {
		showIcons(adviser);
		doTheEvent(c1u1e8);
	},
	[0, 0, 0, 0.1, 0, 0, 0, 0, 0],
	[0, 0, 0, -0.1, 0, 0, 0, 0, 0]
);

let c1u1e8 = new MyEvent(
	"bogosBinted/mirek.png",
	[
		new MyLine(
			"bogosBinted/mirek.png","Pan Mirek","yellow",
			"Widział pan ten filmik z tym jakimś szefem ONZ? Mówił, że niby lecimy w kosmos ha! Większej głupoty nie słyszałem."
		),
		new MyLine(
			"bogosBinted/jakub.png","Jakub","green",
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
			"bogosBinted/marcin.png","Marcin","blue", //marcin.png
			'... po czym powiesz "również dziekuję, miłego dnia", uśmiechniesz się i wyjdziesz ze studia. Wszystko jasne?'
		),
		new MyLine(
			"bogosBinted/jakub.png","Jakub","green",
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
			"bogosBinted/marcin.png","Marcin","blue", //marcin.png
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
	"bogosBinted/jakub.png", //chmurka.png
	[
		new MyLine(
			"bogosBinted/jakub.png","Jakub","green",
			"Jutro wybory, przed nami globalny kryzys, a ja wciąż nie wiem co mam o tym powiedzieć ludziom!"
		),
		new MyLine(
			"bogosBinted/jakub.png","Jakub","green",
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
	"bogosBinted/jakub.png",
	[
		new MyLine(
			"bogosBinted/jakub.png","Jakub","blue",
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
			"bogosBinted/becia.png","*wysoka kobieta ubrana na czerwono*","red", //becia.png
			"Cześć gotowy? Za 15 sekund wchodzimy."
		),
		new MyLine(
			"bogosBinted/jakub.png","Jakub","green",
			"Tak odrazu? Myślałem że jeszcze zostało trochę cza..."
		),
		new MyLine(
			"bogosBinted/becia.png","*wysoka kobieta ubrana na czerwono*","red",
			"Trzy, dwa, jeden... Witamy w wywiadzie dnia radia PDF FM, jest piątek godzina 10, z tej strony Beata Kowalczyk a moim dzisiejszym gościem jest pan Kuba Bukaj, kandydat na prezydent RP 2045. Witam serdecznie! Pojutrze ważny dzień, prawda?"
		),
		new MyLine(
			"bogosBinted/jakub.png","Jakub","green",
			"Również witam, tak, z pewnością jeden z najważniejszych dni dla współczesnej Polski. Wybory prezydenckie napewno znacząco wpłyną na losy naszego państwa"
		),
		new MyLine(
			"bogosBinted/becia.png","Becia","red",
			"Dobrze, zanim jeszcze przejdziemy do serca sedna naszego spotkania... ponoć miał pan z wosu 2 na światectwie!"
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
			"bogosBinted/becia.png","Becia","red",
			"Pytam, bo każdy prezydent powinien znać podstawowe struktury organizacji państwa, dlatego zorganizowałam dla Pana test."
		),
		new MyLine(
			"bogosBinted/jakub.png", "Jakub", "green",
			"Jaki test?"),
		new MyLine(
			"bogosBinted/becia.png","Becia","red",
			"Zadam kilka prostych pytań z wiedzy o społeczeństwie, Zaczynamy!"
		),
		new MyLine(
			"bogosBinted/becia.png","Becia","red",
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
			"bogosBinted/becia.png","Becia","red",
			"Źle! Senat liczy 100 senatorów, możliwe, że pomyliło się panu z liczbą posłów w sejmie, która wynosi 460. Lecimy dalej."
		),
		new MyLine(
			"bogosBinted/becia.png","Becia","red",
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
			"bogosBinted/becia.png","Becia","red",
			"Dobrze! Senat liczy 100 senatorów, natomiast sejm liczy 460 posłów. Lecimy dalej."
		),
		new MyLine(
			"bogosBinted/becia.png","Becia","red",
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
			"bogosBinted/becia.png","Becia","red",
			"Poprawna odpowiedź! Jest zwoływane np podczas odebranie przysięgi nowo wybranego prezydenta."
		),
		new MyLine(
			"bogosBinted/becia.png","Becia","red",
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
			"bogosBinted/becia.png","Becia","red",
			"Niestesty, zła odpowiedź. Zgromdzenie narodowe jest zebraniem senatu nie z prezydentem a z sejmem. Jest zwoływane np. podczas odebranie przysięgi nowo wybranego prezydenta.c"
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
			"bogosBinted/becia.png", "Becia", "red",
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
			"bogosBinted/becia.png", "Becia", "red",
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
		"bogosBinted/jakub.png", "Jakub", "green",
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
		"bogosBinted/jakub.png", "Jakub", "green",
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
		"bogosBinted/jakub.png", "Jakub", "green",
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
		"bogosBinted/jakub.png", "Jakub", "green", //wodą się nie nawodnisz debilu ~ Wojciech 2024
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
		"bogosBinted/becia.png", "Becia", "red",
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
		"bogosBinted/jakub.png", "Jakub", "green",
		"Jak najbardziej, program Earthless jest odpowiedzią na ten problem. We wspłpracy z najlepszymi Polskimi naukowcami stworzyliśmy plan emigracji wszystkich Polaków w kosmos. Mamy ambitnych ludzi, nowoczesne narzędzia i dopracowany plan. Teraz jedyne czego potrzebuję żeby go wprowadzić w życie to mnie jako prezydenta. To jest jedyny sposób na zapewnienie bezpieczeństwia Polakom."
	),new MyLine(
		"bogosBinted/becia.png", "Becia", "red",
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
		"bogosBinted/jakub.png", "Jakub", "green",
		"Muszę przyznać, że tak jak większość uważaliśmy ten film za nieprawdziwy. W tej sytuacji jedynie co mogę zrobić to zapewnić, że napewno sobie jakoś poradzimy."
	),new MyLine(
		"bogosBinted/becia.png", "Becia", "red",
		"Czy jest coś co może pan zapewnić obywatelom jako możliwy przyszły prezydent Polski?"
	),new MyLine(
		"bogosBinted/jakub.png", "Jakub", "green",
		"Mój sztab napewno już się tym zajmuje i zapewniam, że zrobimy wszystko żeby przygotować na to obywateli."
	),new MyLine(
		"bogosBinted/becia.png", "Becia", "red",
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
	[0, 0, 0, 0, 0, .05, 0, 0, 0], //
	[0, 0, 0, .05, 0, -.1, 0, 0, 0] //
)

let c1u2e13v1 = new MyEvent(
	"bogosBinted/jakub.png",
	[new MyLine(
		"bogosBinted/jakub.png", "Jakub", "green",
		"Co sądzicie, dobrze tam wypadłem?"
	),new MyLine(
		"bogosBinted/amina.png", "Amina", "red",
		"Póki co nie jesteś wyzywany na Y więc chyba nie jest źle"
	),new MyLine(
		"bogosBinted/jakub.png", "x(rolnik)", "red",
		"Spokojnie, zaraz pewnie ktoś coś wytnie z kontekstu i zaraz to obleci cały internet. Kuba, może wejdź tam i zobacz co się dzieje."
	)],
	"Dobra, zobaczmy",
	"Nie bardzo mnie to teraz obchodzi, po prostu czekajmy na wyniki. Musimy być gotowi.",
	function (){
		//doTheEvent(cuev)
	},
	function (){
		//doTheEvent(cuev)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0], //
	[0, 0, 0, 0, 0, 0, 0, 0, 0] //
)

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

/*
#c7af42
#a58449
#496a4b Jakub
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

doTheEvent(c1u1e1);  