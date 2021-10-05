function Mesa(tipo, img, x, y, width, height, rotation) {
    //Atributos
    this.id = 0;
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
    this.drawItem = function(ctx) {
        ctx.translate(this.posX, this.posY);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img, -this.width/2, -this.height/2, this.width, this.height);
        ctx.rotate(-this.rotation);
        ctx.translate(-this.posX, -this.posY);
    }
    this.drawNumero = function(ctx){
        ctx.beginPath();
        ctx.fillStyle = "#555";
        ctx.arc(this.posX, this.posY-1, 11, 0, 2*Math.PI);
        ctx.fill();
        
        ctx.font = "16px Mulish";
        ctx.fillStyle = "#eee";
        ctx.fillText(this.id, this.posX, this.posY);
        ctx.textAlign='center';
        ctx.textBaseline='middle';
    }
}