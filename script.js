
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
      
  let moveDiv = document.getElementById("textContainer2");
  moveDiv.style.left = "0px";
 // moveDiv.style.backgroundColor = "red";

    }};



setInterval(function () {
  leDiv = document.getElementById("currentScreenDiv");
  if (leDiv != null) {
  
   // leButton.innerHTML = "sjv";
    
  }
},1000);






//testButton.addEventListener("click", localFunc.fetchInfo,false);


