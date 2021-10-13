function Wall(){
    Line.call(this);

    //Atributos

    //Métodos
    this.drawElement = function (ctx) { 
        ctx.beginPath();
        ctx.lineWidth = 9;
        ctx.strokeStyle = "black";
        //ctx.lineCap='round';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.xFinal, this.yFinal);
        ctx.stroke();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "white";
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
    }
}