let ans = document.querySelector(".submit");
let takeInput = document.querySelector(".enter");
let calculate = 0;
let display;
let array = [];
let del = document.querySelector(".del");
let darkLightMode = document.querySelector(".darkLightMode")
let darkMode = false;
let lightMode = true;
takeInput.value = 0;
ans.addEventListener("click", function () {
  try {
    calculate = takeInput.value;
    display = eval(calculate);

    // Display the result in the input box
    takeInput.value = display;
  } catch (error) {
    // Handle the error
    displayErrorMessage(error.message);
  }
});

// Function to display error message
function displayErrorMessage(message) {
  // Display the error message in the input box
  takeInput.value = "Error: " + message;
}
// function listenForEvent(variable){
//   variable.addEventListener("click", function(e){
//     for (let i = 0; i = document.querySelector("button").length; i++){
//       var innerHTML = this.innerHTML;
//       alert(innerHTML);
//     }
//   })
// }

for (let i = 0; i < document.querySelectorAll(".numbers").length; i++) {
    document.querySelectorAll(".numbers")[i].addEventListener("click", function(e) {
        var innerHTML = this.innerHTML;
        takeInput.value += innerHTML;
    });
}

del.addEventListener("click", function(){
  array = [...takeInput.value];
  array.pop();
  let store = array.join('');
  takeInput.value = store;
})
darkLightMode.addEventListener("click", function(){
  const image = document.querySelector(".image");
  const mod = document.querySelector(".darkLightMode p");
  let darkBtn = document.querySelectorAll(".numbers, .submit, .enter");
  if(!darkMode){
    image.setAttribute("src", "sun.png");
    mod.innerText = "Light Mode";
    darkMode = true;
    lightMode = false;
    document.body.classList.add("body");

    for(let count of darkBtn){

      count.classList.add("darkButton");
    }

  }else{
    image.setAttribute("src", "moon.png");
    mod.innerText = "Dark Mode";
    darkMode = false;
    lightMode = true;
    document.body.classList.remove("body");
    for (let count of darkBtn) {
      count.classList.remove("darkButton");
    }
  }
})
