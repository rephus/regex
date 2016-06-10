function clearChar(){
    var input = document.getElementsByTagName("textarea")[0];
        input.value='';
}
function addChar(c){
    try{
        var input = document.getElementsByTagName("textarea")[0];
        input.value+=c;
        RegexPal.highlightMatches();
    }
    catch(e){
        alert('Error: '+e);
    }
}
function addReplace2(title1,title2, replacevar1, replacevar2, operation){

    var x = prompt(title1,'');
    if (x==null)x='';
    operation= operation.replace(replacevar1, x);
    var y = prompt(title2,'');
    if (y==null)y='';
    operation = operation.replace(replacevar2, y);
    
    addChar(operation);

}

function addReplace1(title1, replacevar1, operation ){
    var x = prompt(title1,'');
    if (x==null)x='';
    operation = operation.replace(replacevar1, x);
    addChar(operation);
}
