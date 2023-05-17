var listPlayersRota = [];
var listPlayersRank = [];

var Action = {
    Rank: 0,
    Rota: 1
};

$(document).ready(function () {
    $('#opcaoClassificacao').on('change', function () {
        if ($(this).val() == 'Rank') {
            $('#Rank-campos').removeClass('d-none');
            $('#Rota-campos').addClass('d-none');
        } else if ($(this).val() == 'Rota') {
            $('#Rank-campos').addClass('d-none');
            $('#Rota-campos').removeClass('d-none');
        } else {
            $('#Rank-campos').addClass('d-none');
            $('#Rota-campos').addClass('d-none');
        }
    });
});

function addList() {
    let nome = document.getElementById("nick").value;
    let classificaPor = document.getElementById("opcaoClassificacao").value;

    if (nome != "") {
        if (classificaPor == "Rank") {
            classRank(nome, classificaPor);
        }
        else if (classificaPor == "Rota") {
            classRota(nome, classificaPor);
        }
        else {
            alert('O campo Classificar é obrigatório!');
        }
    }
}

function classRota(nome, classPor) {
    var obj = {};
    let rota = document.getElementById("opcaoRota").value;
    let classRota = document.getElementById("classificacaoRota").value;

    if (rota != "Selecione uma opção") {
        if (classRota != "") {

            obj = {
                Nome: nome,
                Por: classPor,
                Geral: rota,
                Classificacao: classRota
            }

            listPlayersRota.push(obj);

            if (listPlayersRota.length > 0) {
                preencheTable();
                $('#tablePlayers').removeClass('d-none');
                resetaCampos(Action.Rota);
            }
        }
        else {
            alert('O campo Classificação por Rota é obrigatório!');
        }
    }
    else {
        alert('O campo Rota é obrigatório!');
    }
}

function classRank(nome, classificaPor) {

}

function preencheTable() {
    var tabela = document.getElementById("tablePlayers");
    var tbody = tabela.getElementsByTagName("tbody")[0];

    tbody.innerHTML = "";

    for (var i = 0; i < listPlayersRota.length; i++) {
        var player = i + 1;
        var linha = "<tr>";
        linha += "<td>" + listPlayersRota[i].Nome + "</td>";
        linha += "<td>" + listPlayersRota[i].Por + "</td>";
        linha += "<td>" + listPlayersRota[i].Geral + "</td>";
        linha += "<td>" + listPlayersRota[i].Classificacao + "</td>";
        linha += "<td>" + player + "</td>";
        linha += "</tr>";

        tbody.innerHTML += linha;
    }
}

function resetaCampos(action) {
    let nome = document.getElementById("nick");
    let classificaPor = document.getElementById("opcaoClassificacao");

    nome.value = "";
    classificaPor.value = "Selecione uma opção";

    if (action == Action.Rota) {
        let rota = document.getElementById("opcaoRota");
        let classRota = document.getElementById("classificacaoRota");
        classRota.value = "";
        rota.value = "Selecione uma opção";
        $('#Rota-campos').addClass('d-none');
    }
    else {
        $('#Rank-campos').addClass('d-none');
    }
}

