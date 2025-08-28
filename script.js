document.querySelector('input[type="button"]').addEventListener("click", function() {
    let colorSelect = document.getElementById("colorSelect");
    for (let i = colorSelect.options.length - 1; i >= 0; i--) {
        if (colorSelect.options[i].selected) {
            colorSelect.remove(i);
        }
    }
});
