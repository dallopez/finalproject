//create variables
var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
var title =document.createElement("header");
var student =document.body.querySelector(".student").style.visibility="hidden";
var grade =document.body.querySelector(".grade").style.visibility="hidden";
var submit =document.body.querySelector(".submit").style.visibility="hidden";

//page button names
var pages = [
  
  {
    name:"Add Grades",
    content:""
  },
  {
    name:"Grade View",
    content:"Grades"
  }
  ];
//make sure username and password work 
function validate(){
  var messEle=document.body.querySelector(".loginPart");
  var username=document.body.querySelector(".username").value;
  var password=document.body.querySelector(".password").value;
  
    if(username==="cool" && (password=== "password")){
    messEle.innerHTML=""
      for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
        gradeView();
}
 
    document.body.querySelector(".username").style.display="none";
    document.body.querySelector(".password").style.display="none";
    document.body.querySelector(".login").style.display="none";
      
        }else if(username==="cool"){
          messEle.innerHTML = "Incorrect password."}
  
       else if(password === "password"){
          messEle.innerHTML = "Incorrect username."
          }
        else{ messEle.innerHTML = "Incorrect username and password."}
};

   
 
document.body.querySelector(".login").addEventListener("click", function(){
  validate();
});

//make the next page
  function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
 });
  button.innerHTML=pg.name;
  nav.appendChild(button);
}
  
  function contentWrite(wd,pg){
  display.innerHTML="";
  
  if (pg == "Grade View"){
    gradeView();
     document.body.querySelector(".grade").style.visibility="hidden";
     document.body.querySelector(".student").style.visibility="hidden";
     document.body.querySelector(".submit").style.visibility="hidden";
  }
  if(pg == "Add Grades"){
    addGrades();
  };
  }
    
//

function addGrades(){
  document.body.querySelector(".grade").style.visibility="visible";
  document.body.querySelector(".student").style.visibility="visible";
  document.body.querySelector(".submit").style.visibility="visible";
  document.body.querySelector(".vDisplay").innerHTML="";
}

    function gradeView(){
      title.innerHTML="Grades";
      display.appendChild(title);
      document.body.querySelector(".vdisplay").innerHTML="";
      document.body.querySelector(".grade").style.visibility="hidden";
      document.body.querySelector(".student").style.visibility="hidden";
      document.body.querySelector(".submit").style.visibility="hidden";
      renderItems();
    };



var list=[];
var list2=[];

function renderItems(){
  for(var i=0; i<list.length; i++){
    var ele =document.createElement("div");
    ele.innerHTML="Student Name: " +list[i] +" Grade: "+list2[i];
    document.body.querySelector(".vDisplay").appendChild(ele);
  }
}


document.body.querySelector(".submit").addEventListener("click", function(){
  var number=document.body.querySelector(".grade").value;
var studentName=document.body.querySelector(".student").value;
  document.body.querySelector(".notRight").innerHTML = ""
  if(studentName.length>0 && number.length>0 && Number(number >=0) && Number(number<=100)){
    document.body.querySelector(".notRight").innerHTML="";
    document.body.querySelector(".vDisplay").innerHTML="";
     list.push(studentName);
    list2.push(number)
    
  
  gradeView();
  }else{
  document.body.querySelector(".notRight").innerHTML = "Invalid Student Information"
    }
});