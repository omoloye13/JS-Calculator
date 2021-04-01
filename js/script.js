let myInput = document.getElementById('input');

function pushBtn(obj) {
    let pushed = obj.innerHTML;
         
    if (pushed == '=') {
        // Calculate
        myInput.innerHTML = eval(myInput.innerHTML);
         
    } else if (pushed == 'AC') {
        // All Clear
        myInput.innerHTML = '0';
         
    } else {
        if ( myInput.innerHTML == '0') {
            myInput.innerHTML = pushed;
             
        } else {
            myInput.innerHTML += pushed;   
        }
    }
    
}

