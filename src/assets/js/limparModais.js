function limparModais() {

  let urlAtual = window.location.pathname;

  if (urlAtual == "/index.html" || urlAtual == "/") {

    // Modal Login
    document.getElementById('exampleInputEmail1').value = '';
    document.getElementById('exampleInputPassword1').value = '';

    //  Modal Cadastro
    document.getElementById('cadEmail').value = '';
    document.getElementById('cadSenha').value = '';
    document.getElementById('cadSenhaConfirmacao').value = '';

    //  Modal Recuperar Senha
    document.getElementById('recuperarSenhaEmail').value = '';


  } else if (urlAtual == '/src/pages/pessoaFisicaPrincipal.html') {

    //  Modal Solicitar Coleta
    document.getElementById('data-coleta').value = '';
    document.getElementById('horario-coleta').value = '';
    document.getElementById('obs-coleta').value = '';

  } else {

    //  Modal Cadastrar Coletor
     document.getElementById('nome-coletor').value = '';
     document.getElementById('sobrenome-coletor').value = '';
     document.getElementById('nascimento').value = '';
     document.getElementById('documento_principal').value = '';

    //  Modal Gerar Relatorio
     document.getElementById('dataInicioRelatorio').value = '';
     document.getElementById('dataFimRelatorio').value = '';
    //  document.getElementById('nm_estado').value = '';
    //  document.getElementById('nm_cidade').value = '';
    //  document.getElementById('selectBairroRelatorio').value = '';
    //  document.getElementById('selectMaterialRelatorio').value = '';

  }

}