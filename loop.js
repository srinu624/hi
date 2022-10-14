const names=["srinu","suresh","rajesh"];
let text="<ul>";
<p id="demo"></p>
for(i=0;i<names.length;i++)
{
    text +="<li>"+names[i] +"</li>";
}
text+="</ul>";
document.getElementById("demo").innerHTML=text;


