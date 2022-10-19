//Interação menu sidebar
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

function validarEmail(email) {
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true;
        //document.getElementById("msgemail").innerHTML="E-mail válido";
    }
    else {
        //document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
        return false;
    }
}

//Esconder Input Text
document.getElementById("eu-sou").addEventListener("change", function (e) {
    if (document.querySelector(".eu select").value == 5) {
        document.querySelector('.outro').classList.remove('hide');
    }
    else {
        document.querySelector('.outro').classList.add('hide');
    }
});

//Esconder Label
document.querySelector("#nome").addEventListener("change", function (e) {
    if (document.getElementById("nome").value != "") {
        document.querySelector("#nome-label").classList.add("hide-opacity");
    }
    else {
        document.querySelector("#nome-label").classList.remove("hide-opacity");
    }
});
document.querySelector("#fone").addEventListener("change", function (e) {
    if (document.getElementById("fone").value != "") {
        document.querySelector("#fone-label").classList.add("hide-opacity");
    }
    else {
        document.querySelector("#fone-label").classList.remove("hide-opacity");
    }
});
document.querySelector("#email").addEventListener("change", function (e) {
    if (document.getElementById("email").value != "") {
        document.querySelector("#email-label").classList.add("hide-opacity");
    }
    else {
        document.querySelector("#email-label").classList.remove("hide-opacity");
    }
});
document.querySelector("#outro").addEventListener("change", function (e) {
    if (document.getElementById("outro").value != "") {
        document.querySelector("#outro-label").classList.add("hide-opacity");
    }
    else {
        document.querySelector("#outro-label").classList.remove("hide-opacity");
    }
});
document.querySelector("#observacao").addEventListener("change", function (e) {
    if (document.getElementById("observacao").value != "") {
        document.querySelector("#observacao-label").classList.add("hide-opacity");
    }
    else {
        document.querySelector("#observacao-label").classList.remove("hide-opacity");
    }
});

//Abrir WhatsApp
function abrirWhatsApp() {
    let isMobile = (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
            return true
        } else {
            return false
        }
    })(navigator.userAgent || navigator.vendor || window.opera);

    if (isMobile) {
        url = "https://api.whatsapp.com/send?phone=" + atob("NTUxOTk5Mjk5NzQzOQ==");
    }
    else {
        url = "https://web.whatsapp.com/send?phone=" + atob("NTUxOTk5Mjk5NzQzOQ==");
    }
    window.open(url, '_blank').focus();
}

//Enviar Form
function sendEmail() {
    var nome = document.getElementById("nome");
    var fone = document.getElementById("fone");
    var email = document.getElementById("email");
    var euSou = document.getElementById("eu-sou");
    var outro = document.getElementById("outro");
    var observacao = document.getElementById("observacao");

    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
        return;
    }
    if (fone.value == "") {
        alert("Fone não informado");
        fone.focus();
        return;
    }
    if (!validarEmail(email)) {
        alert("E-mail inválido");
        email.focus();
        return;
    }
    if (euSou.value == "0") {
        alert('"Eu sou" não informado');
        euSou.focus();
        return;
    }
    if (euSou.value == "5" && outro.value == "") {
        alert("Especifique quem é você");
        outro.focus();
        return;
    }

    var sou;
    if (euSou.value == 5) {
        sou = outro.value;
    }
    else {
        sou = $('#eu-sou :selected').text();
    }

    /*
    var msg = "&text="
        + "Nome: " + nome.value + "%0a"
        + "Fone: " + fone.value + "%0a"
        + "E-mail: " + email.value + "%0a"
        + "Eu sou: " + sou + "%0a"
        + "Convidados: " + qtdConvidados + "<br/>"
        + "Observação: " + observacao.value + "%0a" + canvas;*/

    //abrirWhatsApp(msg);

    Email.send({
        Host: "smtp.gmail.com",
        Username: atob("c3JwZm9ybUBnbWFpbC5jb20="),
        Password: atob("c3JwZm9ybTEyMw=="),
        To: atob("c3JwZm9ybUBnbWFpbC5jb20="),
        From: atob("c3JwZm9ybUBnbWFpbC5jb20="),
        Subject: "Novo Layout Criado",
        Body: "Nome: " + nome.value + "<br/>"
            + "Fone: " + fone.value + "<br/>"
            + "E-mail: " + email.value + "<br/>"
            + "Eu sou: " + sou + "<br/>"
            + "Observação: " + observacao.value
    })
        .then(function () {
            alert("Obrigado " + nome.value + ", seus dados foram enviados com sucesso!");
        });

        /*
    var urlEmail = "mailto:epollini01@gmail.com?Subject=Novo%20Layout&Body="
        + "Nome: " + nome.value + "%0a"
        + "Fone: " + fone.value + "%0a"
        + "E-mail: " + email.value + "%0a"
        + "Eu sou: " + sou + "%0a"
        + "Observação: " + observacao.value + "%0a"
        + "Criei meu layout customizado: ";
        */
}