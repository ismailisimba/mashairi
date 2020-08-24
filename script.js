const localFunc = {};
const localVar = {};


function setScene () {

      
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

      let refDiv = document.getElementById("container-end");
      let anonyDiv = refDiv.parentNode;
      anonyDiv.insertBefore(newMainDiv, refDiv);

     


}


setScene();