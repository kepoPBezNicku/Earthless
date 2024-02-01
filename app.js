let leftH = document.getElementById('left-header-container');
let rightH = document.getElementById('right-header-container');
let chapter = document.getElementById('chapter');
let headerNav = document.getElementById('headerNav');
let newDiv = document.querySelector('.respNav');
let resources = document.getElementById('resources')
let burger = document.getElementById('burger');

// ===== RESOURCE'S PSEUDOELEMENTS =====

let questionMark1 = document.querySelector('#header-section nav #left-header-container li:nth-of-type(1)');
let questionMark2 = document.querySelector('#header-section nav #left-header-container li:nth-of-type(2)');
let questionMark3 = document.querySelector('#header-section nav #left-header-container li:nth-of-type(3)');
let publicOpinion = document.querySelector('#header-section nav #resources #right-header-container li:nth-of-type(1)');
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
let buttonLeft = document.querySelector("button#left");
let buttonRight = document.querySelector("button#right");

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

class MyEvent {
	constructor(photoPath, line, opL, opP, fL, fP, sL, sP) {
		this.photoPath = photoPath; //ex rysunek.svg
		this.line = line; //list of obiects (path,who, color, line)
		this.opL = opL; //string
		this.opP = opP; //string
		this.fL = fL; //function
		this.fP = fP; //function
		this.sL = sL; //2-dimension list
		this.sP = sP; //2-dimension list
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

function doTheEvent(ob) {
	middlediv.textContent = "";

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

	//tutaj dodamy mouseover
}

//====================CHAPTER 1====================
//=====Underchapter 1=====

//wstawić jakiś sen (insp. Adamem Mickiewiczem XDDDD)

let c1u1e1 = new MyEvent(
	"bogosBinted/rysunek.svg",	//budzik.svg
	[
		new MyLine(
			"bogosBinted/rysunek.svg", "Jakub", "green",
			"Ooh, co to... co ty było? Co to niby miało... JUŻ 8, ZASPAŁEM! Ale ten sen..."
		),
	],
	"O co chodziło z tym snem?",
	"Zaraz się spóźnię!",
	function () {
		doTheEvent(c1u1e2v1);
	},
	function () {
		doTheEvent(c1u1e2v2)
	},
);

let c1u1e2v1 = new MyEvent(
	"bogosBinted/rysunek.svg", //chmurka.svg
	[
		new MyLine("bogosBinted/rysunek.svg", "Jakub", "green",
		"Nigga"),
		new MyLine("bogosBinted/rysunek.svg", "bukaJ", "red",
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
	}
);

let c1u1e2v2 = new MyEvent(
	"bogosBinted/rysunek.svg", //budzik.svg
	[new MyLine(
		"bogosBinted/rysunek.svg", "Jakub", "green",
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
	}
)

let c1u1e3v1 = new MyEvent(
	"bogosBinted/rysunek.svg", //kawa.svg
	[new MyLine(
		"bogosBinted/rysunek.svg", "Jakub", "green",
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
	}
)

let c1u1e3v2 = new MyEvent(
	"bogosBinted/rysunek.svg", //zeby.svg
	[new MyLine(
		"bogosBinted/rysunek.svg", "Jakub", "green",
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
	}
)

let c1u1e3v3 = new MyEvent(
	"bogosBinted/rysunek.svg", //kawa.svg
	[new MyLine(
		"bogosBinted/rysunek.svg", "Jakub", "green",
		"Dzień bez kawy to dzień stracony! No ale już nic innego nie zdążę zrobić, pójdę złapać taxi."
	)],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać",
	function (){
		data.stats.currency-=15

		doTheEvent(c1u1e5v1)
	},
	function (){
		data.stats.currency-=30

		doTheEvent(c1u1e5v1)
	}
)

let c1u1e3v4 = new MyEvent(
	"bogosBinted/rysunek.svg", //zeby,svg
	[new MyLine(
		"bogosBinted/rysunek.svg", "Jakub", "green",
		"No, i takie ząbki ma człowiek sukcesu :DD Dobra, dość tego gapienia się w lustro, lepiej zamówię taxi."
	)],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać",
	function (){
		data.stats.currency-=15

		doTheEvent(c1u1e5v1)
	},
	function (){
		data.stats.currency-=30

		doTheEvent(c1u1e5v1)
	}
)

let c1u1e4v1 = new MyEvent(
	"bogosBinted/rysunek.svg", //jedzenie.svg
	[new MyLine(
		"bogosBinted/rysunek.svg", "Jakub", "green",
		"Dobra, najadłem się, teraz lece zamówić taxi. "
	)],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać",
	function (){
		data.stats.currency-=15

		doTheEvent(c1u1e5v1)
	},
	function (){
		data.stats.currency-=30

		doTheEvent(c1u1e5v1)
	}
)

let c1u1e5v1 = new MyEvent(
	"bogosBinted/rysunek.svg",
	[new MyLine(
		"bogosBinted/rysunek.svg", "Jakub", "green",
		"Zaraz powinna być, w tym czasie może..."
	)],
	"Zobaczę co się dzieje na Y",
	"Po prostu poczekam w samotności, lepiej odpocznę przed wywiadem",
	function (){
		//stats

		doTheEvent(c1u1e6)
	},
	function (){
		//stats

		doTheEvent(c1u1e7)
	}
)

let c1u1e6 = new MyEvent(
	"bogosBinted/rysunek.svg",
	[new MyLine(
		"bogosBinted/rysunek.svg", "SkibidiEdge2k13", "white",
		"Halo?? Dziś jest prima aprilis czy ja o czymś nie wiem???"
	),
	new MyLine(
		"bogosBinted/rysunek.svg", "ArchUserUWU", "white", 
		"Myślicie że ten wyciek był prawdziwy? Przecież by nam powiedzieli o czymś takim..."
	),
	new MyLine(
		"bogosBinted/rysunek.svg", "NwordEnjoyer", "white",
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
	}
)

let c1u1e7 = new MyEvent(
	"bogosBinted/rysunek.svg",
	[new MyLine(
		"bogosBinted/rysunek.svg", "Pan Mirek", "yellow",
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
	}
)

let c1u1e8 = new MyEvent(
	"bogosBinted/rysunek.svg",
	[new MyLine(
		"bogosBinted/rysunek.svg", "Pan Mirek", "yellow",
		"Puścić panu coś?"
	),
	new MyLine(
		"bogosBinted/rysunek.svg", "Jakub", "green",
		"Czemu nie? To pan puści radio gulasz może"
	),
	new MyLine(
		"bogosBinted/rysunek.svg", "*kobiecy głos z radia*", "red",
		"Przerywamy porgram by wydać nowy komunikat rzecznika sekretarza ONZ: Tak, to prawda. W związku z obecnymi zagrożeniami naturalnymi jesteśmy zmuszeni jako ludzkość ewakuwać się na inną planetę. Apeluję o zachowanie spokoju, zdrowego rozsądku i wiarę, że wyjdziemy z tego problemu cało."
	),
	new MyLine(
		"bogosBinted/rysunek.svg", "Jakub", "green",
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
	}
)

doTheEvent(c1u1e1);


/*
let cuev = new MyEvent(
	"bogosBinted/rysunek.svg",
	[new MyLine(
		"bogosBinted/rysunek.svg", "Jakub", "red",
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
	[["",0.1]["",0.2]],
	[["",0.1]["",0.2]]
)
*/


