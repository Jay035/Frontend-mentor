const firstDisplay = document.querySelector('.display-1');
const secondDisplay = document.querySelector('.display-2');
const temporaryDisplay = document.querySelector('.temp-result');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const clearLast = document.querySelector('.last-entity-clear');
const clearAll = document.querySelector('.all-clear');
const themetoggler = document.getElementById('theme-toggle');
const whiteText = document.querySelectorAll('.white')
const body = document.querySelector('body');
const display = document.getElementById('display');
const button = document.getElementById('btns');
const checkOne = document.getElementById('toggleOne');
const checkTwo = document.getElementById('toggleTwo');
const checkThree = document.getElementById('toggleThree');

let displayOne = '';
let displayTwo = '';
let dot = false;
let result = '';
let lastOperation = '';

checkOne.addEventListener('change', function() {
    if(this.checked){
        trans()
        document.documentElement.setAttribute('data-theme', 'blue')
    }
    
})
checkTwo.addEventListener('change', function() {
    if(this.checked){
        trans()
        document.documentElement.setAttribute('data-theme', 'milky')
    }
    
})
checkThree.addEventListener('change', function() {
    if(this.checked){
        trans()
        document.documentElement.setAttribute('data-theme', 'purple')
    }
    
})

 let trans = () => {
     document.documentElement.classList.add('transition');
     window.setTimeout(() => {
         document.documentElement.classList.remove('transition');

     },1000)
 }

numbers.forEach(number => {
    number.addEventListener('click', (e)=>{ 
        if(e.target.innerText ===  '.' && !dot){
            dot = true;
        }
        else if(e.target.innerText === '.' && dot){
            return;
        }
        displayTwo += e.target.innerText;
        secondDisplay.innerText = displayTwo;
    })
})

// <<<<<<< HEAD

// =======
operations.forEach(operation =>{
    operation.addEventListener('click', (e)=>{
        
        if(!displayTwo) result;
        dot = false;
        const operationName = e.target.innerText;

        if(displayOne && displayTwo && lastOperation){
            mathOperation()
        }
        else{
            result = parseFloat(displayTwo)
        }
        displayOne += displayTwo + ' '  + e.target.innerText;
        firstDisplay.innerText = displayOne;
        secondDisplay.innerText = ' ';
        
        displayTwo = ' '
        clearVal(operationName);
        lastOperation = operationName;
    })
})

function clearVal(){
    secondDisplay.innerText = ' '
    displayTwo = ' '
    console.log(result)
    temporaryDisplay.innerText = result;
}

function mathOperation(){
    if(lastOperation === 'x'){
        result = parseFloat(result) * parseFloat(displayTwo);
    }
    else if (lastOperation === '+'){
        result = parseFloat(result) + parseFloat(displayTwo);
    }
    else if (lastOperation === '-'){
        result = parseFloat(result) - parseFloat(displayTwo);
    }
    else if (lastOperation === '/'){
        result = parseFloat(result) / parseFloat(displayTwo);
    }
}

equal.addEventListener('click', (e)=>{
    if(!displayOne || !displayTwo) return;

    mathOperation();
    clearVal();
    secondDisplay.innerText = result;
    temporaryDisplay.innerText = ''
    displayTwo = result;
    firstDisplay.innerText = '';
    displayOne = ''

})
clearLast.addEventListener('click', (e)=>{
    secondDisplay.innerText = ''
    displayTwo = ''
})

clearAll.addEventListener('click', (e)=>{
    secondDisplay.innerText = '0'
    displayTwo = ''
    temporaryDisplay.innerText = '0';
    firstDisplay.innerText = '0';
    displayOne = ''
})

// if(window.matchMedia('(prefers-color-scheme)').media !== 'not all'){
//     console.log('Dark mode is supported');
// }


