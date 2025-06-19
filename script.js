let var1 ="";
let var2 = "";
let operation = "";
let output ="";

const button = document.querySelectorAll("button");
const results = document.querySelector(".result");

button.forEach(elt => {
    elt.addEventListener("click", () => {
        //Add text to results
        output += elt.value;
        results.textContent = output;
        if(elt.value == "="){
            //Call operation to the output
            output = "";
            //Show output in result
            results.textContent = output;
        }
    });
});







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