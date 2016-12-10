var playlist = new Playlist();

var subDivisions = new Song("Sub-Divisions", "Rush", "5:15");
var tomSawyer = new Song("Tom Sawyer", "Rush", "4:30");
var limeLight = new Song("Limelight", "Rush", "5:01");
var goodbye = new Song("Goodbye", "The Sundays", "4:24");

playlist.add(subDivisions);
playlist.add(tomSawyer);
playlist.add(limeLight);
playlist.add(goodbye);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
};
var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
};
var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
};
