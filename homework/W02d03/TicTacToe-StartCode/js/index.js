var boxes = $("td");
$(function (event) {

	$(boxes).each(function(index, box){
	  console.log($(box).attr("data-num"));
	})

})