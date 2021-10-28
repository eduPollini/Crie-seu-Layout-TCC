function Wall(){
    Line.call(this);

    //Atributos

    //Métodos
    this.drawElement = function (ctx) { 
        ctx.beginPath();
        ctx.lineWidth = 9;
        ctx.strokeStyle = "black";
        //ctx.lineCap='round';
        ctx.moveTo(this.x - this.dx, this.y - this.dy);
        ctx.lineTo(this.xFinal - this.dx, this.yFinal - this.dy);
        ctx.stroke();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "white";
        ctx.lineTo(this.x - this.dx, this.y - this.dy);
        ctx.stroke();
    }
}