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

    this.dx = 0;
    this.dy = 0;

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

        //Auto alinhar com os eixos
        if(this.width > -5 && this.width < 5){
            this.width = 0;
            this.xFinal = this.x;
        }else if (this.height > -5 && this.height < 5){
            this.height = 0;
            this.yFinal = this.y;
        }

        //Coeficiente angular
        if (this.width == 0) {
            this.m = 0;
        } else {
            this.m = this.height / this.width;
        }

        //Comprimento
        this.lenght = (Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / 48).toFixed(2);
    }
    this.drawElement = function (ctx) {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x - this.dx, this.y - this.dy);
        ctx.lineTo(this.xFinal  - this.dx, this.yFinal - this.dy);
        ctx.stroke();
    }
    this.drawLenght = function (ctx){
        //Stroke lenght
        ctx.font = "18px Sans-serif";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 3;
        ctx.strokeText(this.lenght + ' m', this.x + this.width / 2, this.y + this.height / 2);

        //Lenght
        ctx.fillStyle = "#eee";
        ctx.fillText(this.lenght + ' m', this.x + this.width / 2, this.y + this.height / 2);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
    }
    this.move = function (e, posCanvas){
        this.x = e.clientX - posCanvas.left;
        this.y = e.clientY - posCanvas.top;
        this.xFinal = this.x + this.width;
        this.yFinal = this.y + this.height;
    }
}