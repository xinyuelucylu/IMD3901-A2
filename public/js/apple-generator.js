'use strict'

//generate the apple
AFRAME.registerComponent("apple-generator",{
    schema: {
      duration : {type:'number', default:20000}
    },
    init: function(){
        const CONTEXT_AF = this;
        CONTEXT_AF.isexisted = false
        let dropSound = document.querySelector('.drop-sound');
     
        CONTEXT_AF.el.addEventListener("click", function(){
        let scene = document.querySelector("#scene");
        let newBox = document.createElement("a-entity");

        newBox.setAttribute("mixin","cube");
        newBox.setAttribute("scale","0.3 0.3 0.3");
        newBox.setAttribute("gltf-model","#apple_model");
        newBox.setAttribute("class","cube");
        newBox.setAttribute("body","shape: none");
        newBox.setAttribute("shape","shape: box");
        newBox.setAttribute('deleteObject', '');

        let newX = Math.random()*2-1;
        newBox.setAttribute("position",`${newX} 2 -3`);

        /*
        Issue no.1: Mousedown event always fires twice --> when mouse click, two apples falls simaltaneously
        Solution: Add if else statement can solve the problem. But then the VR control should click twice to get one apple falls
        */

        //if(CONTEXT_AF.isexisted === false){
          scene.appendChild(newBox);
          CONTEXT_AF.isexisted = true;
          dropSound.components.sound.playSound();
      //}
        //else{
          //CONTEXT_AF.isexisted = false;
        //}
        //console.log(CONTEXT_AF.isexisted);
      });
    },
  });
  