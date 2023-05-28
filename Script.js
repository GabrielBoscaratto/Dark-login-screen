<script>
  // Selecionar o botão de login
  var btnLogin = document.querySelector('.btn-login');

  // Adicionar um ouvinte de evento para o clique no botão
  btnLogin.addEventListener('click', function() {
    // Adicionar uma classe CSS ao botão para ativar a animação
    btnLogin.classList.add('animar-login');

    // Remover a classe após um período de tempo para permitir que a animação seja repetida
    setTimeout(function() {
      btnLogin.classList.remove('animar-login');
    }, 1000); // Tempo em milissegundos (1 segundo neste exemplo)
  });
</script>
