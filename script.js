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
            newMainDiv.style.height = "500px";
            newMainDiv.style.borderRadius = "1px";
            newMainDiv.style.borderStyle = "solid";
            newMainDiv.style.borderColor = "#76bc43";
            newMainDiv.style.backgroundColor = "#75bc43";
            newMainDiv.style.display = "block";
            newMainDiv.style.position = "relative";
            newMainDiv.style.marginTop = "10%";
            newMainDiv.style.marginLeft = "5%"
            newMainDiv.id = "newMainDiv";
      
            let refDiv = document.getElementById("container-end");
            let anonyDiv = refDiv.parentNode;
            anonyDiv.insertBefore(newMainDiv, refDiv);

            //insertion ref div
            let gameRefDiv = document.createElement("div");
            newMainDiv.appendChild(gameRefDiv);


            //Create a text area
            let textArea = document.createElement("textarea");
            textArea.rows = 3;
            textArea.cols = 99;
            textArea.maxLength = 300;
            textArea.style.fontSize = "24px";
            textArea.style.fontFamily = "Mali";
            textArea.style.resize = "none";
            textArea.style.width = "80%";
            textArea.style.height = "33%";
            textArea.style.borderRadius = "1px";
            textArea.style.borderStyle = "solid";
            textArea.style.borderColor = "#febd3d";
            textArea.style.backgroundColor = "grey";
            textArea.style.display = "inline";
            textArea.style.position = "relative";
            textArea.style.top = "300px";
            textArea.style.marginLeft = "10%"
            textArea.id = "textArea";
      
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
      
            newMainDiv.appendChild(titleArea);

      
           
      
      
      },

};
const localVar = {};


async function fetchInfo () {
      const myInit = {
            method: "GET",
            mode: "cors",
           // credentials: "omit",
            headers: {
             // 'Content-Type': 'text/txt'
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


            return returnVal;
           
          
          
};





localFunc.setScene();

var testVar100 = fetchInfo();

var testText = document.getElementById("textArea");

testText.addEventListener("input",function(){
      var text = testText.value;
      text = text.toString();
      document.getElementById("titleArea").innerHTML = text;
},false);

