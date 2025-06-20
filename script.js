let var1 ="";
let var2 = "";
const integers = "1234567890";
let operation = "";
let output ="";

const button = document.querySelectorAll("button");
const results = document.querySelector(".result");

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
            let strArray = [];
            let numberArray =[];
            output = output.slice(0,-1);

            if(output.includes("+")){
                strArray = output.split("+");
                numberArray = strArray.map((str)=>+str);
                //console.log(numberArray);
                output = operate("+",numberArray[0],numberArray[1]);
                //console.log(output);
            }
            else if(output.includes("-")){
                strArray = output.split("-");
                numberArray = strArray.map((str)=>+str);
                //console.log(numberArray);
                output = operate("-",numberArray[0],numberArray[1]);
            }
            else if(output.includes("*")){
                strArray = output.split("*");
                numberArray = strArray.map((str)=>+str);
                //console.log(numberArray);
                output = operate("*",numberArray[0],numberArray[1]);
            }
            else if(output.includes("/")){
                strArray = output.split("/");
                numberArray = strArray.map((str)=>+str);
                //console.log(numberArray);
                output = operate("/",numberArray[0],numberArray[1]);
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
    if(b==0) return "ERROR! Dividing by 0";
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