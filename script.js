const mainBox=document.querySelector('#main-container');
const emojiIcon=document.querySelectorAll('.child')
const reaction=document.querySelector('#reaction');

const submit=document.querySelector('.sent');

let icon;

reaction.addEventListener('click',(e) =>{
    icon=e.target.parentNode;
    console.log(e);
   
    for(let i=0;i<emojiIcon.length;i++){
        emojiIcon[i].classList.remove('active');
    }


    if(!icon.classList.contains('active')){
        icon.classList.add('active');
    }


});


submit.addEventListener('click',function (){
    

    if(icon === undefined){
      alert("please fill and submit your genuine feedback");
      return;
    }
    else{
        let getIcon = icon.querySelector('.emoiji').innerText;
        let getTxt = icon.querySelector('.txt').innerText;
        // mainBox.style.width='40vw';

        mainBox.innerHTML =`
         <div class ="result">
          <p class="emo">${getIcon}</p>
          <h3><span>Your feedback</span> :- ${getTxt} </h3>
          <p class="message">Your feedback is successfully submitted,Thankyou for your genuine feedback</p>
          <a href="index.html"><button>⇐ Back</button></a>
         </div>
        `
        // Add the "show" class after a slight delay to allow CSS transition
        setTimeout(() => {
            document.querySelector('.result').classList.add('show');
        }, 10);
    }
});