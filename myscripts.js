const inputBox =document.getElementById("inputbox");
const listContent =document.getElementById("listcontent");
function addtask() {
    if (inputbox.value.trim() === '') {
        alert("You must write something!");
    }
    else {
        let Li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontent.appendChild(li);
    }
}
