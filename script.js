let operation = "";
let output ="";

const button = document.querySelectorAll("button");
const results = document.querySelector(".result");

function calculateInput(str){
    output = output.slice(0,-1);
    const strArray = output.split(str);
    const numberArray = strArray.map((tmp)=> +tmp);
    output = operate(str,numberArray[0],numberArray[1]);
}

button.forEach(elt => {
    elt.addEventListener("click", () => {
        //Add text to results
        if(elt.value == "cl"){
            output = "";
            //console.log("empty");
        }
        else{
            output += elt.value;
            //console.log("keep going!");
        }
        results.textContent = output;

        if(elt.value == "="){
            //console.log("equals!");
            //Call operation to the output
            if(output.includes("+")){
                calculateInput("+");
            }
            else if(output.includes("-")){
                calculateInput("-");
            }
            else if(output.includes("*")){
                calculateInput("*");
            }
            else if(output.includes("/")){
                calculateInput("/");
            }

            //Show output in result
            //console.log(output);
            results.textContent = output + "";
        }
    });
});







/*Basic operations--------------------------------------------------*/
function add(a,b){
    //console.log("addition done!");
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        return "ERROR! Dividing by 0";
    } 
    return a/b;
}

/*Calling the operations---------------------------------------------*/
function operate(str,a,b){
    if(str=="+"){
        return add(a,b);
        //console.log("adding right now");
    }
    else if(str=="-"){
        return subtract(a,b);
    }
    else if(str=="*"){
        return multiply(a,b);
    }
    else if(str=="/"){
        return divide(a,b);
    }
    else{
        return "INVALID OPERATION";
    }
}