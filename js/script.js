var canvas;
var ctx;
var elemento;
var qtdMesaQuadrada = 25;
var selecionado;

window.onload = function(){
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    var componentes = [];
    var imgPlantaBaixa = new Image();
    imgPlantaBaixa.src = "imagens/rascunho.png";
    selecionado = false;
    document.querySelector("#qtdMesaQuadrada").innerHTML = qtdMesaQuadrada;

    canvas.addEventListener("click", function(e){
        //Adicionar elemento
        if(selecionado && qtdMesaQuadrada > 0){
            elemento.selecionado = false;
            componentes.push(elemento);
            elemento = new Mesa('quadrada', e.clientX-25, e.clientY-25, 30, 30);
            qtdMesaQuadrada--;
            if(qtdMesaQuadrada == 0){
                selecionado = false;
                document.getElementById('btnMesaQuadrada').style.cssText = 'color: black';
            }
            document.querySelector("#qtdMesaQuadrada").innerHTML = qtdMesaQuadrada;
        }
        //Mover elemento
        else if(!selecionado){
            for(var i = 0; i < componentes.length; i++){
                if(e.clientX >= componentes[i].x+8 && e.clientX <= componentes[i].x+componentes[i].width+8 &&
                   e.clientY >= componentes[i].y+8 && e.clientY <= componentes[i].y+componentes[i].height+8){
                    qtdMesaQuadrada++;
                    selecionado = true;
                    document.getElementById('btnMesaQuadrada').style.cssText = 'color: red';
                    elemento = componentes[i];
                    elemento.selecionado = true;
                    componentes.splice(i, 1);
                }
            }
        }
    });

    //Clique direito
    canvas.addEventListener('contextmenu', event => event.preventDefault());
    canvas.addEventListener('contextmenu', function(e) {
        //Deletar elemento
        if(!selecionado){
            for(var i = 0; i < componentes.length; i++){
                if(e.clientX >= componentes[i].x+8 && e.clientX <= componentes[i].x+componentes[i].width+8 &&
                   e.clientY >= componentes[i].y+8 && e.clientY <= componentes[i].y+componentes[i].height+8){                       
                       if(componentes[i].tipo == 'quadrada'){
                           qtdMesaQuadrada++;
                           document.querySelector("#qtdMesaQuadrada").innerHTML = qtdMesaQuadrada;
                       }
                       componentes.splice(i,1);
                       console.log('Componente ' + i + ' deletado!');
                }
            }
        }
        //Cancelar seleção do componente
        else{
            selecionado = false;
            document.getElementById('btnMesaQuadrada').style.cssText = 'color: black';
        }
    });

    canvas.addEventListener("mousemove", function(e){
        if(selecionado){
            elemento.move(e);
        }
    });

    btnMesaQuadrada.addEventListener("click", function(e){
        if(!selecionado){
            elemento = new Mesa('quadrada', 10,10,30,30);
            selecionado = true;
            document.getElementById('btnMesaQuadrada').style.cssText = 'color: red';
        }
        else{
            selecionado = false;
            document.getElementById('btnMesaQuadrada').style.cssText = 'color: black';
        }
    });

    function drawComponentes(){
        if(componentes.length > 0){
            for(var i = 0; i < componentes.length; i++){
                componentes[i].draw(ctx);
                //ctx.fillStyle = elemento.color;
                //ctx.fillRect(componentes[i].x, componentes[i].y, componentes[i].width, componentes[i].height);
            }
        }
    }

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //ctx.drawImage(imgPlantaBaixa, 0, 0, imgPlantaBaixa.width, imgPlantaBaixa.height, 0, 0, canvas.Width, canvas.Height);
        ctx.drawImage(imgPlantaBaixa, 0, 0);
        if(selecionado){
            elemento.draw(ctx);
        }
        drawComponentes();
    }

    imgPlantaBaixa.onload = function(){
        loop();
    }

    function loop(){
        window.requestAnimationFrame(loop,canvas);
        draw();
    }
}