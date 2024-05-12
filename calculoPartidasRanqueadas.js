// Função para calcular o nível do jogador com base na quantidade de vitórias
function calcularNivel(vitorias, derrotas) {
    // Calcular o saldo de partidas ranqueadas
    const saldoVitorias = vitorias - derrotas;

    // Verificar o nível do jogador com base no saldo de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornar o resultado formatado
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função
const vitorias = 85;
const derrotas = 20;
const resultado = calcularNivel(vitorias, derrotas);
console.log(resultado); // Exibir o resultado no console
