AFRAME.registerComponent("movecar", {
    schema : {
        //rotationX: {type: "number", default: 1},
        rotationY: {type: "number", default: 1},
        //rotationZ: {type: "number", default: 1},
    },
    init: function (){
        
    },
    update: function (){

    },
    tick: function (){
        window.addEventListener("click", e => {
            //this.data.rotationX += 0.05
            this.data.rotationY += 0.3
            //this.data.rotationZ += 0.03
            var rotation = this.el.getAttribute("rotation")
            //rotation.x = this.data.rotationX
            rotation.y = this.data.rotationY
            //rotation.z = this.data.rotationZ
            this.el.setAttribute("rotation", {x: rotation.x, y: rotation.y, z: rotation.z})
        })
    }
})