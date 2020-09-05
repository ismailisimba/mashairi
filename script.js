
var testButton = document.createElement("div");



   function startUp () {

    let containerStart2 = document.getElementById("container-start");
    let tempMessage = document.createElement('h2');
    tempMessage.innerHTML = "Downloading content...";
    containerStart2.innerHTML = tempMessage.textContent;
  };

  async function fetchInfoWithFilter (body,filterOne) {
    const myInit = {
          method: "POST",
          mode: "cors",
         // credentials: "omit",
          headers: {
           // 'Content-Type': 'text/txt',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow',
          body: body
        };

    var myRequest = new Request('https://script.google.com/macros/s/AKfycbxJR2x-WpAOkT27M9BF2lh7K6NtPJSqYYNvvtmb0VRMItKSXJ0/exec'+'?'+"filterOne="+filterOne+"&"+"filterTwo=1&"+"filterThree=1&");
    

         
    var returnVal = await fetch(myRequest, myInit)
          .then(function(response) {
            if (!response.ok) {
              
              throw new Error("HTTP error, status = " + response.status);
              
            }
            
            return response.text();
          })
          .then(function(myBlob) {
            
            var objectURL = myBlob;
            let newMainDiv = document.getElementById("newMainDiv");
            //newMainDiv.innerHTML = objectURL;
            return objectURL;
            
          })
          .catch(function(error) {
            var p = document.createElement('p');
            p.appendChild(
              document.createTextNode('Error: ' + error.message)
            );
            document.body.insertBefore(p, myImage2);
          });

        

          let varTemp = JSON.parse(returnVal); 

          varTemp.testFunc2 = new Function("return ("+varTemp.testFunc2+")")();
          varTemp.testFunc2();
          //localVar = JSON.parse(returnVal);
          document.getElementById("currentScreenDiv").innerHTML = varTemp.hello;
        
         
        
        
};
  
  async function fetchInfo () {

        const myInit = {
              method: "GET",
              mode: "cors",
             // credentials: "omit",
              headers: {
               // 'Content-Type': 'text/txt',
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow'
            };
  
        var myRequest = new Request('https://script.google.com/macros/s/AKfycbxJR2x-WpAOkT27M9BF2lh7K6NtPJSqYYNvvtmb0VRMItKSXJ0/exec');
        
  
             
        var returnVal = await fetch(myRequest, myInit)
              .then(function(response) {
                if (!response.ok) {
                  
                  throw new Error("HTTP error, status = " + response.status);
                  
                }
                
                return response.text();
              })
              .then(function(myBlob) {
                
                var cloudObject = JSON.parse(myBlob);
                
                return cloudObject;
                
              })
              .catch(function(error) {
                var p = document.createElement('p');
                p.appendChild(
                  document.createTextNode('Error: ' + error.message)
                );
                document.body.appendChild(p, myImage2);
              });
  
              localVar = returnVal;

              localVar.setScene = new Function("return ("+returnVal.setScene+")")();
              localVar.fillAvailGames = new Function("return ("+returnVal.fillAvailGames+")")();
           
              localVar.setScene();
              localVar.fillAvailGames();
             //testButton = document.getElementById("button1");
            // testButton.addEventListener("click", function(){fetchInfoWithFilter("I am a new message","I am a new filter!!")},false);
                      
  };


  function populateGames() {
    
  };




let localVar = null;
let emptyDiv = document.createElement("div");

let currentScreenDiv = emptyDiv;
let leDiv =  emptyDiv;






//localFunc.setScene();
startUp();
fetchInfo();


let localvarTooto = { setMeUp: function () {
      
  let gameMainScreen = document.getElementById("textContainer2");
  let currentScreenDiv = document.getElementById("currentScreenDiv");
  gameMainScreen.style.left= "0px";

 let gameMainScreenstyle = document.createElement('style');
 gameMainScreenstyle.type = 'text/css';
 gameMainScreenstyle.innerHTML = '.gameMainScreenstyle { display: flex; flex-flow: column; flex-wrap: nowrap; justify-content: flex-start; align-itmes: center; background-color: #6f2877; }';
 gameMainScreen.appendChild(gameMainScreenstyle);


 let gameScreenContainer = document.createElement("div");
 gameMainScreen.appendChild(gameScreenContainer);
 //gameScreenContainer.style.backgroundColor = "red";
 gameScreenContainer.style.width = window.screen.width+"px";
 gameScreenContainer.style.position = "relative";
 gameScreenContainer.style.left = "-15px";
 gameScreenContainer.style.height = "100%";
 
  gameScreenContainer.className = "gameMainScreenstyle";
   // moveDiv.style.backgroundColor = "red";


  let topDiv = document.createElement("div");
  let midDiv = document.createElement("div");
  let botDiv = document.createElement("div");

  topDiv.style.width = "100%";
  midDiv.style.width = "100%";
  botDiv.style.width = "100%"

  topDiv.style.height = "15%";
  midDiv.style.height = "60%";
  botDiv.style.height = "35%";

  topDiv.style.backgroundColor = "#1e4488";
  midDiv.style.backgroundColor = "#a2a9ad";
  botDiv.style.backgroundColor = "#76bc43";


  gameScreenContainer.appendChild(topDiv);
  gameScreenContainer.appendChild(midDiv);
  gameScreenContainer.appendChild(botDiv);


  
 let topDivstyle = document.createElement('style');
 topDivstyle.type = 'text/css';
 topDivstyle.innerHTML = '.topDivstyle { display: flex; flex-flow: row; flex-wrap: nowrap; justify-content: space-around; align-items: center; }';
 gameMainScreenstyle.appendChild(topDivstyle);
 topDiv.className = "topDivstyle";

 let leftArrow = document.createElement("div");
 leftArrow.style.backgroundImage = "url('https://wadqra.am.files.1drv.com/y4mV4QS1GA_lGSwoTLkC3ZsvpFW3zsi0znii3bIpGdtXY-uPSFEAAVXjDnbwiXkMN1HS-bgC-eOXbEAIg-sGOUYOLT0L7AI6fZs0duJhS5fXuYKHZLpKYUSWmm842NHPksoTznWLaw_sODHv0gqtJHHwQKA2He8SNEzZ_NnQ4-JCsMiErB4SCFaULygIjhAckWErUsYUfiYdkVgfbiVJJ-OFA?')";
 leftArrow.style.width = "90px";
 leftArrow.style.height = "60px";
 leftArrow.style.backgroundSize = "cover";

 let rightArrow = document.createElement("div");
 rightArrow.style.backgroundImage = "url('https://w3wm5w.am.files.1drv.com/y4miWVf7n3Vsqt9BejKBAAIECVZUqEc9FM3NNF0GfLOW1zXQ7NBnyVAtOABTxWiyy4GeIN4Eg_0iAmV6Qb-qSctb3NAbJADDXV03z6ZBJ6UjcG6N6mw-GX4MX-JhNDC5GR60r46GFQ4XDMSzxYts_Z7s_l2tyV2WTTA2J5ORfx1-5_PWT2UWPjrXA1JhU7iLTxbShr_eLDk5qsJckW8NLCUMg?')";
 rightArrow.style.width = "90px";
 rightArrow.style.height = "60px";
 rightArrow.style.backgroundSize = "cover";

 if (window.screen.width <= 1024) {
  rightArrow.style.width = "35px";
  rightArrow.style.height = "20px";

  leftArrow.style.width = "35px";
  leftArrow.style.height = "20px";

 }

 let gameTitle = document.createElement("div");
 gameTitle.innerHTML = "Mashairi - Lyrics Game";
 gameTitle.style.fontSize = "large";

 topDiv.appendChild(leftArrow);
 topDiv.appendChild(gameTitle);
 topDiv.appendChild(rightArrow);

  
    
  
  
  
  
  
  }};



setInterval(function () {
  leDiv = document.getElementById("currentScreenDiv");
  if (leDiv != null) {
  
   // leButton.innerHTML = "sjv";
    
  }
},1000);






//testButton.addEventListener("click", localFunc.fetchInfo,false);


