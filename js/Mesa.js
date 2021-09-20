function Mesa(tipo, img, x, y, width, height){
    //Atributos
    this.tipo = tipo;
    this.posX = x;
    this.posY = y;
    this.width = width;
    this.height = height;
    this.color = 'brown';
    this.selecionado = true;
    this.img = img;

    //Métodos
    this.draw = function(ctx){
        ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    }
    this.move = function(e, posCanvas){
        this.posX = e.clientX-posCanvas.left-25;
        this.posY = e.clientY-posCanvas.top-25;
    }
}