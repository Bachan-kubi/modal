const modal = document.getElementById('myModal');

let img = document.getElementById('myImg');
let modelImg = document.getElementById('img01');
let captionText = document.getElementById('caption');

console.log(captionText);

img.onclick = function (){
    modal.style.display= 'block'
    modelImg.src = this.src;
    captionText.innerHTML = this.alt;
    console.log(captionText.innerHTML);
};

// get close button.
let close = document.getElementsByClassName('close')[0];
// console.log(close);
close.addEventListener('click', ()=>{
    modal.style.display = "none";
});
// close.onclick = function(){
//     modal.style.display= 'none';
// }



