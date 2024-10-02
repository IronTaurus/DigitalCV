
console.log("Script loaded...")

const utbildningar = [
    {Plats: "Plushögskolan Gävle", Titel: ".NET Utvecklare", År:"2021 - 2023", Beskrivining: "Utbildning på 2 år inom .NET Utveckling som inkluderade två LIA perioder."},
    {Plats: "Uppsala universitet campus Gotland", Titel: "Spelutveckling Grafik", År: "2011", Beskrivining: "En utbildning på 3 år inom Speldesign och utveckling med inriktning av grafik." +
        "Den grafiska delen inkluderade 3D och 2D grafik."},
    {Plats: "Högskolan Gävle", Titel: "Grundläggande Java", År: "2009", Beskrivining: "En enskild kurs inom grunder i java programmering."},
];
const anställningar = [
    {Plats: "Nilar", Titel: "Utvecklare", År: "2023", 
        Beskrivining: "Efter 10 veckors praktik via skolan blev jag anställd på viss tid som systemutvecklare för Nilar batterifabrik i Gävle. " +
        "Mitt arbete involverar att skapa ett program som låter användaren att observera eventuella fel i produkten som en AI tagit fram under produktionen." +
        "Programmet visar användaren de bilder som felet uppstår i, vilken typ av fel och var på bilden felet finns.",
    },
    {Plats: "Gamestop", Titel: "Butiksförsäljare", År: "2017 - 2018", 
        Beskrivning: "Som butiksförsäljare krävs det att du har en kännsla för service och är stresstålig. Du behöver också kunna ta egnet initativ både inom kundbemötande och försäljning." +
        "Min utbildning inom sepldesign gav mig ett föresprång inom spel försäljning där jag bl.a. kunde föra fram de starka sidorna på ett spel i en enkel och kort pitch för kunderna."},
    {Plats: "Gävle/Uppsala Kommun", Titel: "Eventarrangör", År: "2018 - 2021", Beskrivining: "På uppdrag av kommunala bibliotek arrangerar jag bräd och rollspel för barn och unga under lovet."},
    {Plats: "Sjöboden allt inom fisk", Titel: "Fiskrensare", År: "2016", Beskrivining: "Ett arbete som är fysiskt krävande där olika avdelningar har olika fysiska arbeten och allt ska ske i ett raskt tempo."},
    {Plats: "Storkök Gävle sjukhus", Titel: "Köksarbetare", År: "2015", Beskrivining: "Ett fysiskt krävande arbete som kräver noggranhet och stresstålighet. Arbetet involverade hantera inkommande disk samt göra iordning matbrickor till alla besökarna utefter orders i ett högt tempo."}
];

function CleanArea(area){
        let child = area.lastElementChild;
        while (child) {
            area.removeChild(child);
          child = area.lastElementChild;
        }
}

// LoadContentAnstallningar();
function LoadContentStart(){
    var MidLeftCol = document.getElementById("MidLeftCol");
    var MidMidCol = document.getElementById("MidMidCol");
    var MidRightCol = document.getElementById("MidRightCol");
    CleanArea(MidLeftCol);
    CleanArea(MidMidCol);
    CleanArea(MidRightCol);

    var ProfileImage = document.createElement("img");
    ProfileImage.src = "./images/me_circle.png";
    ProfileImage.setAttribute("id", "MyPhoto");
    ProfileImage.width = 200;
    ProfileImage.height = 200;
    MidMidCol.appendChild(ProfileImage);

    var KontaktDiv = document.createElement("div");
    KontaktDiv.setAttribute("id", "Kontakt");
    var KontaktText_Adress = document.createElement("p");
    KontaktText_Adress.textContent = "Adress: Fjärde Tvärgatan 49, 80282";
    KontaktText_Adress.setAttribute("class", "KontaktText");
    var KontaktText_Tele = document.createElement("p");
    KontaktText_Tele.textContent = "Tel: 070-5135434";
    KontaktText_Tele.setAttribute("class", "KontaktText");
    var KontaktText_Mail = document.createElement("p");
    KontaktText_Mail.textContent = "Mail: johan.j.hjern@gmail.com";
    KontaktText_Mail.setAttribute("class", "KontaktText");
    KontaktDiv.appendChild(KontaktText_Adress);
    KontaktDiv.appendChild(KontaktText_Tele);
    KontaktDiv.appendChild(KontaktText_Mail);
    MidLeftCol.appendChild(KontaktDiv);

    var HuvudTitel = document.createElement("h2");
    HuvudTitel.setAttribute("id", "HuvudTitel");
    HuvudTitel.textContent = "Johan Johansson Hjern";
    var Introduction = document.createElement("p");
    Introduction.setAttribute("id", "IntroductionText");
    Introduction.textContent = "Fullstack utvecklare med känsla för detalj och problemlösning";

    MidRightCol.appendChild(HuvudTitel);
    MidRightCol.appendChild(Introduction);

    //src="./images/me_circle.png" width="200" height="200"

}

function loadContent(name) {
    console.log("'loadContent' has loaded...")
    fetch(`${name}.html`)
    .then(res => {
        if(res.ok){
            return res.text();
        }
    })
    .then(htmlData => {
        document.getElementById("MidGrid").innerHTML = htmlData;
        LoadContentErfarenhet(name);
    });
}
function LoadContentErfarenhet(typ){
    var MidLeftCol = document.getElementById("MidLeftCol");
    var MidMidCol = document.getElementById("MidMidCol");
    var MidRightCol = document.getElementById("MidRightCol");

    var list = [];
    if(typ == "Utbildningar"){
        list = utbildningar;
    }
    else if(typ == "Anställningar"){
        list = anställningar;
    }
    else{
        console.log("Error: No array was found.")
    }

    list.forEach(element => {
        var elementDiv = document.createElement("div");
        elementDiv.setAttribute("id", "listRad");
        var plats = document.createElement("text");
        plats.setAttribute("class", "plats");
        plats.textContent = element.Plats;   
        var titel = document.createElement("text");
        titel.setAttribute("class", "titel");
        titel.textContent = element.Titel;
        var årtal = document.createElement("text");
        årtal.setAttribute("class", "årtal");
        årtal.textContent = element.År;
        var beskrText = document.createElement("p");
        beskrText.setAttribute("class", "beskrivning");
        beskrText.textContent = element.Beskrivining;

        elementDiv.appendChild(plats);
        elementDiv.appendChild(titel);
        elementDiv.appendChild(årtal);
        elementDiv.appendChild(beskrText);
        MidMidCol.appendChild(elementDiv);

    });
}
function LoadContentPersonligtBrev(){
    var visningFönster = document.getElementById("VisningsFönster");
    let child = visningFönster.lastElementChild;
    while (child) {
        visningFönster.removeChild(child);
      child = visningFönster.lastElementChild;
    }


    var pb = document.createElement("div");
    pb.setAttribute("id", "pbDiv");
    var pbTitel = document.createElement("text");
    pbTitel.textContent = "Systemutvecklare med kännsla för detalj och problemlösning";
    var pbText = document.createElement("p");
    pbText.textContent = "Hej jag är en..."
}


function LoadContentAnstallningar(){


    console.log("LoadContentAnställningar...")
    console.log("2: " + anstallningsText)
    const regExpression = /(?<=\*).+?(?=\*)/g;
    const result = [...anstallningsText.matchAll(regExpression)];
    console.log(JSON.stringify(result));


    var workListDiv = document.createElement("div");
    workListDiv.setAttribute("id", "workListDiv");

    anstallningar.forEach(jobb => {
        var anställning = document.createElement("div");
        //Lägg till anställning.
        
    });
}

