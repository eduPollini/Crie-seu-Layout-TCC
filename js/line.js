function Line() {
    //Atributos
    this.x;
    this.y;
    this.xFinal;
    this.yFinal;
    this.width;
    this.height;
    this.m;
    this.lenght;

    //Métodos
    this.beginDraw = function (event, posCanvas) {
        this.x = event.clientX - posCanvas.left;
        this.y = event.clientY - posCanvas.top;
        this.xFinal = this.x;
        this.yFinal = this.y;
        this.width = 0;
        this.height = 0;
    }
    this.endDraw = function (event, posCanvas) {
        this.xFinal = event.clientX - posCanvas.left;
        this.yFinal = event.clientY - posCanvas.top;
        this.width = this.xFinal - this.x;
        this.height = this.yFinal - this.y;
        if (this.width == 0) {
            this.m = 0;
        } else {
            this.m = this.height / this.width;
        }
        this.lenght = (Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / 48).toFixed(2);
    }
    this.drawElement = function (ctx) {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.xFinal, this.yFinal);
        ctx.stroke();
    }
    this.drawLenght = function (ctx){
        //Stroke lenght
        ctx.font = "18px Sans-serif";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.strokeText(this.lenght + ' m', this.x + this.width / 2, this.y + this.height / 2);

        //Lenght
        ctx.fillStyle = "#eee";
        ctx.fillText(this.lenght + ' m', this.x + this.width / 2, this.y + this.height / 2);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
    }
}