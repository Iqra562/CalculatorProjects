const allNumbersOperators = document.querySelectorAll(".tdd");
const input = document.getElementById("inp");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");
const delet = document.querySelector(".delete");
const calculation = document.getElementById("calculation");
allNumbersOperators.forEach(function(singleButton){
       singleButton.addEventListener('click',function(event){
event.preventDefault();
const currentElement = event.target;
const elementValue = currentElement.getAttribute("data-num");
input.value  += elementValue; 
       })
});
result.addEventListener('click',function(event){
event.preventDefault();
const numbers = input.value;
input.value = eval(input.value);
const calculatedValue = input.value
const liElement = document.createElement('li');
liElement.className= "calculationLi";
liElement.innerHTML += `
${numbers } = ${calculatedValue}
`
calculation.append(liElement);

// calculation.innerHTML += + "<br>";

});
clear.addEventListener('click',function(event){
event.preventDefault();
input.value = ""
})
delet.addEventListener('click',function(event){
event.preventDefault();
// alert('hello')
const inputValue = input.value;
// console.log(inputValue)
const deleteElement= inputValue.substr(0,inputValue.length-1);
// console.log(deleteElement)
  input.value = deleteElement;
})
