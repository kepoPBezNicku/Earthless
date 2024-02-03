let leftH = document.getElementById('left-header-container');
let rightH = document.getElementById('right-header-container');
let chapter = document.getElementById('chapter');
let headerNav = document.getElementById('headerNav');
let newDiv = document.querySelector('.respNav');
let resources = document.getElementById('resources')
let burger = document.getElementById('burger');

// ============ SPRAWDZANIE CZY ELEMENT MA DANY EVENT ============

// function hasEvent(element, eventName) {
//     const events = getEventListeners(element);

//     if (events && events[eventName] && events[eventName].length > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// ============ RESOURCE'S PSEUDOELEMENTS ============

let questionMark1 = document.querySelector('#header-section nav #left-header-container li:nth-of-type(1)');
let questionMark2 = document.querySelector('#header-section nav #left-header-container li:nth-of-type(2)');
let questionMark3 = document.querySelector('#header-section nav #left-header-container li:nth-of-type(3)');
let publicOp = document.querySelector('#header-section nav #resources #right-header-container li:nth-of-type(1)');
let fuel = document.querySelector('#header-section nav #resources #right-header-container li:nth-of-type(2)');
let money = document.querySelector('#header-section nav #resources #right-header-container li:nth-of-type(3)');

// ====================== LEAVING SITE ALERT ======================
window.addEventListener('beforeunload', function (e) {
	var confirmationMessage = 'Czy na pewno chcesz opuścić stronę?';
	e.returnValue = confirmationMessage;
	return confirmationMessage;
});

window.addEventListener('unload', function () {
	console.log('Strona jest odświeżana lub opuszczana.');
});

// ==== Otwieranie repsonsywnego menu przyciskiem ====

burger.addEventListener('click', function() {
    if (resources.className == "") {
        resources.className = "open";
        burger.className = "fa-solid fa-circle-xmark";
    } else if (resources.className == "open") {
        resources   .className = "";
        burger.className = "fa-solid fa-chart-simple";
    }
})

// ============ LOADING SCREEN ============

function loadingScreen() {
	setTimeout(
		function() {
			let loadingScreen = document.querySelector("#loading-screen");
			loadingScreen.style.setProperty("display", "none");
			loadingScreen.style.setProperty("opacity", 0);
		}, 3190)
}

loadingScreen();

// =========================================================

let middlediv = document.querySelector("div#middlediv");
var buttonLeft = document.querySelector("button#left");
var buttonRight = document.querySelector("button#right");

let data = {
	chapter: 1,
	underchapter: 1,
	stats: {
		publicOpinion: 0.5,
		currency: 0.5,
		fuel: 0.5,
		relations: {
			chemist: 0.5,
			biologist: 0.5,
			physicist: 0.5,
			farmer: 0.5,
			handler: 0.5,
			translator: 0.5,
		},
		alienRelations: {
			Nerds: 0.5,
			Magicals: 0.5,
			AgreSuS: 0.5,
		},
	},
	notimeleft: false,
	areTeethBrushed : false,
	isCoffeDrunk : false,
	isBreakfastEaten : false
};

function statsChanger(element1,list) {
	console.log(list)

	// publicOp.style.setProperty("--transform", "scaleY("+pOp+')')
	element1.addEventListener("mouseover", function hover() {
		let pOp = data.stats.publicOpinion+list[0];
		let fue = data.stats.fuel+list[1];
		let mon = data.stats.currency+list[2];
		publicOp.style.setProperty("--transform", "scaleY("+pOp+')')
		fuel.style.setProperty("--transform", "scaleY("+fue+')')
		money.style.setProperty("--transform", "scaleY("+mon+')')
	});
	element1.addEventListener("mouseout", function out() {
		publicOp.style.setProperty("--transform", "scaleY("+data.stats.publicOpinion+')');
		fuel.style.setProperty("--transform", "scaleY("+data.stats.fuel+')');
		money.style.setProperty("--transform", "scaleY("+data.stats.currency+')');
	});
	element1.addEventListener("click", function change() {
		data.stats.publicOpinion += list[0];
		data.stats.fuel += list[1];
		data.stats.currency += list[2];
		publicOp.style.setProperty("--transform", "scaleY("+data.stats.publicOpinion+')');
		fuel.style.setProperty("--transform", "scaleY("+data.stats.fuel+')');
		money.style.setProperty("--transform", "scaleY("+data.stats.currency+')');
	});

}

publicOp.style.setProperty("--transform", "scaleY("+data.stats.publicOpinion+')');
money.style.setProperty("--transform", "scaleY("+data.stats.currency+')');
fuel.style.setProperty("--transform", "scaleY("+data.stats.fuel+')');

