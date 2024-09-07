let v=document.getElementById("gridCheck")
let sh=document.getElementById("show")
sh.setAttribute("style","display:none;")
let cnt=0
v.onclick=function(){
if(cnt%2==0)
sh.setAttribute("style","display:visible;")
else 
sh.setAttribute("style","display:none;")
cnt=cnt+1
}