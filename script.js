console.log("This is my Portfolio");

function showNav(){
    let navLiResp = document.getElementById("navLiResp");

    if(navLiResp.className==="navLi")
    {
        navLiResp.className +=" resopnsive";
    }
    else{
        navLiResp.className = "navLi";
    }
}