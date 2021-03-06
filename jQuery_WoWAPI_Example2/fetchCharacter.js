// Race and class mappings taken from https://github.com/vishnevskiy/battlenet/blob/master/battlenet/enums.py
var races = [
	'Human',
	'Orc',
	'Dwarf',
	'Night Elf',
	'Undead',
	'Tauren',
	'Gnome',
	'Troll',
	'Goblin',
	'Blood Elf',
	'Draenei',
	'Worgen',
	'Pandaren (N)',
	'Pandaren (A)',
	'Pandaren (H)',
]

var classes = [
	'Warrior',
	'Paladin',
	'Hunter',
	'Rogue',
	'Priest',
	'Death Knight',
	'Shaman',
	'Mage',
	'Warlock',
	'Monk',
	'Druid',
]

$(document).ready(function(){
	
	$.getJSON("http://us.battle.net/api/wow/character/aerie-peak/Eldershield?jsonp=?", { fields: "items" }, function(data){
		var text = data.name + " is a level " + data.level + " " + (data.gender ? "female" : "male") + " " + races[data.race - 1] +
			" " + classes[data.class - 1] + " on the realm " + data.realm + "."
			
		$("#content").text(text)
	})
	
})