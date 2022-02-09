function openDiscModal() {
  document.getElementById("discModal").style.display = "block";
}

function closeDiscModal() {
  document.getElementById("discModal").style.display = "none";
}

var artworkIndex = 1;
showArtwork(artworkIndex);

function plusArtwork(n) {
  showArtwork(artworkIndex += n);
}

function currentArtwork(n) {
  showArtwork(artworkIndex = n);
}

function showArtwork(n) {
  var i;
  var artwork = document.getElementsByClassName("Artwork");
  if (n > artwork.length) {artworkIndex = 1}
  if (n < 1) {artworkIndex = artwork.length}
  for (i = 0; i < artwork.length; i++) {
      artwork[i].style.display = "none";
  }
  artwork[artworkIndex-1].style.display = "block";
}