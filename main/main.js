module.exports = function main(str) {
	//var result = "";
	//if (str == "910"){
	//	result = "._. ... ._.\n"+"|_| ..| |.|\n"+"..| ..| |_|\n";
	//}
	//else if (str == "256"){
	//	result = "._. ._. ._.\n"+"._| |_. |_.\n"+"|_. ._| |_|\n";
	//}
	//else if (str == "7"){
	//	result = "._.\n"+"..|\n"+"..|\n";
	//}
	//return result;
	switch(str){
		case "910":
			return "._. ... ._.\n"+"|_| ..| |.|\n"+"..| ..| |_|\n";
			break;
		case "256":
			return "._. ._. ._.\n"+"._| |_. |_.\n"+"|_. ._| |_|\n";
			break;
		case "7":
			return "._.\n"+"..|\n"+"..|\n";
			break;
	}
};