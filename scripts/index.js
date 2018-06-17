this.onload=function(){
    var divCount = document.getElementsByClassName("center-div").length;
    for(var i=0;i<divCount;i++){
        document.getElementsByClassName("center-div")[i].addEventListener("click", function(){        
            this.style.backgroundColor = getRandomColor();
            this.lastUpdate();
        });   

        document.getElementsByClassName("center-div")[i].originText = document.getElementsByClassName("center-div")[i].innerHTML;
        
        document.getElementsByClassName("center-div")[i].lastUpdate = function(){
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;
            this.innerHTML=this.originText+" : " + dateTime;
        }
    }

    var specialCount = document.getElementsByClassName("special").length;
    for(var j=0;j<specialCount;j++){
        document.getElementsByClassName("special")[j].addEventListener("click", function(){        
            this.style.borderWidth="5px";
            this.style.borderColor = getRandomColor();
        });        
    }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
