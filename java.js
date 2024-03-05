// calculo idade

// Entrada de ano, mês e dia de nascimento
var anoNascimento = prompt("Digite o ano de nascimento:");
var mesNascimento = prompt("Digite o mês de nascimento:");
var diaNascimento = prompt("Digite o dia de nascimento:");

// Cálculo da idade
if (!isNaN(anoNascimento) && !isNaN(mesNascimento) && !isNaN(diaNascimento)) {
    var dataNascimento = new Date(anoNascimento, mesNascimento - 1, diaNascimento);
    var hoje = new Date();

    var idadeCalculada = hoje.getFullYear() - dataNascimento.getFullYear();

    // Ajuste caso o aniversário ainda não tenha ocorrido neste ano
    if (hoje.getMonth() < dataNascimento.getMonth() || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())) {
        idadeCalculada--;
    }

    alert("Você tem " + idadeCalculada + " anos.");
} else {
    alert("Por favor, digite uma data de nascimento válida.");
}