class MyEvent {
	constructor(photoPath, line, opL, opP, fL, fP, sL, sP) {
		this.photoPath = photoPath; //ex rysunek.png
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
	middlediv.textContent = "";

	eventsRemover();

	let buttonLeft = document.querySelector("button#left");
	let buttonRight = document.querySelector("button#right");

	let newBigPhoto = document.createElement("img");
	newBigPhoto.setAttribute("src", ob.photoPath);
	middlediv.insertAdjacentElement('beforeend', newBigPhoto);
	newBigPhoto.classList.add("bigPhoto");
	
	ob.line.forEach((element) => {
		let whoinfo = document.createElement("div")
		whoinfo.classList.add("whoInfo");
		middlediv.insertAdjacentElement('beforeend', whoinfo)

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

		middlediv.insertAdjacentElement(
			"beforeend",
			document.createElement("br")
		);
	});

	buttonLeft.textContent = ob.opL;
	buttonRight.textContent = ob.opP;
	
	buttonLeft.addEventListener("click", ob.fL);
	buttonRight.addEventListener("click", ob.fP);

	statsChanger(buttonLeft, ob.sL);
	statsChanger(buttonRight, ob.sP);

	//tutaj dodamy mouseover
}

//====================CHAPTER 1====================
//=====Underchapter 1=====

//wstawić jakiś sen (insp. Adamem Mickiewiczem XDDDD)
let c1u1e1 = new MyEvent(
	"bogosBinted/rysunek.png",	//budzik.png
	[
		new MyLine(
			"bogosBinted/rysunek.png", "Jakub", "green",
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

	[0.1,0.1,0.1],
	[0.1,0.1,0.1]
	
);

let c1u1e2v1 = new MyEvent(
	"bogosBinted/rysunek.png", //chmurka.png
	[
		new MyLine("bogosBinted/rysunek.png", "Jakub", "green",
		"Nigga"),
		new MyLine("bogosBinted/rysunek.png", "bukaJ", "red",
		"Nigga2"),
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

	[-0.1,-0.1,-0.1],
	[-0.1,-0.1,-0.1]

);

let c1u1e2v2 = new MyEvent(
	"bogosBinted/rysunek.png", //budzik.png
	[new MyLine(
		"bogosBinted/rysunek.png", "Jakub", "green",
		"Na dzisiejszym wywiadzie muszę się dobrze prezentować! Ale mogę nie zdążyć ze wszystkim."
	)],
	"Wypij kawę", 
	"Wymyj zęby",
	function (){
		data.isCoffeDrunk = true;

		if(data.notimeleft==true) doTheEvent(c1u1e3v3)
		else doTheEvent(c1u1e3v1)
	},
	function (){
		data.areTeethBrushed = true;

		if(data.notimeleft==true) doTheEvent(c1u1e3v4)
		else doTheEvent(c1u1e3v2)
	},

	[0.1,0.1,0.1],
	[0.1,0.1,0.1]
)

let c1u1e3v1 = new MyEvent(
	"bogosBinted/rysunek.png", //kawa.png
	[new MyLine(
		"bogosBinted/rysunek.png", "Jakub", "green",
		"Dzień bez kawy to dzień stracony! Dobra, na szczęscie zostało mi trochę czasu na..."
	)],
	"Wymycie zębów",
	"Szbykie śniadanie",
	function (){
		data.areTeethBrushed = true;

		doTheEvent(c1u1e3v4)
	},
	function (){
		data.isBreakfastEaten = true;

		doTheEvent(c1u1e4v1)
	},

	[-0.1,-0.1,-0.1],
	[-0.1,-0.1,-0.1]
)

let c1u1e3v2 = new MyEvent(
	"bogosBinted/rysunek.png", //zeby.png
	[new MyLine(
		"bogosBinted/rysunek.png", "Jakub", "green",
		"No, i takie ząbki ma człowiek sukcesu :DD teraz zostało mi jeszcze trochę czasu żeby .."
	)],
	"Zjeść śniadanie",
	"Wypić kawę",
	function (){
		data.isBreakfastEaten = true

		doTheEvent(c1u1e4v1)
	},
	function (){
		data.isCoffeDrunk = true

		doTheEvent(c1u1e3v3)
	},
	[0.1,0.1,0.1],
	[0.1,0.1,0.1]
)

let c1u1e3v3 = new MyEvent(
	"bogosBinted/rysunek.png", //kawa.png
	[new MyLine(
		"bogosBinted/rysunek.png", "Jakub", "green",
		"Dzień bez kawy to dzień stracony! No ale już nic innego nie zdążę zrobić, pójdę złapać taxi."
	)],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać",
	function (){


		doTheEvent(c1u1e5v1)
	},
	function (){


		doTheEvent(c1u1e5v1)
	},
	[-0.1,-0.1,-0.1],
	[-0.1,-0.1,-0.1]
)

let c1u1e3v4 = new MyEvent(
	"bogosBinted/rysunek.png", //zeby,png
	[new MyLine(
		"bogosBinted/rysunek.png", "Jakub", "green",
		"No, i takie ząbki ma człowiek sukcesu :DD Dobra, dość tego gapienia się w lustro, lepiej zamówię taxi."
	)],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać",
	function (){
		
		doTheEvent(c1u1e5v1)
	},
	function (){


		doTheEvent(c1u1e5v1)
	},
	[0.1,0.1,0.1],
	[0.1,0.1,0.1]
)

let c1u1e4v1 = new MyEvent(
	"bogosBinted/rysunek.png", //jedzenie.png
	[new MyLine(
		"bogosBinted/rysunek.png", "Jakub", "green",
		"Dobra, najadłem się, teraz lece zamówić taxi. "
	)],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać",
	function (){
		
		doTheEvent(c1u1e5v1)
	},
	function (){


		doTheEvent(c1u1e5v1)
	},
	[-0.1,-0.1,-0.1],
	[-0.1,-0.1,-0.1]
)

let c1u1e5v1 = new MyEvent(
	"bogosBinted/rysunek.png",
	[new MyLine(
		"bogosBinted/rysunek.png", "Jakub", "green",
		"Zaraz powinna być, w tym czasie może..."
	)],
	"Zobaczę co się dzieje na Y",
	"Po prostu poczekam w samotności, lepiej odpocznę przed wywiadem",
	function (){
		eventsRemover();
		doTheEvent(c1u1e6)
	},
	function (){
		eventsRemover();
		doTheEvent(c1u1e7)
	},
	[0.1,0.1,0.1],
	[0.1,0.1,0.1]
)

let c1u1e6 = new MyEvent(
	"bogosBinted/rysunek.png",
	[new MyLine(
		"bogosBinted/rysunek.png", "SkibidiEdge2k13", "white",
		"Halo?? Dziś jest prima aprilis czy ja o czymś nie wiem???"
	),
	new MyLine(
		"bogosBinted/rysunek.png", "ArchUserUWU", "white", 
		"Myślicie że ten wyciek był prawdziwy? Przecież by nam powiedzieli o czymś takim..."
	),
	new MyLine(
		"bogosBinted/rysunek.png", "NwordEnjoyer", "white",
		"No to zaczynamy szturm foliarzy XDDD nie ma szans że to prawda, pewnie jakieś AI"
	)],
	"Przewiń dalej",
	"Wyłącz telefon",
	function (){
		//stats

		doTheEvent(c1u1e7);
	},
	function (){
		//stats

		doTheEvent(c1u1e7);
	},
	[-0.1,-0.1,-0.1],
	[-0.1,-0.1,-0.1]
)

let c1u1e7 = new MyEvent(
	"bogosBinted/rysunek.png",
	[new MyLine(
		"bogosBinted/rysunek.png", "Pan Mirek", "yellow",
		"Długo będzie jeszcze tam pan stał? Ja mam inne kursy!"
	)],
	"O, to już? Szybki pan jest!",
	"Ale spokojnie, gdzie się panu tak śpieszy?",
	function (){
		//stats

		doTheEvent(c1u1e8)
	},
	function (){
		//stats

		doTheEvent(c1u1e8)

		console.log("OpcjaP")
	},
	[0.1,0.1,0.1],
	[0.1,0.1,0.1]
)

let c1u1e8 = new MyEvent(
	"bogosBinted/rysunek.png",
	[new MyLine(
		"bogosBinted/rysunek.png", "Pan Mirek", "yellow",
		"Puścić panu coś?"
	),
	new MyLine(
		"bogosBinted/rysunek.png", "Jakub", "green",
		"Czemu nie? To pan puści radio gulasz może"
	),
	new MyLine(
		"bogosBinted/rysunek.png", "*kobiecy głos z radia*", "red",
		"Przerywamy porgram by wydać nowy komunikat rzecznika sekretarza ONZ: Tak, to prawda. W związku z nadchodzącymi zagrożeniami naturalnymi jesteśmy zmuszeni jako ludzkość ewakuwać się na inną planetę. Apeluję o zachowanie spokoju, zdrowego rozsądku i wiarę, że wyjdziemy z tego problemu cało."
	),
	new MyLine(
		"bogosBinted/rysunek.png", "Jakub", "green",
		"Czyli zaczyna się..."
	)],
	"LewaOpcja",
	"PrawaOpcja",
	function (){
		//stats

		//nextOptionToRun

		console.log("OpcjaL")
	},
	function (){
		//stats

		//nextOptionToRun

		console.log("OpcjaP")
	},
	[-0.1,-0.1,-0.1],
	[-0.1,-0.1,-0.1]
)

doTheEvent(c1u1e1);


/*
let cuev = new MyEvent(
	"bogosBinted/rysunek.png",
	[new MyLine(
		"bogosBinted/rysunek.png", "Jakub", "red",
		"testline"
	)],
	"LewaOpcja",
	"PrawaOpcja",
	function (){
		//stats

		//nextOptionToRun

		console.log("OpcjaL")
	},
	function (){
		//stats

		//nextOptionToRun

		console.log("OpcjaP")
	},
)
*/


