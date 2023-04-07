$(document).ready(function() {
    $.get("https://rickandmortyapi.com/api/character", function(data) {
    let characters = data.results;
    let characterList = "";
  
      for (let i = 0; i < characters.length; i++) {
        characterList += '<div class="character"><a class="link" href="character.html?id=' + characters[i].id + '">';
        characterList += '<h3>' + characters[i].name + '</h3>';
        characterList += '<img src="' + characters[i].image + '">';
        characterList += '<p>' + characters[i].status + '</p>';
        characterList += '</a></div>';
      }
  
      $("#characters").html(characterList);
    });
});
