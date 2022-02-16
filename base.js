AFRAME.registerComponent("base", {
    schema : {
        radius: {type: "number", default: 30},
        height: {type: "number", default: 3}
    },
    init: function (){
        this.el.setAttribute("geometry", {primitive: "cylinder", radius: this.data.radius, height: this.data.height})
    },
    update: function (){

    },
    tick: function (){

    }
})