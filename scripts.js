function init() {
let sendIt = document.getElementById('sendIt')
let sound = document.getElementById('chug')

    sendIt.addEventListener('click', event =>{
        chug.play();
  });

  sendIt.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
});

sendIt.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "";
});


}



window.addEventListener("load", init);