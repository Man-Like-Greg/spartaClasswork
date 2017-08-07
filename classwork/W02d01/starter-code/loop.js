var engineeringClass = ["greg", "joe", "naren", "melson", "will", "kane", "dino", "melinda","sabirin"]
//-----Simple pring names----
for(var i=0;i<engineeringClass.length;i++) {
  console.log(engineeringClass[i]);
  }

//------ simple print name and stop when greg appears----
  var person = 0
  var currenPerson = "";
  while (engineeringClass[person] !="greg") {
   currenPerson = engineeringClass[person];
   console.log(currenPerson);person++;
  }

  //----- loops for objects in the class room -----
  var classRoom = { 
    cups: 8, macs: 9, books: 5, newsPaper: true, waterColour: "clear"
    
  };
  console.log(classRoom)
  
  for (var keys in classRoom) {
  console.log(keys)
  console.log(classRoom[keys])
  }
