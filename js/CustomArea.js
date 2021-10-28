function CustomArea() {
    Line.call(this);

    //Atributos
    this.text = "";

    //Métodos
    this.drawElement = function(ctx){
        //Dashed line
        ctx.strokeStyle = 'rgba(100,100,100,0.8)';
        ctx.setLineDash([6]);
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x - this.dx, this.y - this.dy, this.width, this.height);

        //Opacity rect
        ctx.fillStyle = 'rgba(50,50,50,0.3)';
        ctx.fillRect(this.x - this.dx, this.y - this.dy, this.width, this.height);

        //Text stroke
        ctx.setLineDash([0]);
        ctx.font = "24px Sans-serif";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.strokeText(this.text, this.x - this.dx + this.width/2, this.y - this.dy + this.height/2);

        //Text
        ctx.fillStyle = "white";
        ctx.fillText(this.text, this.x - this.dx + this.width/2, this.y - this.dy + this.height/2);
        ctx.textAlign='center';
        ctx.textBaseline='middle';
    }
    this.drawLenght = function (ctx){
        //Stroke dimensions
        ctx.font = "18px Sans-serif";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.strokeText((this.width/48).toFixed(2) + ' m', this.x + this.width / 2, this.y);
        ctx.strokeText((this.height/48).toFixed(2) + ' m', this.x, this.y + this.height / 2);

        //Fill dimensions
        ctx.fillStyle = "#eee";
        ctx.fillText((this.width/48).toFixed(2) + ' m', this.x + this.width / 2, this.y);
        ctx.fillText((this.height/48).toFixed(2) + ' m', this.x, this.y + this.height / 2);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
    }
}