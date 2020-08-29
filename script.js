     function startUp (){

      //let containerEnd2 = document.getElementById("container-end");
      let containerStart2 = document.getElementById("container-start");

      let tempDiv22 = document.createElement("div");

      //let throwawayNode = containerEnd2.removeChild(containerStart2);
      //throwawayNode = null;
      let tempPara = document.createElement('h2');
      tempPara.innerHTML = "Downloading content...";
      containerStart2.innerHTML = tempPara.textContent;}

      startUp();



const localFunc = {
      fetchInfo: async function  () {
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
                document.body.insertBefore(p, myImage2);
              });
  
              let localVar = returnVal;

              localVar.setScene = new Function("return ("+returnVal.setScene+")")();
           
              localVar.setScene();
              
             // document.getElementById("titleArea").innerHTML = localVar.stringOne;
             
             
            
            
  },
  fetchInfoWithFilter: async function  () {
    const myInit = {
          method: "POST",
          mode: "cors",
         // credentials: "omit",
          headers: {
           // 'Content-Type': 'text/txt',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow',
          body: "This is my second post"
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
          document.getElementById("sheetVal").innerHTML = varTemp.hello;
          return
         
        
        
},

};
const localVar = {};








//localFunc.setScene();
localFunc.fetchInfo();




var testText = document.getElementById("textArea");
var testButton = document.getElementById("button1");

testText.addEventListener("input",function(){
      var text = testText.value;
      text = text.toString();
      document.getElementById("titleArea").innerHTML = text;
},false);

//testButton.addEventListener("click", localFunc.fetchInfo,false);
testButton.addEventListener("click", localFunc.fetchInfoWithFilter,false);

