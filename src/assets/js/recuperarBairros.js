document.addEventListener('DOMContentLoaded', function () {

    let selectBairros = document.getElementById('selectBairroRelatorio');
    selectBairros.length = 0;

    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    fetch('https://reciclense.netlify.app/recuperar-bairros', options)
        .then(response => response.json())
        .then(response => {

            if (response.success) {

                selectBairros.length = 0;

                let optionPadrao = document.createElement('option');
                optionPadrao.innerHTML = 'Todos os bairros';
                selectBairros.appendChild(optionPadrao);

                response.bairros.forEach(element => {

                    let optionBairros = document.createElement('option');
                    optionBairros.innerHTML = element.nm_bairro;
                    selectBairros.appendChild(optionBairros);
                });
            }
        })
        .catch(err => console.error(err));
});