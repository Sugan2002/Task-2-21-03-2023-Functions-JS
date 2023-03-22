const gen = {
	"-3": ["Great Grandfather",	"Great Grandmother"],
	"-2": ["Grandfather","Grandmother"],
	"-1":["Father",	"Mother"],
	"0": ["Me!", "Me!"],
	"1":["Son",	"Daughter"],
	"2"	:["Grandson","Granddaughter"],
	"3" :["Great Grandson","Great Granddaughter"]
}
function generation(x, y) {
	return y=="m"?gen[x][0]:gen[x][1];
}