
document.onclick=function(event){   
    var clickedObj = event.target;

    switch ( true ){
        case /center-div/.test(clickedObj.className) :
            if(typeof(clickedObj.lastUpdate) =="undefined"){
                clickedObj.originText = event.target.innerHTML;
                clickedObj.lastUpdate = setLastUpdate;              
                clickedObj.getLog = getDivLog;
            }

            clickedObj.style.backgroundColor = getRandomColor();
            clickedObj.lastUpdate(clickedObj);  

            if(clickedObj.className.includes("special")){
                clickedObj.style.borderWidth="5px";
                clickedObj.style.borderColor = getRandomColor();  
            }
            break;
        case /main-button add/.test(clickedObj.className) :
            var newDiv = document.createElement("div");
            newDiv.className="center-div";
            var textBox = document.getElementById("person-name");
            var pesonName = textBox.value;
            newDiv.innerHTML  = pesonName;

            var mainDiv = document.getElementById("main-div");
            mainDiv.appendChild(newDiv);

            textBox.value="";  
            break;
    }
}

document.oncontextmenu = function(event){
    var clickedObj = event.target;
    
    switch ( true ){
        case /center-div/.test(clickedObj.className) :
            console.log(clickedObj.innerHTML);
            return false;
        break;
     }     
}


function getDivLog(obj){
    console.log(obj.innerHTML);
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setLastUpdate(obj){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    obj.innerHTML=obj.originText+" : " + dateTime;
}


