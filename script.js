const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');
let valueDefault;

//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example


function verificarUrlValida(urlStr){
    if (!urlStr || urlStr == valueDefault)
    {
        return false;
    }
    try {
        new URL(urlStr);
        return true;
    } catch (e) {
        return false;
    }
}

btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();
    let urlValida = verificarUrlValida(qrcodeValue);

    if (!urlValida) {
        alert('Falha: insira uma URL valida')
        return;
    }

    valueDefault = qrcodeValue;
    btnValue.innerText = 'Gerando QR code...'
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x140&data=${valueDefault}`;
    imgQrCode.addEventListener('load', () => {
        wrapper.classList.add('active');
        btnValue.innerText = 'Gerar QRCode'
    })
});

