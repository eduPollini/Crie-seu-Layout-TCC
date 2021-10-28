function Mesa(tipo, img, x, y, width, height, rotation) {
    //Atributos
    this.id = 0;
    this.tipo = tipo;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    //this.selecionado = true;
    this.img = img;
    this.rotation = rotation;

    this.dx = 0;
    this.dy = 0;

    //Métodos
    this.move = function (e, posCanvas) {
        this.x = e.clientX - posCanvas.left;
        this.y = e.clientY - posCanvas.top;
    }
    this.drawElement = function(ctx) {
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img, -this.width/2, -this.height/2, this.width, this.height);
        ctx.rotate(-this.rotation);
        ctx.translate(-this.x, -this.y);
    }
    this.drawNumero = function(ctx){
        //Circle
        ctx.beginPath();
        ctx.fillStyle = "#555";
        ctx.arc(this.x, this.y-1, 15, 0, 2*Math.PI);
        ctx.fill();
        
        //Number
        ctx.font = "20px Sans-serif";
        ctx.fillStyle = "#eee";
        ctx.fillText(this.id, this.x, this.y);
        ctx.textAlign='center';
        ctx.textBaseline='middle';
    }
}