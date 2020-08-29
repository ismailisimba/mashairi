
const localFunc = {
       setScene: function () {

        const width = window.screen.width;
        const minWidth = 0.95*width;
        const height = 0.76*window.screen.height;
        

      
            let containerEnd = document.getElementById("container-end");
            let containerStart = document.getElementById("container-start");
            let throwawayNode = containerEnd.removeChild(containerStart);
            throwawayNode = null;
      
            let newMainDiv = document.createElement("div");
            newMainDiv.style.fontSize = "24px";
            newMainDiv.style.width = "70%";
            newMainDiv.style.minWidth = minWidth+"px";
            newMainDiv.style.height = height+"px";
            newMainDiv.style.backgroundColor = "#76bc43";
            newMainDiv.style.display = "block";
            newMainDiv.style.position = "relative";
            newMainDiv.style.top = "50px";
            newMainDiv.style.margin = "auto";
            newMainDiv.id = "newMainDiv";
            newMainDiv.style.boxSizing = "border-box";


            newMainDiv.style.display = "flex";
            newMainDiv.style.flexFlow = "column";
            newMainDiv.style.flexWrap = "no-wrap";
            newMainDiv.style.justifyContent = "space-between";
            newMainDiv.style.alignItems = "center";

            containerEnd.appendChild(newMainDiv);


            //Create a title
            let titleArea = document.createElement("div");

            titleArea.style.fontSize = "24px";
         
            titleArea.style.fontWeight = "700";
            titleArea.style.fontFamily = "Mali";
            titleArea.style.width = "80%";
            titleArea.style.height = "auto";
            titleArea.style.color = "#1e4488";
            titleArea.style.display = "inline";
            titleArea.style.position = "absolute";
            titleArea.style.top = "15px";
            titleArea.style.marginLeft = "10%"
            titleArea.style.textAlign = "center";
            titleArea.id = "titleArea";
            titleArea.innerHTML = "Games for Intellectuals!";
            titleArea.style.boxSizing = "border-box";

            document.querySelector("body").appendChild(titleArea);


             //Create maintext container
          let mainTextContainer = document.createElement("div");

          mainTextContainer.style.fontSize = "12px";
        
          mainTextContainer.style.fontWeight = "500";
          mainTextContainer.style.fontFamily = "Mali";
          mainTextContainer.style.width = "100%";
          mainTextContainer.style.height = "75%";
          mainTextContainer.style.boxSizing = "border-box";
          mainTextContainer.style.color = "#1e4488";
          mainTextContainer.style.backgroundColor = "#1e4488";
          mainTextContainer.id = "mainTextContainer";

         mainTextContainer.style.overflowX = "scroll";
         mainTextContainer.style.overflowY = "hidden";

    
          
    
          newMainDiv.appendChild(mainTextContainer);


            //Create a text area
            let textArea = document.createElement("textarea");
            textArea.rows = 1;
            textArea.cols = 50;
            textArea.maxLength = 25;
            textArea.style.fontSize = "18px";
            textArea.style.fontFamily = "Mali";
            textArea.style.fontWeight = "500";
            textArea.style.textAlign = "center";
            textArea.style.paddingTop = "16px";
            textArea.style.marginTop = "-5px";
            textArea.style.paddingBottom = "12px";
            textArea.style.resize = "none";
            textArea.style.width = "33%";
            textArea.style.minWidth = "200px";
            textArea.style.height = "auto";
            textArea.style.backgroundColor = "#a2a9ad";
            //textArea.style.borderColor = "black";
     
            textArea.id = "textArea";
            textArea.style.boxSizing = "border-box";
      
            newMainDiv.appendChild(textArea);



             //Create buttons div
             let buttsDiv = document.createElement("div");
            
             buttsDiv.style.fontSize = "18px";
             buttsDiv.style.fontFamily = "Mali";
             buttsDiv.style.fontWeight = "500";
             buttsDiv.style.textAlign = "center";
             buttsDiv.style.width = "50%";
             buttsDiv.style.minWidth = "250px";
             buttsDiv.style.height = "auto";
             buttsDiv.style.minHeight = "90px";
             //buttsDiv.style.borderColor = "black";
             //buttsDiv.style.borderStyle = "solid";
             //buttsDiv.style.borderRadius = "0px";
             buttsDiv.style.paddingBottom = "10px";
      
             buttsDiv.id = "buttsDiv";
             buttsDiv.style.boxSizing = "border-box";


             buttsDiv.style.display = "flex";
             buttsDiv.style.flexFlow = "row";
             buttsDiv.style.flexWrap = "wrap";
             buttsDiv.style.justifyContent = "space-evenly";
             buttsDiv.style.alignItems = "center";
       
             newMainDiv.appendChild(buttsDiv);


            var buttstyle = document.createElement('style');
            buttstyle.type = 'text/css';
            buttstyle.innerHTML = '.buttstyle { width: 30%; min-width: 70px; padding: 20px 10px; margin: 5px 25px; color: #76bc43; background-color: #1e4488; border-radius: 5px; border-width: 0px; min-height: 25px; box-shadow: 1.2px 1.7px 1.7px black; }';
            buttsDiv.appendChild(buttstyle);
            
            
            let button1 = document.createElement("button");
           let button2 = document.createElement("button");
           let button3 = document.createElement("button");
           let button4 = document.createElement("button");

            button1.className = "buttstyle";
            button1.id = "button1";
            button2.className = "buttstyle";
            button2.id = "button2";
           button3.className = "buttstyle";
           button3.id = "button3";
           button4.className = "buttstyle";
           button4.id = "button4";

            buttsDiv.appendChild(button1);
            buttsDiv.appendChild(button2);
           buttsDiv.appendChild(button3);
           buttsDiv.appendChild(button4);
           buttsDiv.appendChild(buttstyle);







          //screens inside mainTextContainer used for displaying
            //Create maintext container
            let textContainers = [];
            

            var textContainerstyle = document.createElement('style');
            textContainerstyle.type = 'text/css';
            textContainerstyle.innerHTML = '.textContainerstyle { width: 100%; padding: 5px 2px; color: #76bc43; background-color: #1e4488; height: 100%; display: block; position: relative;}';
            mainTextContainer.appendChild(textContainerstyle);
            
            
            let textContainer1 = document.createElement("div");
           let textContainer2 = document.createElement("div");
           let textContainer3 = document.createElement("div");

           textContainer1.className = "textContainerstyle";
           textContainer1.id = "textContainer1";
           textContainer1.style.top = "0";
           textContainer1.style.left= "0";
           textContainer1.style.backgroundColor = "black";

           textContainer2.className = "textContainerstyle";
           textContainer2.id = "textContainer2";
           textContainer2.style.top = "-102%";
           textContainer2.style.left= "100%";
           textContainer2.style.backgroundColor = "red";

           textContainer3.className = "textContainerstyle";
           textContainer3.id = "textContainer3";
           textContainer3.style.top = "-204%";
           textContainer3.style.left= "200%";
           textContainer3.style.backgroundColor = "violet";


            mainTextContainer.appendChild(textContainer1);
            mainTextContainer.appendChild(textContainer2);
            mainTextContainer.appendChild(textContainer3);









/*

            
      
            


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


  


         
          //screens inside mainTextContainer used for displaying
            //Create maintext container
            let textContainers = [];
            let textContainer = document.createElement("div");
            textContainer.className = "textContainers";
         
            textContainer.style.width = "200px";
            textContainer.style.height = "200px";
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
            textContainer2.style.width = "200px";
            textContainer2.style.height = "200px";
            textContainer2.style.backgroundColor = "#a2a9ad";
            textContainer2.style.display = "inline";
            textContainer2.style.position = "absolute";
           // textContainer2.style.position = "absolute";
            //textContainer2.style.top = "90px";
            textContainer2.style.left = "100%";

            textContainer3.id = "gameScreen";
            textContainer3.className = "textContainers";
            textContainer3.style.width = "200px";
            textContainer3.style.height = "200px";
            textContainer3.style.backgroundColor = "#a2a9ad";
            textContainer3.style.display = "inline";
            textContainer3.style.position = "absolute";
           // textContainer3.style.position = "absolute";
           // textContainer3.style.top = "90px";
            textContainer3.style.left = "200%";

            mainTextContainer.appendChild(textContainer);
            mainTextContainer.appendChild(textContainer2);
            mainTextContainer.appendChild(textContainer3);

            textContainers = document.getElementsByClassName("textContainers");*/
            

      
           
      
      
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
                
                var objectURL = JSON.parse(myBlob);
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
  
              localVar = returnVal;

              localVar.sayHello = new Function("return ("+myobj.sayHello+")")();
              localVar.sayHello();
              
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

