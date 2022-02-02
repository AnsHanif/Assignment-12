function Output (result){
    document.getElementById("Text").innerHTML = result;
}


document.getElementById("btn-1").onclick = function(){
    var location = window.location.href;
    Output(location);
}

document.getElementById("btn-2").onclick = function(){
    location = "www.google.com";
}
document.getElementById("btn-3").onclick = function (){
window.location.replace("www.google.com")
}

document.getElementById("btn-4").onclick = function (){
    var Popup = window.open("",'Popup',"width=420,height=380,left=200,right=100")

document.getElementById("btn-5").onclick = function(){
    Popup.document.write("<h1>Hello</h1>")
    // alert()
}
document.getElementById("btn-6").onclick = function(){
    Popup.location.assign("www.facebook.com");
}
document.getElementById("btn-7").onclick = function(){
    Popup.close();
}
}

