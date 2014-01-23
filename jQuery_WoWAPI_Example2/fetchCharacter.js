$(document).ready(function(){
	// $.ajax({
		// "url": "http://us.battle.net/api/wow/character/aerie-peak/Eldershield",
		// "type": "GET",
		// "data": { fields: "items" },
		// "dataType": "jsonp",
		// "contentType": "application/json",
		// "jsonpCallback": "?",
		// "success": displayCharacterData
	// })
	
	$.getJSON("http://us.battle.net/api/wow/character/aerie-peak/Eldershield?jsonp=?", { fields: "items" }, function(characterData){
		var text = data.name + " is a level " + data.level + " " + (data.gender ? "female" : "male") + " " + races[data.race - 1] +
			" " + classes[data.class - 1] + " on the realm " + data.realm + "."
			
		$("#content").text(text)
	})
})