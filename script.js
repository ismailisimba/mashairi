const width = window.screen.width;
const localFunc = {
       setScene: function () {

      
            let containerStart = document.getElementById("container-start");
            let noJava = document.getElementById("no-java-message");
            let throwawayNode = containerStart.removeChild(noJava);
            throwawayNode = null;
      
            let newMainDiv = document.createElement("div");
            newMainDiv.style.fontSize = "24px";
            newMainDiv.style.width = "90%";
            newMainDiv.style.height = "600px";
            newMainDiv.style.borderRadius = "1px";
            newMainDiv.style.borderStyle = "solid";
            newMainDiv.style.borderColor = "#76bc43";
            newMainDiv.style.backgroundColor = "#75bc43";
            newMainDiv.style.display = "block";
            newMainDiv.style.position = "relative";
            newMainDiv.style.marginTop = "5%";
            newMainDiv.style.marginLeft = "5%"
            newMainDiv.id = "newMainDiv";
            newMainDiv.style.boxSizing = "border-box";
      
            let refDiv = document.getElementById("container-end");
            let anonyDiv = refDiv.parentNode;
            anonyDiv.insertBefore(newMainDiv, refDiv);

            //insertion ref div
            let gameRefDiv = document.createElement("div");
            newMainDiv.appendChild(gameRefDiv);


            //Create a text area
            let textArea = document.createElement("textarea");
            textArea.rows = 1;
            textArea.cols = 99;
            textArea.maxLength = 25;
            textArea.style.fontSize = "36px";
            textArea.style.fontFamily = "Mali";
            textArea.style.fontWeight = "500";
            textArea.style.textAlign = "center";
            textArea.style.paddingTop = "20px";
            textArea.style.resize = "none";
            textArea.style.width = "50%";
            textArea.style.minWidth = "250px";
            textArea.style.height = "15%";
            textArea.style.borderRadius = "1px";
            textArea.style.borderStyle = "solid";
            textArea.style.borderColor = "#febd3d";
            textArea.style.backgroundColor = "grey";
            textArea.style.display = "inline";
            textArea.style.position = "relative";
            textArea.style.top = "400px";
            textArea.style.marginLeft = "25%";
            textArea.id = "textArea";
            textArea.style.boxSizing = "border-box";
      
            newMainDiv.insertBefore(textArea, gameRefDiv);



            //Create a title
            let titleArea = document.createElement("div");

            titleArea.style.fontSize = "36px";
         
            titleArea.style.fontWeight = "700";
            titleArea.style.fontFamily = "Mali";
            titleArea.style.width = "80%";
            titleArea.style.height = "auto";
            titleArea.style.color = "#1e4488";
            titleArea.style.display = "inline";
            titleArea.style.position = "absolute";
            titleArea.style.top = "10px";
            titleArea.style.marginLeft = "10%"
            titleArea.style.textAlign = "center";
            titleArea.id = "titleArea";
            titleArea.innerHTML = "PlaceHolder Title";
            titleArea.style.boxSizing = "border-box";
      
            newMainDiv.appendChild(titleArea);


            //Create a sheetValDisplay Div
            let sheetVal = document.createElement("div");

            sheetVal.style.fontSize = "24px";
          
            sheetVal.style.fontWeight = "700";
            sheetVal.style.fontFamily = "Mali";
            sheetVal.style.width = "20%";
            sheetVal.style.height = "50px";
            sheetVal.style.color = "#323e48";
            sheetVal.style.display = "inline";
            sheetVal.style.position = "absolute";
            sheetVal.style.top = "50px";
            sheetVal.style.right = "3%";
            sheetVal.style.textAlign = "center";
            sheetVal.style.boxSizing = "border-box";
            sheetVal.id = "sheetVal";
            sheetVal.innerHTML = "PlaceHolder SheetVal";
      
            newMainDiv.appendChild(sheetVal);


          //Create a fetch info button Div
          let fetchSheetValButt = document.createElement("button");

          fetchSheetValButt.style.fontSize = "18px";
        
          fetchSheetValButt.style.fontWeight = "700";
          fetchSheetValButt.style.fontFamily = "Mali";
          fetchSheetValButt.style.width = "10%";
          fetchSheetValButt.style.minWidth = "min-content";
          fetchSheetValButt.style.height = "50px";
          fetchSheetValButt.style.boxSizing = "border-box";
          fetchSheetValButt.style.color = "#76bc43";
          fetchSheetValButt.style.display = "inline";
          fetchSheetValButt.style.position = "absolute";
          fetchSheetValButt.style.bottom = "20px";
          fetchSheetValButt.style.marginLeft = "45%";
          fetchSheetValButt.style.textAlign = "center";
          fetchSheetValButt.id = "fetchSheetValButt";
          fetchSheetValButt.innerHTML = "Request";
    
          newMainDiv.appendChild(fetchSheetValButt);


          //Create maintext container
          let mainTextContainer = document.createElement("div");

          mainTextContainer.style.fontSize = "12px";
        
          mainTextContainer.style.fontWeight = "500";
          mainTextContainer.style.fontFamily = "Mali";
          mainTextContainer.style.width = "60%";
          mainTextContainer.style.minWidth = "min-content";
          mainTextContainer.style.height = "300px";
          mainTextContainer.style.boxSizing = "border-box";
          mainTextContainer.style.color = "#323e48";
          mainTextContainer.style.backgroundColor = "#a2a9ad";
          mainTextContainer.style.display = "inline";
          mainTextContainer.style.position = "absolute";
          mainTextContainer.style.top = "90px";
          mainTextContainer.style.marginLeft = "20%";
          mainTextContainer.id = "mainTextContainer";

          mainTextContainer.style.overflowX = "scroll";

    
          
    
          newMainDiv.appendChild(mainTextContainer);

          //screens inside mainTextContainer used for displaying
            //Create maintext container
            let textContainers = [];
            let textContainer = document.createElement("div");
            textContainer.className = "textContainers";
         
            textContainer.style.width = "100%";
            textContainer.style.height = "100%";
            textContainer.style.backgroundColor = "#a2a9ad";
            textContainer.style.display = "inline";
            textContainer.style.position = "absolute";
            //textContainer.style.position = "absolute";
            textContainer.style.left = "0";
            textContainer.id = "mainMenu";

            //textContainers.push(textContainer);
            let textContainer2 = document.createElement("div");
            let textContainer3 = document.createElement("div");
            
            textContainer2.id = "gameDetails";
            textContainer2.className = "textContainers";
            textContainer2.style.width = "100%";
            textContainer2.style.height = "100%";
            textContainer2.style.backgroundColor = "#a2a9ad";
            textContainer2.style.display = "inline";
            textContainer2.style.position = "absolute";
           // textContainer2.style.position = "absolute";
            //textContainer2.style.top = "90px";
            textContainer2.style.left = "100%";

            textContainer3.id = "gameScreen";
            textContainer3.className = "textContainers";
            textContainer3.style.width = "100%";
            textContainer3.style.height = "100%";
            textContainer3.style.backgroundColor = "#a2a9ad";
            textContainer3.style.display = "inline";
            textContainer3.style.position = "absolute";
           // textContainer3.style.position = "absolute";
           // textContainer3.style.top = "90px";
            textContainer3.style.left = "200%";

            mainTextContainer.appendChild(textContainer);
            mainTextContainer.appendChild(textContainer2);
            mainTextContainer.appendChild(textContainer3);

            textContainers = document.getElementsByClassName("textContainers");
            

      
           
      
      
      },
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
  
  
              document.getElementById("sheetVal").innerHTML = returnVal;
             
            
            
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


          document.getElementById("sheetVal").innerHTML = returnVal;
         
        
        
},

};
const localVar = {};








localFunc.setScene();
localFunc.fetchInfo();




var testText = document.getElementById("textArea");
var testButton = document.getElementById("fetchSheetValButt");

testText.addEventListener("input",function(){
      var text = testText.value;
      text = text.toString();
      document.getElementById("titleArea").innerHTML = text;
},false);

//testButton.addEventListener("click", localFunc.fetchInfo,false);
testButton.addEventListener("click", localFunc.fetchInfoWithFilter,false);

