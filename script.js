//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener("click",function(){
	let colorSelect = document.getElementById("colorSelect");
	let selectIndex = colorSelect.selectIndex;
	if(selectIndex !== -1){
		colorSelect.remove(selectIndex);
	}
});

