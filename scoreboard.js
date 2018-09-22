window.onload = function(){
    fetch('http://localhost:6969/board/getLeaderboard')
.then(response => response.json())
.then(data => {
  console.log(data);
  var users = data;

for (var i = 0; i < users.length; i++){
  // Entry box
  var entry = document.createElement("li");

  // Image Div
  var imageDiv = document.createElement("div");
  var name = document.createTextNode(users[i].username);
  imageDiv.className = "graphic";

  // Image Tag
  var image = document.createElement("img");
  image.src = users[i].image;

  imageDiv.appendChild(image);

  //Append Image to Entry box
  entry.appendChild(imageDiv);

  // Details div
  var detailsDiv = document.createElement("div");
  detailsDiv.className = "name";
  
  // Name Span
  var nameSpan = document.createElement("span");
  var name = document.createTextNode(users[i].username);
  nameSpan.className = "header";
  
  // Append name to name span
  nameSpan.appendChild(name);

  // Append name span to the details div
  detailsDiv.appendChild(nameSpan);

  // Points Span
  var pointSpan = document.createElement("span");
  var points = document.createTextNode(users[i].points);
  pointSpan.className = "stat";

  // Append points to point span
  pointSpan.appendChild(points);

  // Append point span to the details div
  detailsDiv.appendChild(pointSpan);

  // Title Span
  var titleSpan = document.createElement("span");
  var title = document.createTextNode("points");
  titleSpan.className = "sub";

  // Button div
  var buttonDiv = document.createElement("div");
  buttonDiv.className = "name";

  // Buttons
  var upButton = document.createElement("button");
  upButton.onclick = function() { alert('blah'); };
  var upText = document.createTextNode("Upload");
  var downButton = document.createElement("button");
  var downText = document.createTextNode("Downvote");
  upButton.appendChild(upText);
  downButton.appendChild(downText);

  // Append button to div
  buttonDiv.appendChild(upButton);
  buttonDiv.appendChild(downButton);

  // Append title to title span
  titleSpan.appendChild(title);

  // Append title span to the details div
  detailsDiv.appendChild(titleSpan);

  entry.appendChild(buttonDiv);
  entry.appendChild(detailsDiv);

  var element = document.getElementById("table");
  element.appendChild(entry);
  
}
  
})
.catch(error => console.error(error))
}

document.getElementById("myBtn").addEventListener("click", alert("HELLO"));

function upvote() {
  alert("Upvote");
}

function downvote() {
  alert("Downvote");
}
