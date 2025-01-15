
function updateclock(){
    const now=new Date();
    let hours =now.getHours().toString().padStart(2,0);
    const midDay=hours >= 12? "PM":"Am";
    hours=hours %12 || 12;
    const minutes=now.getMinutes().toString().padStart(2,0);
    const second=now.getSeconds().toString().padStart(2,0);
    const timestring=`${hours}:${minutes}:${second}:${midDay}`
    document.getElementById("clock").textContent=timestring;
}
updateclock();
setInterval(updateclock,1000);