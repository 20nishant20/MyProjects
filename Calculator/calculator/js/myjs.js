var firstpart = 0;
var secondpart = "0";
var op = 0;
var dot=0;


function deleted(del){

    var screen= document.getElementById("screen");
    screen.value='';
    op=0;
    firstpart="0";
    secondpart="0";
    del=0;



}
function dots(dt){

    if(dot ==0){
        var screen = document.getElementById("screen");
        screen.value+=dt;

        // dot="alrdy_pressed" // this is to avoid pressing it 2 times as "if condition wld not work if the value of dot is not 0"
    }
    
    else{
        return;
    }


}

function myfunction(num) {

    var screen = document.getElementById("screen");
    // for better understanding read from else if part...


    if (num=="=") {

        var all = screen.value.split(" ");

        firstpart = parseFloat(all[0]);
        op = all[1];
        secondpart = parseFloat(all[2]);

        // console.log(firstpart,secondpart,op);
        var screen = document.getElementById("screen");

        if (secondpart == 0) {
            screen.value = "Division By Zero!!";
        }
        switch (op) {
            case '+':
                result = firstpart + secondpart;
                screen.value = result;
                break;

            case '-':
                result = firstpart - secondpart;
                screen.value = result;
                break;

            case '*':
                result = firstpart * secondpart;
                screen.value = result;
                break;

            case '/':
                result = firstpart / secondpart;
                screen.value = result;
                break;

            case '%':
                result = firstpart % secondpart;
                screen.value = result;
                break;

            default:
                screen.value = "Errrrrrrrrooorr!!";
                break;
        }




    } else if (screen.value == "0" && num == "0") {
        return null;
    } else if (screen.value == "0" && !((num == "*" || num == "/") || ((num == "+" || num == "-") || (num == "%")))) {
        screen.value = num;
    } else if (!((num == "*" || num == "/") || ((num == "+" || num == "-") || (num == "%")))) {
        screen.value += num;
    } else if (op == "0" && ((num == "*" || num == "/") || ((num == "+" || num == "-") || (num == "%")))) {
        screen.value += " ";
        screen.value += num;
        screen.value += " ";
        op = num;
    } else {
        return;
    }



}