function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    //hora = data.getHours();
    var hora = 10;
    minuto = data.getMinutes();
    if (hora >= 0 && hora < 13) {
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Agora são ${hora}:${minuto} manhã`;
    } else if (hora >= 13 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Agora são ${hora}:${minuto} tarde`;
    } else if (hora >= 18) {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        msg.innerHTML = `Agora são ${hora}:${minuto} noite`;

    }
}
