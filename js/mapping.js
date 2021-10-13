var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var imgPlantaBaixa = new Image();
imgPlantaBaixa.src = "imagens/plantaBaixa.png";
const imgMesaQuadrada = document.getElementById("imgMesaQuadrada"),
    imgMesaRedonda = document.getElementById("imgMesaRedonda"),
    imgMesaBolo = document.getElementById("imgMesaBolo"),
    imgMesaBuffet = document.getElementById("imgMesaBuffet"),
    imgMesaCarretelG = document.getElementById("imgMesaCarretelG"),
    imgMesaCarretelM = document.getElementById("imgMesaCarretelM"),
    imgMesaCarretelP = document.getElementById("imgMesaCarretelP");
var posCanvas;
var componentes = [], customAreas = [], lines = [], walls = [];
var elemento, rotation, numeroItem;
var qtdMesaQuadrada, qtdMesaRedonda, qtdMesaBolo, qtdMesaBuffet, qtdMesaCarretelG, qtdMesaCarretelM, qtdMesaCarretelP, qtdConvidados;
var selecionado, numerando, drawing, showDimensions;

var PADDING = 0;
var WIDTH = imgPlantaBaixa.width;
var HEIGHT = imgPlantaBaixa.height;
var dx = 0, dy = 0;

window.onload = function () {
    iniciar();
    loop();
}

function iniciar() {
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
    numerando = false;
    drawing = false;
    showDimensions = true;

    rotation = 0;
    numeroItem = 0;

    componentes = [];
    customAreas = [];
    lines = [];
    walls = [];

    $('#large-container').outerWidth(WIDTH);
    $('#large-container').outerHeight(HEIGHT);
    resizeCanvas();
}

function loop() {
    window.requestAnimationFrame(loop, canvas);
    draw();
}

function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(220, 190, 140)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgPlantaBaixa, 0, 0, imgPlantaBaixa.width, imgPlantaBaixa.height);
    posCanvas = canvas.getBoundingClientRect();
    drawComponentes();
    if (selecionado) {
        elemento.drawItem(ctx);
        if (elemento.id > 0) {
            elemento.drawNumero(ctx);
        }
    }
    else if (drawing) {
        elemento.drawElement(ctx);
        elemento.drawLenght(ctx);
    }
}

function drawComponentes() {
    //Walls
    if (walls.length > 0) {
        for (var i = 0; i < walls.length; i++) {
            walls[i].drawElement(ctx);
            if(showDimensions)walls[i].drawLenght(ctx);
        }
    }
    //Linhas
    if (lines.length > 0) {
        for (var i = 0; i < lines.length; i++) {
            lines[i].drawElement(ctx);
            if(showDimensions)lines[i].drawLenght(ctx);
        }
    }
    //Itens
    if (componentes.length > 0) {
        for (var i = 0; i < componentes.length; i++) {
            componentes[i].drawItem(ctx);
            if (componentes[i].id > 0)
                componentes[i].drawNumero(ctx);
        }
    }
    //Áreas customizadas
    if (customAreas.length > 0) {
        for (var i = 0; i < customAreas.length; i++) {
            customAreas[i].drawElement(ctx);
            if(showDimensions)customAreas[i].drawLenght(ctx);
        }
    }
}

function abrirWhatsApp(msg) {
    let isMobile = (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
            return true
        } else {
            return false
        }
    })(navigator.userAgent || navigator.vendor || window.opera);

    if (msg == null) {
        msg = "";
    }

    if (isMobile) {
        url = "https://api.whatsapp.com/send?phone=" + atob("NTUxOTk5Mjk5NzQzOQ==") + msg;
    }
    else {
        url = "https://web.whatsapp.com/send?phone=" + atob("NTUxOTk5Mjk5NzQzOQ==") + msg;
    }
    window.open(url, '_blank').focus();
}

function cancelarSelecaoBtn() {
    document.querySelector(".quadrada").classList.remove("selecionado");
    document.querySelector(".redonda").classList.remove("selecionado");
    document.querySelector(".bolo").classList.remove("selecionado");
    document.querySelector(".buffet").classList.remove("selecionado");
    document.querySelector(".carretelG").classList.remove("selecionado");
    document.querySelector(".carretelM").classList.remove("selecionado");
    document.querySelector(".carretelP").classList.remove("selecionado");

    document.querySelector(".numerar").classList.remove("selecionado");
    document.querySelector(".customArea").classList.remove("selecionado");
    document.querySelector(".line").classList.remove("selecionado");
    document.querySelector(".wall").classList.remove("selecionado");
    document.querySelector(".excluir").classList.remove("selecionado");
    document.querySelector(".confirmarExclusao").classList.add("hide");

    canvas.classList.remove("pointer");
    canvas.classList.remove("move");

    selecionado = false;
    numerando = false;
    drawing = false;
}

