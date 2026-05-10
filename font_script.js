function changeFont(font_size) {
	var text_field = document.getElementById("font_test_field");
	text_field.style.fontWeight = font_size;
}
function changePreview(font_size) {
	var font_preview = document.getElementById("font_preview");
	font_preview.style.fontWeight = font_size;
}
function changeOverview(weight) {
	var font_overview = document.getElementById("font_overview");
	console.log(weight);
	const fileMap = {
		900: "Level_4.svg",
		700: "Level_3.svg",
		400: "Level_2.svg",
		100: "Level_1.svg"
	};

	if (fileMap[weight]) {
		font_overview.src = `FontGallery/${fileMap[weight]}`;
		console.log(weight);
	} else {
		console.log("default case executed");
	}
}
