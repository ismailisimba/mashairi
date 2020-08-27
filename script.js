const localFunc = {
       setScene: function () {

      
            let containerStart = document.getElementById("container-start");
            let noJava = document.getElementById("no-java-message");
            let throwawayNode = containerStart.removeChild(noJava);
            throwawayNode = null;
      
            let newMainDiv = document.createElement("div");
            newMainDiv.style.fontSize = "12px";
            newMainDiv.style.width = "85%";
            newMainDiv.style.height = "500px";
            newMainDiv.style.borderRadius = "2px";
            newMainDiv.style.borderStyle = "solid";
            newMainDiv.style.borderColor = "black";
            newMainDiv.style.backgroundColor = "grey";
            newMainDiv.style.display = "block";
            newMainDiv.style.position = "relative";
            newMainDiv.style.top = "200px";
            newMainDiv.id = "newMainDiv";
      
            let refDiv = document.getElementById("container-end");
            let anonyDiv = refDiv.parentNode;
            anonyDiv.insertBefore(newMainDiv, refDiv);
      
           
      
      
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
              newMainDiv.innerHTML = objectURL;
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

