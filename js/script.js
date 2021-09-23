var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var posCanvas;
var componentes = [];
var imgPlantaBaixa =  document.getElementById("imgPlantaBaixa");
var imgMesaQuadrada = document.getElementById("imgMesaQuadrada");
var imgMesaRedonda = document.getElementById("imgMesaRedonda");
var imgMesaBolo = document.getElementById("imgMesaBolo");
var imgMesaBuffet = document.getElementById("imgMesaBuffet");
var imgMesaCarretelG = document.getElementById("imgMesaCarretelG");
var imgMesaCarretelM = document.getElementById("imgMesaCarretelM");
var imgMesaCarretelP = document.getElementById("imgMesaCarretelP");
var qtdMesaQuadrada, qtdMesaRedonda, qtdMesaBolo, qtdMesaBuffet, qtdMesaCarretelG, qtdMesaCarretelM, qtdMesaCarretelP, qtdConvidados;
var elemento;
var selecionado;


//Interação menu sidebar
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);



window.onload = function(){
    iniciar();
    loop();
}

function iniciar(){
    //qtdMesaQuadrada = $("#qtdMesaQuadrada").text();
    qtdMesaQuadrada = 25;
    qtdMesaRedonda = 10;
    qtdMesaBolo = 2;
    qtdMesaBuffet = 2;
    qtdMesaCarretelG = 3;
    qtdMesaCarretelM = 7;
    qtdMesaCarretelP = 1;
    qtdConvidados = 0;

    document.querySelector("#qtdMesaQuadrada").innerHTML = qtdMesaQuadrada;
    document.querySelector("#qtdMesaRedonda").innerHTML = qtdMesaRedonda;
    document.querySelector("#qtdMesaBolo").innerHTML = qtdMesaBolo;
    document.querySelector("#qtdMesaBuffet").innerHTML = qtdMesaBuffet;
    document.querySelector("#qtdMesaCarretelG").innerHTML = qtdMesaCarretelG;
    document.querySelector("#qtdMesaCarretelM").innerHTML = qtdMesaCarretelM;
    document.querySelector("#qtdMesaCarretelP").innerHTML = qtdMesaCarretelP;
    document.querySelector("#qtdConvidados").innerHTML = qtdConvidados;
    
    cancelarSelecaoBtn();

    selecionado = false;

    componentes = [];
}

function loop(){
    window.requestAnimationFrame(loop, canvas);
    draw();
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgPlantaBaixa, 0, 0, 800, 600);
    posCanvas = canvas.getBoundingClientRect();
    if(selecionado){
        elemento.draw(ctx);
    }
    drawComponentes();
}

function drawComponentes(){
    if(componentes.length > 0){
        for(var i = 0; i < componentes.length; i++){
            componentes[i].draw(ctx);
        }
    }
}

function cancelarSelecaoBtn(){
    document.querySelector(".quadrada").classList.remove("selecionado");
    document.querySelector(".redonda").classList.remove("selecionado");
    document.querySelector(".bolo").classList.remove("selecionado");
    document.querySelector(".buffet").classList.remove("selecionado");
    document.querySelector(".carretelG").classList.remove("selecionado");
    document.querySelector(".carretelM").classList.remove("selecionado");
    document.querySelector(".carretelP").classList.remove("selecionado");
}

function addConvidado(elemento){
    switch(elemento.tipo){
        case 'quadrada':
        case 'redonda':
        case 'carretelG':
            qtdConvidados += 8;
            break;
        case 'carretelM':
            qtdConvidados += 6;
            break;
        case 'carretelP':
            qtdConvidados += 4;
            break;
    }
    document.querySelector("#qtdConvidados").innerHTML = qtdConvidados;
}

function removerConvidado(elemento){
    switch(elemento.tipo){
        case 'quadrada':
        case 'redonda':
        case 'carretelG':
            qtdConvidados -= 8;
            break;
        case 'carretelM':
            qtdConvidados -= 6;
            break;
        case 'carretelP':
            qtdConvidados -= 4;
            break;
    }
    document.querySelector("#qtdConvidados").innerHTML = qtdConvidados;
}

function validarEmail(email) {
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            return true;
        //document.getElementById("msgemail").innerHTML="E-mail válido";
    }
    else{
        //document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
        return false;
    }
}

