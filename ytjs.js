let box=document.querySelectorAll(".clickablebox");
let resetbtn = document.querySelectorAll(".reset");
let nw = document.querySelector(".newG");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turnO =true; // playerX, playerO

const wr=[
    [1,2,3],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];//winning result pattern
 
    const resetGame = () => {
      turnO = true;
      count = 0;
      enableBox();
      msgcontainer.classList.add("hide");
    };
    // chatgpt
    const enableBox=()=>{
      box.forEach((clickablebox)=>{
         clickablebox.innerText="";
         clickablebox.disabled=false;
      });
    };//end
    
    box.forEach((clickablebox)=>{
 clickablebox.addEventListener("click",() => {
    if (turnO){
    clickablebox.innerText="o";
   turnO=false;
  }else{
   clickablebox.innerText="x";  
   turnO=true;
  }
  clickablebox.disabled=true;

  checkwinner();
 });
    }); 
    // disabe box
    const disableBox =()=>{
for ( let box of clickablebox){
   box.disabled = true;
}
    };//end

const showwinner =(winner)=>{
   msg.innerText=`Winner is ${winner} Player 1`;
   msgcontainer.classList.remove("hide");
};

 const checkwinner = ()=>{
 for(let pattern of wr){

   let pos1val = box[pattern[0]].innerText;
   let pos2val = box[pattern[1]].innerText;
   let pos3val = box[pattern[2]].innerText;

    if (pos2val !="" && pos3val !=""){
if (pos1val===pos2val && pos2val===pos3val){
   console.log("winner is player",pos1val);
   showwinner(pos1val);
   disableBox ();
   return;//chatgpt
    }
 };
   };
};

   resetbtn.addEventListener("click",resetGame);
   nw.addEventListener("click",resetGame);