function isValidURL(url) {
    const pattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
    return pattern.test(url);
}

function mostrarNotificacao(mensagem, tipo = 'erro') {
    const box = document.getElementById('notificacao');
    box.innerText = mensagem;
    box.className = tipo === 'sucesso' ? 'sucesso' : '';
    box.style.display = 'block';
    box.style.opacity = '1';

    setTimeout(() => {
        box.style.opacity = '0';
        setTimeout(() => {
            box.style.display = 'none';
        }, 400);
    }, 3000);
}

function gerarQR() {
    const qrInput = document.getElementById('qr');
    const qrImage = document.getElementById('qrimg');
    const url = qrInput.value.trim();

    if (!url) {
        mostrarNotificacao("Por favor, digite uma URL.");
        qrImage.style.display = 'none';
        return;
    }

    if (!isValidURL(url)) {
        mostrarNotificacao("URL inválida. A URL deve começar com http:// ou https://");
        qrImage.style.display = 'none';
        return;
    }

    const encodedURL = encodeURIComponent(url);
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedURL}`;
    qrImage.style.display = 'block';
    mostrarNotificacao("QR Code gerado com sucesso!", "sucesso");
}

const fundo = document.getElementById('triangulos-bg');

for (let i = 0; i < 25; i++) {
    const t = document.createElement('div');
    t.classList.add('triangulo');
    t.style.left = Math.random() * 100 + 'vw';
    t.style.animationDuration = (6 + Math.random() * 6) + 's';
    t.style.animationDelay = Math.random() * 5 + 's';
    fundo.appendChild(t);
}