//Botões mesas
btnMesaQuadrada.addEventListener("click", function(){
    if(!document.querySelector(".quadrada").classList.contains("selecionado")){
        cancelarSelecaoBtn();
        document.querySelector(".quadrada").classList.add("selecionado");
        selecionado = true;
        elemento = new Mesa('quadrada', imgMesaQuadrada, 10,10,50,50);
    }
    else{
        cancelarSelecaoBtn();
        selecionado = false;
    }
});
btnMesaRedonda.addEventListener("click", function(){
    if(!document.querySelector(".redonda").classList.contains("selecionado")){
        cancelarSelecaoBtn();
        document.querySelector(".redonda").classList.add("selecionado");
        selecionado = true;
        elemento = new Mesa('redonda', imgMesaRedonda, 10,10,50,50);
    }
    else{
        cancelarSelecaoBtn();
        selecionado = false;
    }
});
btnMesaBolo.addEventListener("click", function(){
    if(!document.querySelector(".bolo").classList.contains("selecionado")){
        cancelarSelecaoBtn();
        document.querySelector(".bolo").classList.add("selecionado");
        selecionado = true;
        elemento = new Mesa('bolo', imgMesaBolo, 10,10,60,30);
    }
    else{
        cancelarSelecaoBtn();
        selecionado = false;
    }
});
btnMesaBuffet.addEventListener("click", function(){
    if(!document.querySelector(".buffet").classList.contains("selecionado")){
        cancelarSelecaoBtn();
        document.querySelector(".buffet").classList.add("selecionado");
        selecionado = true;
        elemento = new Mesa('buffet', imgMesaBuffet, 10,10,50,50);
    }
    else{
        cancelarSelecaoBtn();
        selecionado = false;
    }
});
btnMesaCarretelG.addEventListener("click", function(){
    if(!document.querySelector(".carretelG").classList.contains("selecionado")){
        cancelarSelecaoBtn();
        document.querySelector(".carretelG").classList.add("selecionado");
        selecionado = true;
        elemento = new Mesa('carretelG', imgMesaCarretelG, 10,10,50,50);
    }
    else{
        cancelarSelecaoBtn();
        selecionado = false;
    }
});
btnMesaCarretelM.addEventListener("click", function(){
    if(!document.querySelector(".carretelM").classList.contains("selecionado")){
        cancelarSelecaoBtn();
        document.querySelector(".carretelM").classList.add("selecionado");
        selecionado = true;
        elemento = new Mesa('carretelM', imgMesaCarretelM, 10,10,50,50);
    }
    else{
        cancelarSelecaoBtn();
        selecionado = false;
    }
});
btnMesaCarretelP.addEventListener("click", function(){
    if(!document.querySelector(".carretelP").classList.contains("selecionado")){
        cancelarSelecaoBtn();
        document.querySelector(".carretelP").classList.add("selecionado");
        selecionado = true;
        elemento = new Mesa('carretelP', imgMesaCarretelP, 10,10,50,50);
    }
    else{
        cancelarSelecaoBtn();
        selecionado = false;
    }
});

//Botão excluir
document.querySelector(".excluir").addEventListener("click", () =>
    iniciar()
);

//Botão enviar (Adicionar anexo)
document.querySelector(".enviar a").addEventListener("click", function(e){
    if(document.querySelector(".anexar-layout").classList.contains("hide"))
        document.querySelector(".anexar-layout").classList.toggle("hide")
});

