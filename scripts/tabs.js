window.onload=function() {

    // get tab container
    var container = document.getElementById("tabContainer");
    // set current tab
    var navitem = container.querySelector(".tabs ul li");
    //store which tab we are on
    var ident = navitem.id.split("_")[1];
    navitem.parentNode.setAttribute("data-current",ident);
    //set current tab with class of activetabheader
    navitem.setAttribute("class","tabActiveHeader");

    //hide two tab contents we don't need
    var pages = container.querySelectorAll(".tabpage");
    for (var i=1; i < pages.length; i++) {
        pages[i].style.display="none";
    }

    //this adds click event to tabs
    var tabs = container.querySelectorAll(".tabs ul li");
    for (var i=0; i < tabs.length; i++) {
        tabs[i].onclick=displayPage;
    }
    
    //initialize the textarea
    var textarea = document.getElementsByTagName("textarea");
    textarea[1].value=text[0];
    textarea[1].disabled = ident!=4;
}

// on click of one of tabs
function displayPage() {
    try{
        var ident = this.id.split("_")[1];

        //change the textarea text
        var textarea = document.getElementsByTagName("textarea");
        textarea[1].value=text[ident-1];//.removeAttribute("class");
        //set the custom to no-readonly
        textarea[1].disabled = ident!=4;
    
        //change the header
        var current = this.parentNode.getAttribute("data-current");
        document.getElementById("tabHeader_" + current).removeAttribute("class");
        this.setAttribute("class","tabActiveHeader");
        this.parentNode.setAttribute("data-current",ident);
        
        RegexPal.highlightMatches();
    }
    catch(e){
        alert('Error: '+e);
    }
}
