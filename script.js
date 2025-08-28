document.querySelector('input[type="button"]').addEventListener("click", function() {
    let colorSelect = document.getElementById("colorSelect");
	let selectIndex = colorSelect.selectedIndex;
	if(selectIndex !== -1){
		colorSelect.remove(selectIndex);
	}
});
