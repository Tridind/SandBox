var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(xhttp.responseText);
    var pilots = response.pilots;
    console.log(response.pilots)
    var output = '';

    for(var i = 0;i < pilots.length;i++){
      //console.log(people[i].name);
      output += '<div class="panel panel-success col-md-4">' + '<div class="panel-heading">'+ pilots[i].name + '<div class="panel-body">' + pilots[i].text + '</div>' + '</div>' + '</div>';

    }
    document.getElementById('main').innerHTML = output;
  }
};
xhttp.open("GET", "xwing-data/data/pilots.js", true);
xhttp.send();
