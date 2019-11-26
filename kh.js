function fatorial(n) {
    if (n == 0) {
        return 1;
    }
    var resposta = n;
    while (n > 2) {
        resposta *= --n;
    }
    return resposta;
}