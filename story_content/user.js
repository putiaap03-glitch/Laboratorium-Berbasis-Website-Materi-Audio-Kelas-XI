function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6IDyGuo3ooz":
        Script1();
        break;
      case "6pUMFbM4fbp":
        Script2();
        break;
      case "68E3jk7fIJR":
        Script3();
        break;
      case "6JZCqxXFMwj":
        Script4();
        break;
      case "62wbvvJKXS0":
        Script5();
        break;
      case "6NUbSCRkM1t":
        Script6();
        break;
      case "6K9RG6hYlNU":
        Script7();
        break;
      case "5tMVzUhPzX0":
        Script8();
        break;
      case "6TVYmCMhnwX":
        Script9();
        break;
      case "6gXaWa287Cy":
        Script10();
        break;
      case "6do9Z8AbUmt":
        Script11();
        break;
      case "5W34HOpPrQO":
        Script12();
        break;
      case "6JoFHDcfqVM":
        Script13();
        break;
      case "6e0cHxC8z3j":
        Script14();
        break;
      case "6iNPs0LTVRW":
        Script15();
        break;
      case "5ibzVKgwzjE":
        Script16();
        break;
      case "6Ki1BAnZpjc":
        Script17();
        break;
      case "6QRbfW7zUI5":
        Script18();
        break;
      case "62MuoGfV8Ld":
        Script19();
        break;
      case "5fjgPtRmvnc":
        Script20();
        break;
      case "5xM6oq8lHBj":
        Script21();
        break;
      case "5o0k1uA2CiJ":
        Script22();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}
}

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src= Location + "musik saya.mp3";
audio.load();
audio.play();
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script7()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src= Location + "musik saya.mp3";
audio.load();
audio.play();
}

function Script8()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}
}

function Script9()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src= Location + "musik saya.mp3";
audio.load();
audio.play();
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script13()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script14()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src= Location + "musik saya.mp3";
audio.load();
audio.play();
}

function Script15()
{
  // Mengambil elemen audio yang sudah dibuat di script utama (id="bgSong")
var audio = document.getElementById('bgSong');

// Cek apakah elemen audio ada, lalu hentikan (pause)
if (audio) {
    audio.pause();
}
}

function Script16()
{
  // Mengambil elemen audio yang sudah dibuat di script utama (id="bgSong")
var audio = document.getElementById('bgSong');

// Cek apakah elemen audio ada, lalu hentikan (pause)
if (audio) {
    audio.pause();
}
}

function Script17()
{
  var audio = document.getElementById('bgSong');
if (audio) {
    audio.play();
}
}

function Script18()
{
  // Mengambil elemen audio yang sudah dibuat di script utama (id="bgSong")
var audio = document.getElementById('bgSong');

// Cek apakah elemen audio ada, lalu hentikan (pause)
if (audio) {
    audio.pause();
}
}

function Script19()
{
  // Mengambil elemen audio yang sudah dibuat di script utama (id="bgSong")
var audio = document.getElementById('bgSong');

// Cek apakah elemen audio ada, lalu hentikan (pause)
if (audio) {
    audio.pause();
}
}

function Script20()
{
  var audio = document.getElementById('bgSong');
if (audio) {
    audio.play();
}
}

function Script21()
{
  // Mengambil elemen audio yang sudah dibuat di script utama (id="bgSong")
var audio = document.getElementById('bgSong');

// Cek apakah elemen audio ada, lalu hentikan (pause)
if (audio) {
    audio.pause();
}
}

function Script22()
{
  var audio = document.getElementById('bgSong');
if (audio) {
    audio.play();
}
}

