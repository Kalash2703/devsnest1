function Cylinder(cy1_height,cy1_diameter)
{
    this.cy1_height=cy1_height;
    this.cy1_diameter=cy1_diameter;
}

Cylinder.prototype.Volume = function(){
    var radius = this.cy1_diameter / 2;
    return this.cy1_height*Math.PI*radius*radius;
};

var cy1 = new Cylinder(5,4);


console.log('volume =',cy1.Volume().toFixed(4));