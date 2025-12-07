let worldTitle = "Transylvania";

// array of characters (simple list)
let peanutsGang = ["Dumitru", "Elga"];

// detailed objects (Dumitru and Elga only)
let Dumitru = {
    name: "Dumitru",
    size: "medium",
    color: "black",
    personality: "brooding, sensitive, curious"
};

let Elga = {
    name: "Elga",
    size: "medium",
    color: "black",
    personality: "dramatic, vivacious, outgoing"
};


$(document).ready(function(){

    // title
    $("#title").append(`<h1>${worldTitle}</h1>`);

    // Dragomir family list
    $("#characters").append(`<h2>Dragomir Family:</h2>`);
    $("#characters").append(`<ul id="dragomirs"></ul>`);
    Dragomirs.forEach(name => {
        $("dragomirs-list").append(`<li>${name}</li>`);
    });

    // detail cards for Dumitru and Elga
    $("#detail").append(`<h2>Details:</h2>`);

    $("#detail").append(`
        <div class="char-card">
            <strong>${Dumitru.name}</strong><br/>
            Size: ${Dumitru.size}<br/>
            Color: ${Dumitru.color}<br/>
            Personality: ${Dumitru.personality}
        </div>
    `);

    $("#detail").append(
        <div class="char-card">
            <strong>${Elga.name}</strong><br/>
            Size: ${Elga.size}<br/>
            Color: ${Elga.color}<br/>
            Personality: ${Elga.personality}
        </div>