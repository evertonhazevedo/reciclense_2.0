function excluirColeta(cd_coleta) {

    //Recuperando valores id_usuario, baseUrl e perfil do localStorage
    const storageIdUsuario = localStorage.getItem('id_usuario');
    var baseUrl = localStorage.getItem("baseUrl");

    //Mensagem para confirmar se o usuario quer realmente salvar os dados
    Swal.fire({
        title: 'Deseja realmente excluir a coleta?',
        text: 'Após a confirmação não será mais possível recuperar seus dados.',
        showDenyButton: true,
        confirmButtonText: 'Excluir',
        denyButtonText: 'Cancelar',
    }).then(async (result) => {


        //Caso o usuario clice em salvar chama a rota para atualizar o perfil
        if (result.isConfirmed) {

            const options = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cd_coleta: cd_coleta,
                    cd_usuario: storageIdUsuario
                })
            };

            fetch(baseUrl + '/excluir-coleta', options)
                .then(response => response.json())
                .then(async response => {

                    //Caso retorne true os dados foram salvos com sucesso
                    if (response.success == true) {

                        await Swal.fire('Coleta excluída com sucesso!', '', 'success');
                        location.reload();

                        //Caso retorne false os dados nao foram salvos   
                    } else {
                        await Swal.fire('Não foi possível excluir a coleta!', '', 'error');
                        location.reload();
                    }

                })
                .catch(err => console.error(err));
        } else {
            Swal.fire('Coleta não excluída!', '', 'info');
        }

    });

}