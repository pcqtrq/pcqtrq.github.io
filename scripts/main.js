/*
这里的所有内容
都是注释。
*/

let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myVariable = "Hello world!";
console.log(myVariable);
console.log(myVariable+myHeading.textContent);

// let iceCream = "chocolate1";
// if (iceCream === "chocolate") {
//   alert("我最喜欢巧克力冰淇淋了。");
// } else {
//   alert("但是巧克力才是我的最爱呀……");
// }


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  console.log(multiply(2, 3)); // Output: 6

  document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });
//   document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕疼。");
//   });

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/0.jpg") {
    myImage.setAttribute("src", "images/1.png");
    console.log("1");

  } else {
    myImage.setAttribute("src", "images/0.jpg");
    console.log("0");
  }
};


let myButton = document.querySelector("button");

  
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };
  
  