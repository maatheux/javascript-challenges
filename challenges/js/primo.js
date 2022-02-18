function acharPrimo(numero) {
    if (numero === 1) {
        return numero;
    } else if (numero === 2) {
        return numero;
    } else {
        let aux = numero - 1;
        let aux2 = 0;
        while (numero < 30) {
            while (aux2 === 0 && aux > 2) {
                if (numero % aux !== 0) {
                    aux -= 1;
                    aux2 = 0;
                } else {
                    aux2 = 1;
                }
            }
            if (aux === 2) {
                return numero;
            } else {
                numero += 1;
                aux2 = 0;
            }
        }
    }
}
