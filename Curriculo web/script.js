// Seleção dos campos
const campoNome = document.getElementById("nome");
const campoCargo = document.getElementById("cargo");
const campoResumo = document.getElementById("resumo");
const botaoSalvar = document.getElementById("salvar");

// Função para salvar perfil
function salvarPerfil() {
  // Atualiza a visualização
  document.getElementById("nomePerfil").innerText = campoNome.value;
  document.getElementById("cargoPerfil").innerText = campoCargo.value;
  document.getElementById("resumoPerfil").innerText = campoResumo.value;

  // Cria objeto perfil
  const perfil = {
    nome: campoNome.value,
    cargo: campoCargo.value,
    resumo: campoResumo.value
  };

  // Salva no localStorage
  localStorage.setItem("perfil", JSON.stringify(perfil));
}

// Evento do botão
botaoSalvar.addEventListener("click", salvarPerfil);

// Recupera perfil salvo ao carregar a página
const perfilSalvo = JSON.parse(localStorage.getItem("perfil"));
if (perfilSalvo) {
  document.getElementById("nomePerfil").innerText = perfilSalvo.nome;
  document.getElementById("cargoPerfil").innerText = perfilSalvo.cargo;
  document.getElementById("resumoPerfil").innerText = perfilSalvo.resumo;
}

// Botão de tema escuro
document.getElementById("tema").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  sessionStorage.setItem("tema", "dark");
});

// Registrar última visita com cookie
const hoje = new Date();
document.cookie = "ultimaVisita=" + hoje.toLocaleDateString();

// Mostrar última visita
document.getElementById("visita").innerText = "Última visita registrada.";

