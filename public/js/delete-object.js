'use strict'

//delete the apple when the distance between the apple and bag is less than 1
AFRAME.registerComponent('deleteobject',{
    init: function(){
      this.bag=document.querySelector('#bag');
      this.obj=this.el;
      console.log(this.bag.object3D.position);
      console.log(this.obj.object3D.position);
    },
    tick: function() {
      let bagPos = this.bag.object3D.position
      let objectPos = this.el.object3D.position
      let distance = bagPos.distanceTo(objectPos)
      //console.log(distance);

      if (distance < 1) {
        let getsound = document.querySelector('.get-sound');
        getsound.components.sound.playSound();
        console.log(distance);
        this.el.parentNode.removeChild(this.el);  
      }
    }
  });