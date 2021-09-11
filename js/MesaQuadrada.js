function Mesa(tipo, x, y, width, height){
    //Atributos
    this.tipo = tipo;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = 'brown';
    this.selecionado = true;
    //this.img = img;
    //Métodos
    this.draw = function(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.move = function(e){
        this.x = e.clientX-25;
        this.y = e.clientY-25;
    }
}