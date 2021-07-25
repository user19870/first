function home() {
  var req=new XMLHttpRequest()
  req.open("get","https://nani-2048.upad12.com")
  req.onlaod=function(){
    var a=document.getElementById("a")
    a.innerText=this.responseText
    alert(this.responseText)
  };
  
  req.send();
  

}
function a(){
var han=function(){
  alert("9")
}
a.addEventlistener("home",han)
}
