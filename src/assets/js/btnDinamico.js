var url = window.location.pathname;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
})

document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button');

    //Armazena o token gerado na constante
    const storageToken = localStorage.getItem("token");

    //Caso o contador seja diferente de um define como zero
    if (localStorage.getItem("contSessaoExpirada") != 1) {

        //Salvando contador no localstorage
        localStorage.setItem("contSessaoExpirada", 0);
    }

    //Configuração da rota
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'referrerPolicy': 'strict-origin-when-cross-origin',
            Authorization: "Bearer " + storageToken
        }
    };
;
}, false);

//Sessão expirada
document.addEventListener('click', function () {

    const storageToken = localStorage.getItem("token");

    //Configuração da rota
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + storageToken
        }
    };

    fetch('https://reciclense.netlify.app/btn-dinamico', options)
        .then(response => response.json())
        .then(async response => {

            if (!response.success && storageToken != null) {

                //Mostra mensagem de sessão expirada caso contador esteja igual a 1
                if (localStorage.getItem("contSessaoExpirada") == 1) {

                    localStorage.clear();

                    await Toast.fire({
                        icon: 'error',
                        title: 'Sessão expirada!',
                        text: 'Favor realize o login novamente.'
                    })

                    //Seta contador como 2 para que seja reiniciado quando a pagina for recarregada
                    localStorage.setItem("contSessaoExpirada", 2);

                    //Redireciona para pagina de inicio caso não esteja nela
                    if (url != "/index.html" && url != "/") {

                        window.location.href = "/index.html";

                    }

                }
            }
        });
});