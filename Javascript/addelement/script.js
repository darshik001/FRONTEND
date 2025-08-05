

let add = document.querySelector('#add');

let p = document.createElement("p")


//add as a last chile
// add.append(p)
// add.appendChild(p)


//add as a first chile
// add.prepend(p)


// add text as a last 
//  let text = document.createTextNode("hello world")
//  add.appendChild(text)




//add ni uper
// add.insertAdjacentElement('beforebegin',p)

//add ni niche
// add.insertAdjacentElement("afterend",p)

//add as a first chile
// add.insertAdjacentElement("afterbegin",p)

//add as a last chile
// add.insertAdjacentElement("beforeend",p)





document.getElementById("imgInput").addEventListener("change", function () {
  let file = this.files[0];
  let reader = new FileReader();

  reader.onload = function () {
    let base64 = reader.result;

    // Store in localStorage
    localStorage.setItem("storedImage", base64);

    // Preview the image
    // document.getElementById("preview").src = base64;
  };

  // if (file) {
    reader.readAsDataURL(file); // Converts to Base64
  // }
});



// let savedImg = localStorage.getItem("storedImage");

// if (savedImg) {
//   document.getElementById("preview").src = savedImg;
// }

