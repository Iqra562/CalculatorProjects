///////////////////////////////
// user's  budget Form variables //
//////////////////////////////
const calculteButton = document.getElementById("budget-submit");
const budgetInput = document.getElementById("budget-input");

///////////////////////////////
// user's  expenses Form variables //
//////////////////////////////
const expenseSubmit = document.getElementById("expense-submit");
const expenseText = document.getElementById("expense-text");
const expenseValue = document.getElementById("expense-value");

// BUDGET AMOUNT Element
const budgetAmount = document.getElementById("budget-amount");

// EXPENSE AMOUNT Element
const expenseAmount = document.getElementById("expense-amount");

// BALANCE AMOUNT Element
const balanceAmount = document.getElementById("balance-amount");
// APPENDING ELEMENT'S PARENT  VARIABLE 
const expenseOuter = document.querySelector(".expense-outer");




// function to get user's budget value and print it into budget html  '[start]//
calculteButton.addEventListener('click',functionOnCalculateButton);

function functionOnCalculateButton(event){
event.preventDefault();
// alert(budgetInput.value);
if(!budgetInput.value ){
        alert('Please enter your budget');
    return;

}else if(budgetInput.value < 0){
    alert('Wrong Input');
    return;

}
const budgetInputValue = budgetInput.value;
budgetAmount.innerHTML = budgetInputValue;
     
};
/*function end */

// function on Expense Button  to print expense info and count expenses ad total balnce amount  [start] /
expenseSubmit.addEventListener('click',expenseAdd);
function expenseAdd(event){
    event.preventDefault();
    if(parseFloat(budgetAmount.innerHTML) === 0){
        alert('Please enter your budget first');
        return;
    
    }else if(!expenseValue.value  && (!expenseText.value  || expenseText.value.trim() === '')){
        alert('Input Feilds are empty');
        return;
    
    }else if(!expenseValue.value){
        alert('Enter your expense amount');
        return;
    
    
    }else if (!expenseText.value || expenseText.value.trim() === '') {
    alert('Write your title of expense');
    return;
}  else if(expenseValue.value < 0){
        alert('Wrong Input');
        return;
    
    }
const  budgetAmountCalculation1 = parseFloat(budgetAmount.innerHTML);
const  expenseAmountCalculation1 = parseFloat(expenseAmount.innerHTML);
if((parseFloat(expenseValue.value) + expenseAmountCalculation1 )> budgetAmountCalculation1 || budgetAmountCalculation1 === 0 || expenseAmountCalculation1 == budgetAmountCalculation1 ){
    alert('Your budget has been met');
    return ;
    
};
// alert(expenseText.value + expenseValue.value);

const createElemennt =document.createElement('div');
createElemennt.className="expense";
createElemennt.innerHTML +=`
<div class="expense-item d-flex justify-content-between align-items-baseline">

<h6  class="expense-title mb-0 text-uppercase list-item" >- <span id="expense-title">   ${expenseText.value} </span></h6>
<h5 class="expense-amount mb-0 list-item"> ${expenseValue.value}</h5>

<div class="expense-icons list-item">

 
 <a href="#" id="delete-icon">
  <i class="fas fa-trash"></i>
 </a>
 </div>
 </div>
 `
//  outer element to append user expenses information 
expenseOuter.append(createElemennt);
// fucntion when user delete list item 
deleteElement();
// function when user update expenses 
updateExpenseTitle();
updateExpenseValue();
// function to calculate expenses and balance
calculateExpenseAndBalance();
// expenseValue.value === "";
// expenseText.value === "";
}
/*function end */
//  closure function to count expenses of list element and calculation of balance amount [start] //
function calculateExpenseAndBalance(){
    let expenseFunction =(function(){
        let sum = 0;
        return function(){
           const expenses = document.querySelectorAll('.expense-amount');
           expenses.forEach(function(eachValue){
               // console.log(eachValues.innerHTML);
               //   sum +=eachValues.innerHTML; 
            sum +=parseFloat(eachValue.innerHTML); 
           })
           // console.log(sum,"sum");
           return  sum;
       }
       
   })();

   expenseAmount.innerHTML = expenseFunction();
   
   // closure end //
   
   const  expenseAmountCalculation = parseFloat(expenseAmount.innerHTML);
   const  budgetAmountCalculation = parseFloat(budgetAmount.innerHTML);
   balanceAmount.innerHTML = parseFloat(budgetAmountCalculation - expenseAmountCalculation);
   
}
// end //
// function on delete item [start]//
function deleteElement(){
    const deleteItem = document.querySelectorAll('#delete-icon i');
    // console.log(deleteElement)
    deleteItem.forEach(function(eachDeleteElement){
    //  console.log(eachDeleteElement)
eachDeleteElement.addEventListener('click',removeElement);
})
}

function removeElement(event){
    event.preventDefault();
    const deleteElement = event.target;
    if(confirm("are you sure?")){
        // deleteElement.parentElement.parentElement.parentElement.parentElement.remove();
        deleteElement.closest('.expense').remove();
    }
    // function to calculate expenses and balance after when user delete any list of expense
    calculateExpenseAndBalance();

}
// function on delete item [end]//
// function to update expense title[start]//
function updateExpenseTitle() {
    // let isInputEditing = false;

    const listTitle = document.querySelectorAll('#expense-title');
    listTitle.forEach(function (eachElementA) {
        eachElementA.addEventListener('dblclick', function (event) {
        // alert(event.target.innerHTML,'title')
            // if (!isInputEditing) {
                // isInputEditing = true;

                const previousValue = eachElementA.innerHTML;
                eachElementA.innerHTML = `<input class="changeValue" type="text" value="${previousValue}">`;

                const changeValue = eachElementA.querySelector('.changeValue');
                changeValue.addEventListener('blur', function () {
                    const newValue = changeValue.value;
                    eachElementA.innerHTML = `<span id="expense-title">   ${newValue} </span>`;
                    // isInputEditing = false;
                    
                });
            // }
        });
    });
}
// function to update expense title [end]//
// function to update expense value [start]//
function updateExpenseValue() {
    // let isInputEditing = false;

    const listTitle = document.querySelectorAll('.expense-amount');
    listTitle.forEach(function (eachElementA) {
        eachElementA.addEventListener('dblclick', function () {
            // if (!isInputEditing) {
            //     isInputEditing = true;

                const previousValue = parseFloat(eachElementA.innerHTML);
                eachElementA.innerHTML = `<input class="changeValue" type="number" value="${parseFloat(previousValue)}">`;

                const changeValue = eachElementA.querySelector('.changeValue');
                changeValue.addEventListener('change', function () {
                    const newValue = parseFloat(changeValue.value);
                    eachElementA.innerHTML = `<h5 class="expense-amount mb-0 list-item">${parseFloat(newValue)}</h5>`;
                    // isInputEditing = false;
                    
                });
            // }
        });
    });
}

// function to update expense value [end]//
