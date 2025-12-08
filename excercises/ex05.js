var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];


function makeImage (imageName) {

 if (colors[colorCount] == imageName) {
       $("body").append("<img width=50 src='images/" + imageName + ".png'>");
   }

}

function changeBackground () {
$("body").css("background-color", colors[colorCount]);

}
$(".color-button").click( function () {
 
   changeBackground(this.id);

});


// the button part
 $("#needy-button").click(function () {
   if (count < 5) { mood = "gresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);
<button id="needy-button">Click me! </button>;
<br>
<button class="color-button" id="Orchid">Orchid</button>
<button class="color-button" id="Coral">Coral</button>
<button class="color-button" id="Plum">Plum</button>
<button class="color-button" id="HotPink">HotPink</button>
</br>
  changeBackground();

     makeImage("Coral");
     makeImage ("")
     makeImage ("")
   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});