function addConvidado(elemento) {
    switch (elemento.tipo) {
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

function removerConvidado(elemento) {
    switch (elemento.tipo) {
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

function selecaoFalse() {
    selecionado = false;
    canvas.classList.remove("move");
}

function selecaoTrue() {
    selecionado = true;
    canvas.classList.add("move");
}

//Canvas scrollbar


//canvas.width = WIDTH;
//canvas.height = HEIGHT; 
var scrollContainer = document.getElementById('scroll-container');

function repositionCanvas() {
    ctx.translate(dx, dy);
    console.log("X1: " + dx);
    console.log("Y1: " + dy);
    dx = scrollContainer.scrollLeft + PADDING;
    dy = scrollContainer.scrollTop + PADDING;
    ctx.translate(-dx, -dy);
    draw();

    console.log("X2: " + dx);
    console.log("Y2: " + dy);

}

function resizeCanvas() {
    /*
    $("#canvas").outerWidth(scrollContainer.clientWidth);
    $("#canvas").outerHeight(scrollContainer.clientHeight);
    canvas.width = scrollContainer.clientWidth;
    canvas.height = scrollContainer.clientHeight;
    */
    $("#canvas").outerWidth(imgPlantaBaixa.width);
    $("#canvas").outerHeight(imgPlantaBaixa.height);
    canvas.width = imgPlantaBaixa.width;
    canvas.height = imgPlantaBaixa.height;
}

scrollContainer.addEventListener('scroll', function () {
    //resizeCanvas();
    //repositionCanvas();
});
//repositionCanvas();

//Botões mesas
btnMesaQuadrada.addEventListener("click", function () {
    if (!document.querySelector(".quadrada").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        document.querySelector(".quadrada").classList.add("selecionado");
        selecaoTrue();
        elemento = new Mesa('quadrada', imgMesaQuadrada, 10, 10, 110, 110, rotation);
    }
    else {
        cancelarSelecaoBtn();
        selecaoFalse();
    }
});
btnMesaRedonda.addEventListener("click", function () {
    if (!document.querySelector(".redonda").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        document.querySelector(".redonda").classList.add("selecionado");
        selecaoTrue();
        elemento = new Mesa('redonda', imgMesaRedonda, 10, 10, 110, 110, rotation);
    }
    else {
        cancelarSelecaoBtn();
        selecaoFalse();
    }
});
btnMesaBolo.addEventListener("click", function () {
    if (!document.querySelector(".bolo").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        document.querySelector(".bolo").classList.add("selecionado");
        selecaoTrue();
        elemento = new Mesa('bolo', imgMesaBolo, 10, 10, 107.4, 54.3, rotation);
    }
    else {
        cancelarSelecaoBtn();
        selecaoFalse();
    }
});
btnMesaBuffet.addEventListener("click", function () {
    if (!document.querySelector(".buffet").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        document.querySelector(".buffet").classList.add("selecionado");
        selecaoTrue();
        elemento = new Mesa('buffet', imgMesaBuffet, 10, 10, 115.2, 43.2, rotation);
    }
    else {
        cancelarSelecaoBtn();
        selecaoFalse();
    }
});
btnMesaCarretelG.addEventListener("click", function () {
    if (!document.querySelector(".carretelG").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        document.querySelector(".carretelG").classList.add("selecionado");
        selecaoTrue();
        elemento = new Mesa('carretelG', imgMesaCarretelG, 10, 10, 110, 110, rotation);
    }
    else {
        cancelarSelecaoBtn();
        selecaoFalse();
    }
});
btnMesaCarretelM.addEventListener("click", function () {
    if (!document.querySelector(".carretelM").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        document.querySelector(".carretelM").classList.add("selecionado");
        selecaoTrue();
        elemento = new Mesa('carretelM', imgMesaCarretelM, 10, 10, 100, 100, rotation);
    }
    else {
        cancelarSelecaoBtn();
        selecaoFalse();
    }
});
btnMesaCarretelP.addEventListener("click", function () {
    if (!document.querySelector(".carretelP").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        document.querySelector(".carretelP").classList.add("selecionado");
        selecaoTrue();
        elemento = new Mesa('carretelP', imgMesaCarretelP, 10, 10, 90, 90, rotation);
    }
    else {
        cancelarSelecaoBtn();
        selecaoFalse();
    }
});
/*
$('.selecionar button').on('focus', function(e) {
    e.preventDefault();
    var id = $(this).attr('id');
    console.log(id);

    switch(id){
        case 'btnMesaQuadrada':
    }
    if($(this)){
        selecionado = true;
        elemento = new Mesa('quadrada', imgMesaQuadrada, 10, 10, 50, 50);
    } else{
        selecionado = false;
    }
});
*/
//Teclas de atalho
document.addEventListener("keydown", (e) => {
    //console.log(e.key)
    switch (e.key) {
        case 'r':
            rotation += 45 * Math.PI / 180;
            elemento.rotation = this.rotation;
            break;
        case 'Enter':
            if (!document.querySelector(".nameCustomArea").classList.contains("hide")) {
                nameConfirm();
            }
            if (!document.querySelector(".confirmarExclusao").classList.contains("hide")) {
                excluirConfirmar()
            }
            break;
        case 'Escape':
            if (!document.querySelector(".nameCustomArea").classList.contains("hide")) {
                nameCancel();
            }
            if (!document.querySelector(".confirmarExclusao").classList.contains("hide")) {
                excluirCancelar()
            }
            else {
                cancelarSelecaoBtn();
            }
            break;
    }
});

//Botão rotacionar
document.querySelector(".rotate").addEventListener("click", () => {
    rotation += 45 * Math.PI / 180;
    elemento.rotation = this.rotation;
});

//Botão numerar
document.querySelector(".numerar").addEventListener("click", () => {
    if (!document.querySelector(".numerar").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        selecaoFalse();
        document.querySelector(".numerar").classList.add("selecionado");
        canvas.classList.add("pointer");
        numerando = true;
    }
    else {
        cancelarSelecaoBtn();
        canvas.classList.remove("pointer");
    }
});

//Botão area customizada
document.querySelector(".customArea").addEventListener("click", () => {
    if (!document.querySelector(".customArea").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        selecaoFalse();
        document.querySelector(".customArea").classList.add("selecionado");
        canvas.classList.add("pointer");
    }
    else {
        cancelarSelecaoBtn();
        canvas.classList.remove("pointer");
    }
});

//Botão linha reta
document.querySelector(".line").addEventListener("click", () => {
    if (!document.querySelector(".line").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        selecaoFalse();
        document.querySelector(".line").classList.add("selecionado");
        canvas.classList.add("pointer");
    }
    else {
        cancelarSelecaoBtn();
        canvas.classList.remove("pointer");
    }
});

//Botão parede
document.querySelector(".wall").addEventListener("click", () => {
    if (!document.querySelector(".wall").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        selecaoFalse();
        document.querySelector(".wall").classList.add("selecionado");
        canvas.classList.add("pointer");
    }
    else {
        cancelarSelecaoBtn();
        canvas.classList.remove("pointer");
    }
});

//Botão excluir
document.querySelector(".excluir").addEventListener("click", function () {
    if (!document.querySelector(".excluir").classList.contains("selecionado")) {
        cancelarSelecaoBtn();
        selecaoFalse();
        document.querySelector(".excluir").classList.add("selecionado");
        document.querySelector(".confirmarExclusao").classList.remove("hide");
    }
    else {
        cancelarSelecaoBtn();
    }
});

//Excluir confirmar
function excluirConfirmar() {
    iniciar();
    document.querySelector(".confirmarExclusao").classList.add("hide");
}

//Excluir cancelar
function excluirCancelar() {
    document.querySelector(".confirmarExclusao").classList.add("hide");
    cancelarSelecaoBtn();
}

function toggleDimensions(){
    if(document.getElementById('show-dimensions').checked){
        showDimensions = true;
    }
    else{
        showDimensions = false;
    }
}

//Botão download (Adicionar anexo)
document.querySelector(".download").addEventListener("click", function (e) {
    if (document.querySelector(".anexar-layout").classList.contains("hide"))
        document.querySelector(".anexar-layout").classList.remove("hide")

    const layout = document.createElement("a");
    document.body.appendChild(layout);
    layout.href = canvas.toDataURL();
    layout.download = "layout.png";
    layout.click();
    document.body.removeChild(layout);
});

function formatCoord() {
    if (elemento.width < 0) {
        elemento.width *= -1;
        elemento.x -= elemento.width;
        elemento.xFinal += elemento.width;
    }
    if (elemento.height < 0) {
        elemento.height *= -1;
        elemento.y -= elemento.height;
        elemento.yFinal += elemento.height;
    }
}

function clearNameCustomArea() {
    document.querySelector("#customAreaName").value = "";
    document.querySelector(".nameCustomArea").classList.add("hide");
    document.querySelector(".customArea").classList.add("selecionado");
    canvas.classList.add("pointer");
}

function nameConfirm() {
    elemento.text = document.querySelector("#customAreaName").value;

    formatCoord();

    customAreas.push(elemento);
    clearNameCustomArea();
}

function nameCancel() {
    elemento = null;
    clearNameCustomArea();
}

//Clique esquerdo up
canvas.addEventListener("mouseup", function (e) {
    if (drawing) {
        if (elemento.width != 0 || elemento.height != 0) {
            if (document.querySelector(".customArea").classList.contains("selecionado")) {
                document.querySelector(".nameCustomArea").classList.remove("hide");
                document.querySelector("#customAreaName").focus();
                cancelarSelecaoBtn();
            }
            else if (document.querySelector(".line").classList.contains("selecionado")) {
                lines.push(elemento);
            }
            else if (document.querySelector(".wall").classList.contains("selecionado")) {
                walls.push(elemento);
            }
        }
        else {
            elemento = null;

        }
        drawing = false;
    }
});

function addLine(e) {
    elemento = new Line();
    elemento.beginDraw(e, posCanvas);
    drawing = true;
}

function addWall(e) {
    elemento = new Wall();
    elemento.beginDraw(e, posCanvas);
    drawing = true;
}

function addCustomArea(e) {
    elemento = new CustomArea();
    elemento.beginDraw(e, posCanvas);
    drawing = true;
}

function addItem(e) {
    if (document.querySelector(".quadrada").classList.contains("selecionado") && qtdMesaQuadrada > 0) {
        componentes.push(elemento);
        elemento = new Mesa('quadrada', imgMesaQuadrada, e.clientX - posCanvas.left, e.clientY - posCanvas.top, 110, 110, rotation);
        addConvidado(elemento);
        qtdMesaQuadrada--;
        if (qtdMesaQuadrada == 0) {
            document.querySelector(".quadrada").classList.remove("selecionado");
            selecaoFalse();
        }
        document.querySelector("#qtdMesaQuadrada").innerHTML = qtdMesaQuadrada;
    }
    else if (document.querySelector(".redonda").classList.contains("selecionado") && qtdMesaRedonda > 0) {
        componentes.push(elemento);
        elemento = new Mesa('redonda', imgMesaRedonda, e.clientX - posCanvas.left, e.clientY - posCanvas.top, 110, 110, rotation);
        addConvidado(elemento);
        qtdMesaRedonda--;
        if (qtdMesaRedonda == 0) {
            document.querySelector(".redonda").classList.remove("selecionado");
            selecaoFalse();
        }
        document.querySelector("#qtdMesaRedonda").innerHTML = qtdMesaRedonda;
    }
    else if (document.querySelector(".bolo").classList.contains("selecionado") && qtdMesaBolo > 0) {
        componentes.push(elemento);
        elemento = new Mesa('bolo', imgMesaBolo, e.clientX - posCanvas.left, e.clientY - posCanvas.top, 107.4, 54.3, rotation);
        qtdMesaBolo--;
        if (qtdMesaBolo == 0) {
            document.querySelector(".bolo").classList.remove("selecionado");
            selecaoFalse();
        }
        document.querySelector("#qtdMesaBolo").innerHTML = qtdMesaBolo;
    }
    else if (document.querySelector(".buffet").classList.contains("selecionado") && qtdMesaBuffet > 0) {
        componentes.push(elemento);
        elemento = new Mesa('buffet', imgMesaBuffet, e.clientX - posCanvas.left, e.clientY - posCanvas.top, 115.2, 43.2, rotation);
        qtdMesaBuffet--;
        if (qtdMesaBuffet == 0) {
            document.querySelector(".buffet").classList.remove("selecionado");
            selecaoFalse();
        }
        document.querySelector("#qtdMesaBuffet").innerHTML = qtdMesaBuffet;
    }
    else if (document.querySelector(".carretelG").classList.contains("selecionado") && qtdMesaCarretelG > 0) {
        componentes.push(elemento);
        elemento = new Mesa('carretelG', imgMesaCarretelG, e.clientX - posCanvas.left, e.clientY - posCanvas.top, 110, 110, rotation);
        addConvidado(elemento);
        qtdMesaCarretelG--;
        if (qtdMesaCarretelG == 0) {
            document.querySelector(".carretelG").classList.remove("selecionado");
            selecaoFalse();
        }
        document.querySelector("#qtdMesaCarretelG").innerHTML = qtdMesaCarretelG;
    }
    else if (document.querySelector(".carretelM").classList.contains("selecionado") && qtdMesaCarretelM > 0) {
        componentes.push(elemento);
        elemento = new Mesa('carretelM', imgMesaCarretelM, e.clientX - posCanvas.left, e.clientY - posCanvas.top, 100, 100, rotation);
        addConvidado(elemento);
        qtdMesaCarretelM--;
        if (qtdMesaCarretelM == 0) {
            document.querySelector(".carretelM").classList.remove("selecionado");
            selecaoFalse();
        }
        document.querySelector("#qtdMesaCarretelM").innerHTML = qtdMesaCarretelM;
    }
    else if (document.querySelector(".carretelP").classList.contains("selecionado") && qtdMesaCarretelP > 0) {
        componentes.push(elemento);
        elemento = new Mesa('carretelP', imgMesaCarretelP, e.clientX - posCanvas.left, e.clientY - posCanvas.top, 90, 90, rotation);
        addConvidado(elemento);
        qtdMesaCarretelP--;
        if (qtdMesaCarretelP == 0) {
            document.querySelector(".carretelP").classList.remove("selecionado");
            selecaoFalse();
        }
        document.querySelector("#qtdMesaCarretelP").innerHTML = qtdMesaCarretelP;
    }
}

function moverNumerarItem(e) {
    var xClick = e.clientX - posCanvas.left,
        yClick = e.clientY - posCanvas.top;
    for (var i = 0; i < componentes.length; i++) {
        var xComp = componentes[i].posX,
            yComp = componentes[i].posY,
            wComp = componentes[i].width / 2,
            hComp = componentes[i].height / 2;
        if (xClick >= xComp - wComp && xClick <= xComp + wComp &&
            yClick >= yComp - hComp && yClick <= yComp + hComp) {

            //Numerar item
            if (numerando) {
                if (componentes[i].id == 0) {
                    numeroItem++;
                    componentes[i].id = numeroItem;
                    console.log(numeroItem);
                    ctx.font = "30px Comic Sans MS";
                    ctx.fillStyle = "red";
                    ctx.fillText("teste" + numeroItem, 50, 50);
                }
            }
            //Reposicionar item
            else {
                rotation = componentes[i].rotation;
                switch (componentes[i].tipo) {
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
                componentes.splice(i, 1);
                selecaoTrue();
            }
            break;
        }
    }
}

//Clique esquerdo down
canvas.addEventListener("mousedown", function (e) {
    if (e.button == 0) {
        if (document.querySelector(".excluir").classList.contains("selecionado")) {
            excluirCancelar();
        }
        //Desenhar linha reta
        else if (document.querySelector(".line").classList.contains("selecionado")) {
            addLine(e);
        }
        //Desenhar parede
        else if (document.querySelector(".wall").classList.contains("selecionado")) {
            addWall(e);
        }
        //Area customizada
        else if (document.querySelector(".customArea").classList.contains("selecionado") && !drawing) {
            addCustomArea(e);
        }
        //Adicionar item
        else if (selecionado) {
            addItem(e);
        }
        //Mover ou numerar item adicionado
        else {
            moverNumerarItem(e);
        }
    }
});

function between(xClick, yClick, line){
    var minX = Math.min.apply(Math, [line.x, line.xFinal]),
        maxX = Math.max.apply(Math, [line.x, line.xFinal]),
        minY = Math.min.apply(Math, [line.y, line.yFinal]),
        maxY = Math.max.apply(Math, [line.y, line.yFinal]);
    
    if (xClick >= minX-4 && xClick <= maxX+4 &&
        yClick >= minY-4 && yClick <= maxY+4) {
        return true;
    }
    return false;
}

//Clique direito
canvas.addEventListener('contextmenu', event => event.preventDefault());
canvas.addEventListener('contextmenu', function (e) {
    if (!selecionado) {
        var xClick = e.clientX - posCanvas.left,
            yClick = e.clientY - posCanvas.top;

        if (!drawing) {
            //Deletar area personalizada
            if (document.querySelector(".customArea").classList.contains("selecionado")) {
                for (var i = customAreas.length - 1; i >= 0; i--) {
                    var xComp = customAreas[i].x,
                        yComp = customAreas[i].y,
                        wComp = customAreas[i].width,
                        hComp = customAreas[i].height;
                    if (xClick >= xComp && xClick <= xComp + wComp &&
                        yClick >= yComp && yClick <= yComp + hComp) {
                        customAreas.splice(i, 1);
                        break;
                    }
                }
            }
            //Deletar linha
            else if (document.querySelector(".line").classList.contains("selecionado")) {
                for (var i = lines.length - 1; i >= 0; i--) {
                    var x = lines[i].x,
                        y = lines[i].y,
                        m = lines[i].m;

                    if (between(xClick, yClick, lines[i])) {

                        if (lines[i].m == 0) {
                            lines.splice(i, 1);
                            break;
                        }

                        var eqFundamental = yClick - y - xClick * m + x * m;
                        if (eqFundamental < 0) { eqFundamental *= -1; }
                        var d = eqFundamental / Math.sqrt(m * m + 1);

                        //console.log(d);
                        if (d <= 4) {
                            lines.splice(i, 1);
                            break;
                        }
                    }
                }
            }
            //Deletar parede
            else if (document.querySelector(".wall").classList.contains("selecionado")) {
                for (var i = walls.length - 1; i >= 0; i--) {
                    var x = walls[i].x,
                        y = walls[i].y,
                        m = walls[i].m;

                    if (between(xClick, yClick, walls[i])) {

                        if (walls[i].m == 0) {
                            walls.splice(i, 1);
                            break;
                        }

                        var eqFundamental = yClick - y - xClick * m + x * m;
                        if (eqFundamental < 0) { eqFundamental *= -1; }
                        var d = eqFundamental / Math.sqrt(m * m + 1);

                        if (d <= 7) {
                            walls.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }

        for (var i = componentes.length - 1; i >= 0; i--) {
            var xComp = componentes[i].posX,
                yComp = componentes[i].posY,
                wComp = componentes[i].width / 2,
                hComp = componentes[i].height / 2;
            if (xClick >= xComp - wComp && xClick <= xComp + wComp &&
                yClick >= yComp - hComp && yClick <= yComp + hComp) {

                //Deletar numeracao
                if (numerando) {
                    if (componentes[i].id > 0) {
                        for (var j = 0; j < componentes.length; j++) {
                            if (componentes[i].id < componentes[j].id) {
                                componentes[j].id--;
                            }
                        }
                        componentes[i].id = 0;
                        numeroItem--;
                    }
                }
                //Deletar item
                else {
                    switch (componentes[i].tipo) {
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
                    componentes.splice(i, 1);
                    break;
                }
            }
        }
    }
    else {
        cancelarSelecaoBtn();
        selecaoFalse();
    }
});

//Arrastar clique direito
canvas.addEventListener('dragstart', function (e) {
    console.log(e.key)
});

//Mover componente
canvas.addEventListener("mousemove", function (e) {
    if (selecionado) {
        elemento.move(e, posCanvas);
    }
    else if (drawing) {
        elemento.endDraw(e, posCanvas);
    }
});

/*
let imgInput = document.getElementById('imgInput');
    imgInput.addEventListener('change', function(e) {
      if(e.target.files) {
        let imageFile = e.target.files[0]; //here we get the image file
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onloadend = function (e) {
          var myImage = new Image(); // Creates image object
          myImage.src = e.target.result; // Assigns converted image to image object
          myImage.onload = function(ev) {
            ctx.drawImage(myImage,0,0); // Draws the image on canvas
            let imgData = canvas.toDataURL("image/jpeg",0.75); // Assigns image base64 string in jpeg format to a variable
          }
        }
      }
    });
*/
