function Mesa(tipo, img, x, y, width, height, rotation) {
    //Atributos
    this.tipo = tipo;
    this.posX = x;
    this.posY = y;
    this.width = width;
    this.height = height;
    this.selecionado = true;
    this.img = img;
    this.rotation = rotation;

    //Métodos
    //this.draw = function (ctx) {ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);}
    this.move = function (e, posCanvas) {
        this.posX = e.clientX - posCanvas.left;
        this.posY = e.clientY - posCanvas.top;
    }
    this.rotateDraw = function(context) {
        context.translate(this.posX, this.posY);
        context.rotate(this.rotation);
        context.drawImage(this.img, this.width-this.width*1.5, this.height-this.height*1.5, this.width, this.height);
        context.rotate(-this.rotation);
        context.translate(-this.posX, -this.posY);
    }
}