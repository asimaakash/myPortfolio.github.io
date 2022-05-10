console.log("This is my Portfolio");

function showNav(){
    let navLiResp = document.getElementById("respNav");

    if(navLiResp.className==="navLiResp")
    {
        navLiResp.className +=" responsive";
    }
    else{
        navLiResp.className = "navLiResp";
    }
}