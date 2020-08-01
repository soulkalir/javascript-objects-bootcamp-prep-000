var playlist = {
  
  kirkorov : "edinstvennaya moya",
  madonna: "frozen",
};


function updatePlaylist(playlist, artist, song){
playlist[artist] = 'ladyGaga';
return playlist;
}


function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist;
}