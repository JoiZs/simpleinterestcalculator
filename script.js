// Compute function for a interest rate with user's inputs
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    // Check user's valid inputs amout
    if(principal <= 0){
        // Send alert if invalid amount and focus back to the amount input
        window.alert("Enter a positive number")
        document.getElementById("principal").focus()
    }else{
        // If inputs are valid, the calculation steps will process
        document.getElementById("result").innerHTML = `
              If you deposit <mark>${principal}</mark>,<br>
            at an interest rate of  <mark>${rate} % </mark>.<br>
            You will receive an amount of <mark>${interest}</mark>,<br>
            in the year <mark>${year}</mark>
            `
        }
}

// Update on change rate on html view
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval + " %"
}
        