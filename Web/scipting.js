document.getElementById("snare").addEventListener("click",kick);
function kick()
{
  var x=this.innerHTML;
  console.log(x);
  switch(x)
  {
    case "k":
    var a=new Audio("kick.wav");
    a.play();
    break;
    default:
}
}


function buttonClick()
{
  var x=document.getElementsByName("btn1");
  for(var i=0;i<x.length;i++)
  {
    if(x[i].checked)
    {
      var c=x[i].value;
      document.getElementById("div1").style.backgroundColor= c;
    }
  }
}
function changing(x)
{
  var c=x.value;
    document.body.style.backgroundColor= c;
}

document.addEventListener("keypress",function()
{
  if(event.key=="k")
  {
  var a=new Audio("kick.wav");
  a.play();
}
});
