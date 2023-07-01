let id = 0;
function newElement() {
    var li = document.createElement("li");

    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.className = "closeItem";
    x.id = 'x_' + id;
    li.appendChild(x);

    
    var inputValue = document.getElementById("item").value;
    var r = document.createTextNode(inputValue);
    var t = document.createElement("SPAN");
    t.className = "textValue";
    t.id = 't_' + id;
    t.appendChild(r);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("listOfItems").appendChild(li);
    }
    document.getElementById("item").value = "";

    x.onchange = function () {
        if(x.checked === true) {
            var div = this.parentElement;
            div.style.textDecoration = 'line-through';
        } else {
            var div = this.parentElement;
            div.style.textDecoration = 'none';
        }
    }
}