const counting = document.querySelector("#counting");
const addBtn = document.querySelector("#AddOneBtn");
const saveBtn = document.querySelector("#SaveBtn");
const storeCounting = document.querySelector("#storeCounting");

addBtn.addEventListener("click", function () {
    counting.innerHTML = +counting.innerHTML + 1;
    saveBtn.classList.add("btn-filled-bg");
    saveBtn.classList.remove("bg-red");
})

saveBtn.addEventListener("click", function () {
    if (counting.innerHTML == 0) {
        saveBtn.classList.remove("btn-filled-bg");
        saveBtn.classList.add("bg-red");
        // alert("Add some value!")
    } else if (counting.innerHTML != 0) {
        if (storeCounting.innerHTML == 0) {
            storeCounting.innerHTML = counting.innerHTML;
        } else if (storeCounting.innerHTML != 0) {
            storeCounting.innerHTML += ", " + counting.innerHTML;
        }
    }
    counting.innerHTML = 0;
})