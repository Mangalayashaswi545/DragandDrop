// const img1 = document.getElementById('img1')
// const img2 = document.getElementById('img2')
// const img3 = document.getElementById('img3')
// const img4 = document.getElementById('img4')
// console.log(img1)
// // var img_length = img1.length
// const container2 = document.getElementsByClassName('sub2')
// var container_length = container2.length


//     img1.addEventListener('dragstart',(e)=>{
//         setTimeout(() => {
//             e.target.className = 'hide';
//         }, 0);
//     })
//     img1.addEventListener('dragend',(e)=>{
//         e.target.className = 'img1';
//     })

//     img2.addEventListener('dragstart',(e)=>{
//         setTimeout(() => {
//             e.target.className = 'hide';
//         }, 0);
//     })
//     img2.addEventListener('dragend',(e)=>{
//         e.target.className = 'img1';
//     })
//     img3.addEventListener('dragstart',(e)=>{
//         setTimeout(() => {
//             e.target.className = 'hide';
//         }, 0);
//     })
//     img3.addEventListener('dragend',(e)=>{
//         e.target.className = 'img1';
//     })
//     img4.addEventListener('dragstart',(e)=>{
//         setTimeout(() => {
//             e.target.className = 'hide';
//         }, 0);
//     })
//     img4.addEventListener('dragend',(e)=>{
//         e.target.className = 'img1';
//     })
// // for (var i =0;i<container_length;i++){
//     container2[0].addEventListener('dragover',(e)=>{
//         e.preventDefault();
//     })
//     container2[0].addEventListener('dragenter',()=>{
        
//     })
//     container2[0].addEventListener('dragleave',()=>{
        
//     })
//     container2[0].addEventListener('drop',(e)=>{
//         e.target.append(img1);
//     }) 
// // }


var pic = document.getElementsByTagName('img');
var btn = document.getElementsByTagName('button')
var block = document.getElementsByClassName('sub2');
var dragItem = null;

for(var i of btn){
    i.addEventListener('click',refreshPage);
}

function refreshPage(){
    window.location.reload();
} 

for (var i of pic){
    i.addEventListener('dragstart',dragStart);
    i.addEventListener('dragend',dragEnd);
}

function dragStart(){
    dragItem = this;
    setTimeout(()=>this.style.display = "none",0);
}
function dragEnd(){
    setTimeout(()=>this.style.display = "block",0);
    dragItem = null;
}
for (j of block){
    j.addEventListener('dragover',dragOver);
    j.addEventListener('dragenter',dragEnter);
    j.addEventListener('dragleave',dragLeave);
    j.addEventListener('drop',Drop);
}
function Drop(){
    this.append(dragItem);
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(e){
    e.preventDefault();
}