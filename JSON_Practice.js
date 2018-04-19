var but=document.getElementById("but");
var info=document.getElementById("info");
but.addEventListener("click",getJASONData());

function reqListener () {
  var data=JSON.parse(this.responseText);
  var stringData="";
  for(var i=0; i<data.length;i++){
    stringData+="<p>"+data[i].name+"is a "+data[i].species+".</p>"
  }
  info.insertAdjacentHTML("beforeend",stringData );
}

function getJASONData(){
var ourRequest=new XMLHttpRequest();
ourRequest.addEventListener("load", reqListener);
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.send();
}