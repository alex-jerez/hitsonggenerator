WebFontConfig = {
    google: { families: [ 'Permanent+Marker::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

var element = document.getElementById( 'footer' );

var images = ['1', '2', '3', '4', '5'];
var credit = new Array();
credit[0] = "13/52 my first bokeh by "
 + "<a href=\"http://www.flickr.com/photos/iloveblue/\">Scarleth White</a>";
 credit[1] = "Dreamstate by <a href=\"http://www.flickr.com/photos/booleansplit\">"
 + "Robert Donovan</a>";
 credit[2] = "Hands by <a href=\"http://www.flickr.com/photos/goincase/\">"
 + "Incase</a>";
 credit [3] = "Shaka Ponk @ FÃªte de l’Humanit by <a href=\""
 + "http://www.flickr.com/photos/didy_b/\">" + "didy b</a>"
 credit[4] = "TOYBLOID @ FeÌ‚te de l’HumaniteÌ by <a href=\""
 + "http://www.flickr.com/photos/didy_b/\">" + "didy b</a>"


var props = ["song", "artist", "featuring"]; 
var v = ["$s", "$a", "$f"];

var songtitle = new Array ();
songtitle[0] = "Young Tonight";
songtitle[1] = "On The Ground";
songtitle[2] = "Hands in the Air";
songtitle[3] = "Molly";
songtitle[4] = "Up in the Club";
songtitle[5] = "Phone Sex";
songtitle[6] = "One Chance";
songtitle[7] = "Birthday Love";
songtitle[8] = "Basic Bitch";
songtitle[9] = "Round The World 2ite";
songtitle[10] = "C.A.$.H.";
songtitle[11] = "POUND";
songtitle[12] = "Hashtag Queen"


var artist = new Array ();
artist[0] = "Pitbull";
artist[1] = "Nicki Minaj";
artist[2] = "Kanye West";
artist[3] = "J-Lo"
artist[4] = "Rihanna";
artist[5] = "Drake";
artist[6] = "Iggy Azalea";
artist[7] = "Ariana Grande";
artist[8] = "Chris Brown";
artist[9] = "Usher";

function setVariable(a1, a2){
    if (props.indexOf(a2) > -1){
        if(typeof a1 === 'undefined'){}
            else{
                var id = v[props.indexOf(a2)];
                console.log("a1:" + a1);
                console.log("a2:" + a2);
                if (songtitle.indexOf(a1) > -1 || artist.indexOf(a1) > -1){
                 window[id] = a1;
             }
             else {}
}
    }
    else{
    }

}

$s = document.getElementById('song');
$a = document.getElementById('artist');
$f = document.getElementById('featuring');
$c = document.getElementById('credit');

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var i = getRandom(0, songtitle.length);
var q1 = getRandom(0, artist.length);
var q2 = getRandom(0, artist.length);
while (q1 == q2) {
    var q2 = getRandom(0,artist.length);
}
var bgpic = Math.floor(Math.random()*images.length);
$('body').css({'background': 'url(img/bg' + images[bgpic] + '.jpg) no-repeat center center fixed'});
$('body').css({'-webkit-background-size': 'cover'});
$('body').css({'moz-background-size': 'cover'});
$('body').css({'-o-background-size': 'cover'});
$('body').css({'background-size': 'cover'});

$('#info').click(function() {
    $(element).slideToggle();

});

$('#newsong').click(function(){
    location.reload();
    i = getRandom(0, songtitle.length);
    q1 = getRandom(0, artist.length);
    q2 = getRandom(0, artist.length);
})

$s.innerHTML = songtitle[i];
$a.innerHTML = artist[q1];
$f.innerHTML = artist[q2];
$c.innerHTML = credit[bgpic];

$(document).ready(function()
{
    $(element).hide();
    var $fulltext = "\"" + $s.innerHTML + "\" by " + $a.innerHTML + " ft " + $f.innerHTML;
    var twtbutton = document.getElementById("tweet");
        twtbutton.setAttribute("data-text", String($fulltext + " #HitSongGenerator" + " bit.ly/1oXHvZf"));
});