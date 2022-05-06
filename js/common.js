let body=document.querySelector('body');
let arrow=document.querySelectorAll('.arrow');
for(i=0;i<arrow.length; i++){
    let thisLink=arrow[i].previousElementSibling;
    let down_menu__list =arrow[i].nextElementSibling;
    let thisArrow=arrow[i];
    let thisLinks2=thisArrow.previousElementSibling;
   thisLink.classList.add('parent'); 
  arrow[i].addEventListener('click', function(){
   down_menu__list.classList.toggle('open');
   thisArrow.classList.toggle('active');
   thisLinks2.classList.toggle('open')

  });
};
// counter menu

let pluus=document.querySelectorAll('.pluus');
for(i=0;i<pluus.length; i++){
    let items__control =pluus[i].nextElementSibling;
    let thisPlus=pluus[i];
  pluus[i].addEventListener('click', function(){
   items__control.classList.toggle('open');
   thisPlus.classList.toggle('active');
  });
};


// window.onload =func(){
//   let num = document.querySelectorAll('.count_num')
//     let plus = document.querySelectorAll('.plus_count')
//     let minus = document.querySelectorAll('.minus_count')
//  alert();
    
// }

