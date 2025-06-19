/*Basic operations--------------------------------------------------*/
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0) return "ERROR! Dividing by 0";
    return a/b;
}

/*Calling the operations---------------------------------------------*/
function operate(str,a,b){
    if(str=="add"){
        add(a,b);
    }
    else if(str=="subtract"){
        subtract(a,b);
    }
    else if(str=="multiply"){
        multiply(a,b);
    }
    else if(str=="divide"){
        divide(a,b);
    }
    else{
        return "INVALID OPERATION";
    }
}