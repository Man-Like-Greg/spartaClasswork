//finding an array in elements
// var selected = document.querySelectorAll("li.selected");
// console.log(selected);

// // selected[0].innerHTML = "Hello Greg";

// for (var i=0; i < selected.length; i++) {
// 	selected[i].innerHTML = "Hello Greg";
// }

// Adding a new element

// var pTag = document.createElement("p");

// pTag.innerHTML = "THIS is a NEW pTag";

// document.body.appendChild(pTag);

// document.getElementById("wrapper").appendChild(pTag);

var list = ["Niall", "Ollie", "Richard", "Steve", "Tim", "Alastar", "Lexie"]
var ul = document.getElementById("list")
// console.log(ul)
function addNewLi(text) {
	var newLi = document.createElement("li");
	newLi.innerHTML = text;
	ul.appendChild(newLi)
	// body...
}
for (var i=0; i < list.length; i++) {
     addNewLi(list[i])
    }
      console.log(list[i])

var allTheListItems = document.getElementsByTagName("li");
for (var i=0; i < allTheListItems.length; i++) {
	if (i % 2 === 0) {
		allTheListItems[i].classList.add("even")
	}
}

var countSpan = document.getElementById("count");
countSpan.innerHTML = allTheListItems.length;

// var selected = document.querySelectorAll("li.selected");
// console.log(selected);
// selected[0].innerHTML = "Niall";
// selected[1].innerHTML = "Ollie";
// selected[2].innerHTML = "Richard";

// var li = document.createElement()


