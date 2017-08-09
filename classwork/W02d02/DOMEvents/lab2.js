
document.addEventListener('DOMContentLoaded',function(){
	var form = document.getElementById("myForm");
	var firstnameField= document.getElementById("firstname");

	form.addEventListener("submit",function(){
	    event.preventDefault();
	    newDiv(firstnameField.value)
	    if (!firstnameField.value) {
        	console.log("you must enter firstname")
        }
	})

	function newDiv(text){
	    var newDiv= document.createElement("div");
	    newDiv.className="save";
	    newDiv.innerHTML=text;
	    document.body.appendChild(newDiv);
	}
})
