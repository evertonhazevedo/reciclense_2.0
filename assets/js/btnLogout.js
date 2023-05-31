//Deslogar usuario
document.getElementById('btnLogout')
    .addEventListener('click', async function () {

        localStorage.clear();

        await Toast.fire({
            icon: 'warning',
            title: 'Encerrando sessão...'
        })

        window.location.href = "/index.html";
    });
