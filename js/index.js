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
        document.querySelector(".eu input").classList.remove("hide");
    }
    else {
        document.querySelector(".eu input").classList.add("hide");
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
document.querySelector("#observacao").addEventListener("change", function (e) {
    if (document.getElementById("observacao").value != "") {
        document.querySelector("#observacao-label").classList.add("hide-opacity");
    }
    else {
        document.querySelector("#observacao-label").classList.remove("hide-opacity");
    }
});

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
            alert("Obrigado sr(a) " + nome.value + ", seus dados foram enviados com sucesso!");
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