let leftH = document.getElementById('left-header-container');
let rightH = document.getElementById('right-header-container');
let chapter = document.getElementById('chapter');
let headerNav = document.getElementById('headerNav');
let newDiv = document.querySelector('.respNav');
let resources = document.getElementById('resources')
let burger = document.getElementById('burger');

// Otwieranie repsonsywnego menu przyciskiem

burger.addEventListener('click', function() {
    if (resources.className == "") {
        resources.className = "open";
        burger.className = "fa-solid fa-circle-xmark";
    } else if (resources.className == "open") {
        resources   .className = "";
        burger.className = "fa-solid fa-chart-simple";
    }
})

// =========================================================

let middlediv = document.querySelector("div#middlediv");
let buttonLeft = document.querySelector("input#left");
let buttonRight = document.querySelector("input#right");

let data = {
	chapter: 1,
	underchapter: 1,
	stats: {
		publicOpinion: 50,
		currency: 0, //(!)
		fuel: 0,
		relations: {
			//%
			chemist: 50,
			biologist: 50,
			physicist: 50,
			farmer: 50,
			handler: 50,
			translator: 50,
		},
		alienRelations: {
			Nerds: 50,
			Magicals: 50,
			AgreSuS: 50,
		},
	},
};

class MyEvent {
	constructor(photoPath, line, opL, opP, fL, fP) {
		this.photoPath = photoPath; //ex rysunek.svg
		this.line = line; //list of obiects (path,who, color, line)
		this.opL = opL; //string
		this.opP = opP; //string
		this.fL = fL; //function
		this.fP = fP; //function
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
	console.log(typeof ob.line);
	middlediv.textContent = "";

	ob.line.forEach((element) => {
		let newPhoto = document.createElement("img");

		newPhoto.setAttribute("src", element.photoPath);
		newPhoto.setAttribute("height", "350px");
		middlediv.insertAdjacentElement("beforeend", newPhoto);
		newPhoto.classList.add("linePhoto");

		let newSpanNode = document.createTextNode(element.who);
		let newSpan = document.createElement("span");

		newSpan.appendChild(newSpanNode);
		newSpan.style.color = element.color;
		middlediv.insertAdjacentElement("beforeend", newSpan);
		newSpan.classList.add("lineWho");

		let newTextNode = document.createTextNode(element.text);
		let newText = document.createElement("span");

		newText.appendChild(newTextNode);
		middlediv.insertAdjacentElement("beforeend", newText);
		newText.classList.add("lineText");

		middlediv.insertAdjacentElement(
			"beforeend",
			document.createElement("br")
		);
	});

	buttonLeft.value = ob.opL;
	buttonRight.value = ob.opP;

	buttonLeft.addEventListener("click", ob.fL);
	buttonRight.addEventListener("click", ob.fP);

	console.log(ob);
}

//====================CHAPTER 1====================
//=====Underchapter 1=====

//wstawić jakiś sen (insp. Adamem Mickiewiczem XDDDD)

let c1u1e1 = new MyEvent(
	"bogosBinted/rysunek.svg",
	[
		new MyLine(
			"bogosBinted/rysunek.svg",
			"Jakub",
			"#a3be8c",
			"Ooh, co to... co ty było? Nieważne, muszę się przygotować - od tego co dziś powiem zależą losy mojego państwa, a nawet całego świata!"
		),
	],
	"Pomyśl o znaczeniu tego snu",
	"Zaraz się spóźnię!", // :OOOOOO NOWAY
	function () {
		doTheEvent(c1u1e2v1);
		console.log("leftoption");
	},
	function () {
		console.log("rightoption");
	}
);
doTheEvent(c1u1e1);

let c1u1e2v1 = new MyEvent(
	"bogosBinted/rysunek.svg",
	[
		new MyLine("BogosBinted/rysunek.svg", "Jakub", "green", "Nigga"),
		new MyLine("BogosBinted/rysunek.svg", "Jakub", "green", "Nigga2"),
	],
	"Zaraz się spóźnię!",
	"Nie mam czasu, muszę się zbierać",
	function () {
		console.log("leftoption");
	},
	function () {
		console.log("rightoption");
	}
);
