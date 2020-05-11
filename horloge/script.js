var h,m,s;
function clock(){
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    document.getElementById("hour").style.transform = "rotate(" + (h/12)*360 + "deg)";
    document.getElementById("min").style.transform = "rotate(" + (m/60)*360 + "deg)";
    document.getElementById("sec").style.transform = "rotate(" + (s/60)*360 + "deg)";

}

setInterval(clock,1000);