//Clique esquerdo
canvas.addEventListener("click", function(e){
    //Adicionar elemento
    if(selecionado){
        if(document.querySelector(".quadrada").classList.contains("selecionado") && qtdMesaQuadrada > 0){
            componentes.push(elemento);
            elemento = new Mesa('quadrada', imgMesaQuadrada, e.clientX-posCanvas.left-25, e.clientY-posCanvas.top-25, 50, 50);
            addConvidado(elemento);
            qtdMesaQuadrada--;
            if(qtdMesaQuadrada == 0){
                document.querySelector(".quadrada").classList.remove("selecionado");
                selecionado = false;
            }
            document.querySelector("#qtdMesaQuadrada").innerHTML = qtdMesaQuadrada;
        }
        else if(document.querySelector(".redonda").classList.contains("selecionado") && qtdMesaRedonda > 0){
            componentes.push(elemento);
            elemento = new Mesa('redonda', imgMesaRedonda, e.clientX-posCanvas.left-25, e.clientY-posCanvas.top-25, 50, 50);
            addConvidado(elemento);
            qtdMesaRedonda--;
            if(qtdMesaRedonda == 0){
                document.querySelector(".redonda").classList.remove("selecionado");
                selecionado = false;
            }
            document.querySelector("#qtdMesaRedonda").innerHTML = qtdMesaRedonda;
        }
        else if(document.querySelector(".bolo").classList.contains("selecionado") && qtdMesaBolo > 0){
            componentes.push(elemento);
            elemento = new Mesa('bolo', imgMesaBolo, e.clientX-posCanvas.left-25, e.clientY-posCanvas.top-25, 60, 30);
            qtdMesaBolo--;
            if(qtdMesaBolo == 0){
                document.querySelector(".bolo").classList.remove("selecionado");
                selecionado = false;
            }
            document.querySelector("#qtdMesaBolo").innerHTML = qtdMesaBolo;
        }
        else if(document.querySelector(".buffet").classList.contains("selecionado") && qtdMesaBuffet > 0){
            componentes.push(elemento);
            elemento = new Mesa('buffet', imgMesBuffet, e.clientX-posCanvas.left-25, e.clientY-posCanvas.top-25, 50, 50);
            qtdMesaBuffet--;
            if(qtdMesaBuffet == 0){
                document.querySelector(".buffet").classList.remove("selecionado");
                selecionado = false;
            }
            document.querySelector("#qtdMesaBuffet").innerHTML = qtdMesaBuffet;
        }
        else if(document.querySelector(".carretelG").classList.contains("selecionado") && qtdMesaCarretelG > 0){
            componentes.push(elemento);
            elemento = new Mesa('carretelG', imgMesaCarretelG, e.clientX-posCanvas.left-25, e.clientY-posCanvas.top-25, 50, 50);
            addConvidado(elemento);
            qtdMesaCarretelG--;
            if(qtdMesaCarretelG == 0){
                document.querySelector(".carretelG").classList.remove("selecionado");
                selecionado = false;
            }
            document.querySelector("#qtdMesaCarretelG").innerHTML = qtdMesaCarretelG;
        }
        else if(document.querySelector(".carretelM").classList.contains("selecionado") && qtdMesaCarretelM > 0){
            componentes.push(elemento);
            elemento = new Mesa('carretelM', imgMesCarretelM, e.clientX-posCanvas.left-25, e.clientY-posCanvas.top-25, 50, 50);
            addConvidado(elemento);
            qtdMesaCarretelM--;
            if(qtdMesaCarretelM == 0){
                document.querySelector(".carretelM").classList.remove("selecionado");
                selecionado = false;
            }
            document.querySelector("#qtdMesaCarretelM").innerHTML = qtdMesaCarretelM;
        }
        else if(document.querySelector(".carretelP").classList.contains("selecionado") && qtdMesaCarretelP > 0){
            componentes.push(elemento);
            elemento = new Mesa('carretelP', imgMesCarretelP, e.clientX-posCanvas.left-25, e.clientY-posCanvas.top-25, 50, 50);
            addConvidado(elemento);
            qtdMesaCarretelP--;
            if(qtdMesaCarretelP == 0){
                document.querySelector(".carretelP").classList.remove("selecionado");
                selecionado = false;
            }
            document.querySelector("#qtdMesaCarretelP").innerHTML = qtdMesaCarretelP;
        }
    }
    //Mover componente adicionado
    else{
        for(var i = 0; i < componentes.length; i++){
            if(e.clientX-posCanvas.left >= componentes[i].posX && e.clientX-posCanvas.left <= componentes[i].posX+componentes[i].width &&
            e.clientY-posCanvas.top >= componentes[i].posY && e.clientY-posCanvas.top <= componentes[i].posY+componentes[i].height){
                switch(componentes[i].tipo){
                    case 'quadrada':
                        qtdMesaQuadrada++;
                        document.querySelector("#qtdMesaQuadrada").innerHTML = qtdMesaQuadrada;
                        document.querySelector(".quadrada").classList.add("selecionado");
                        break;
                    case 'redonda':
                        qtdMesaRedonda++;
                        document.querySelector("#qtdMesaRedonda").innerHTML = qtdMesaRedonda;
                        document.querySelector(".redonda").classList.add("selecionado");
                        break;
                    case 'bolo':
                        qtdMesaBolo++;
                        document.querySelector("#qtdMesaBolo").innerHTML = qtdMesaBolo;
                        document.querySelector(".bolo").classList.add("selecionado");
                        break;
                    case 'buffet':
                        qtdMesaBuffet++;
                        document.querySelector("#qtdMesaBuffet").innerHTML = qtdMesaBuffet;
                        document.querySelector(".buffet").classList.add("selecionado");
                        break;
                    case 'carretelG':
                        qtdMesaCarretelG++;
                        document.querySelector("#qtdMesaCarretelG").innerHTML = qtdMesaCarretelG;
                        document.querySelector(".carretelG").classList.add("selecionado");
                        break;
                    case 'carretelM':
                        qtdMesaCarretelM++;
                        document.querySelector("#qtdMesaCarretelM").innerHTML = qtdMesaCarretelM;
                        document.querySelector(".carretelM").classList.add("selecionado");
                        break;
                    case 'carretelP':
                        qtdMesaCarretelP++;
                        document.querySelector("#qtdMesaCarretelP").innerHTML = qtdMesaCarretelP;
                        document.querySelector(".carretelP").classList.add("selecionado");
                        break;
                }
                elemento = componentes[i];
                removerConvidado(elemento);
                componentes.splice(i,1);
                selecionado = true;
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
            if(e.clientX-posCanvas.left >= componentes[i].posX && e.clientX-posCanvas.left <= componentes[i].posX+componentes[i].width &&
            e.clientY-posCanvas.top >= componentes[i].posY && e.clientY-posCanvas.top <= componentes[i].posY+componentes[i].height){
                switch(componentes[i].tipo){
                    case 'quadrada':
                        qtdMesaQuadrada++;
                        document.querySelector("#qtdMesaQuadrada").innerHTML = qtdMesaQuadrada;
                        break;
                    case 'redonda':
                        qtdMesaRedonda++;
                        document.querySelector("#qtdMesaRedonda").innerHTML = qtdMesaRedonda;
                        break;
                    case 'bolo':
                        qtdMesaBolo++;
                        document.querySelector("#qtdMesaBolo").innerHTML = qtdMesaBolo;
                        break;
                    case 'buffet':
                        qtdMesaBuffet++;
                        document.querySelector("#qtdMesaBuffet").innerHTML = qtdMesaBuffet;
                        break;
                    case 'carretelG':
                        qtdMesaCarretelG++;
                        document.querySelector("#qtdMesaCarretelG").innerHTML = qtdMesaCarretelG;
                        break;
                    case 'carretelM':
                        qtdMesaCarretelM++;
                        document.querySelector("#qtdMesaCarretelM").innerHTML = qtdMesaCarretelM;
                        break;
                    case 'carretelP':
                        qtdMesaCarretelP++;
                        document.querySelector("#qtdMesaCarretelP").innerHTML = qtdMesaCarretelP;
                        break;
                }
                removerConvidado(componentes[i]);
                componentes.splice(i,1);
            }
        }
    }
    else{
        cancelarSelecaoBtn();
        selecionado = false;

    }
});

//Mover componente
canvas.addEventListener("mousemove", function(e){
    if(selecionado){
        elemento.move(e, posCanvas);
    }
});

//Esconder Input Text
document.getElementById("eu-sou").addEventListener("change", function(e){
    if(document.querySelector(".eu select").value == 5){
        document.querySelector(".eu input").classList.remove("hide");
    }
    else{
        document.querySelector(".eu input").classList.add("hide");
    }
});

//Enviar Form
form.addEventListener("submit", function(e){
    var nome = document.getElementById("nome");
    var fone = document.getElementById("fone");
    var email = document.getElementById("email");
    var euSou = document.getElementById("eu-sou");
    var outro = document.getElementById("outro");

    if(nome.value == ""){
        alert("Nome não informado");
        nome.focus;
        return;
    }
    if(fone.value == ""){
        alert("Fone não informado");
        fone.focus;
        return;
    }
    if(!validarEmail(email)){
        alert("E-mail inválido");
        return;
    }
    if(euSou.value == "0"){
        alert('"Eu sou" não informado');
        euSou.focus;
        return;
    }
    if(euSou.value == "5" && outro.value == ""){
        alert("Especifique quem é você");
        outro.focus;
        return;
    }
    document.getElementById("contato-form").submit();
    log.textContent = `Formuláiro Enviado! Hora de envio: ${e.timeStamp}`;
    alert("Obrigado sr(a) " + document.getElementById("nome").value + ", seus dados foram enviados com sucesso!");
})