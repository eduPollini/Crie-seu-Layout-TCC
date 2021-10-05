function CustomArea(){
    //Atributos
    this.x;
    this.y;
    this.width;
    this.height;
    this.text = "";

    //Métodos
    this.beginArea = function(event, posCanvas){
        this.x = event.clientX - posCanvas.left;
        this.y = event.clientY - posCanvas.top;
    }
    this.endArea = function(event, posCanvas){
        this.width = event.clientX - posCanvas.left - this.x;
        this.height = event.clientY - posCanvas.top - this.y;
    }
    this.drawArea = function(ctx){
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.setLineDash([6]);
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        ctx.font = "24px Mulish";
        ctx.fillStyle = "black";
        ctx.fillText(this.text, this.x + this.width/2, this.y + this.height/2);
        ctx.textAlign='center';
        ctx.textBaseline='middle';
    }
}