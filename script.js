function buscar() {
  // Obtém o valor digitado no campo de pesquisa
  const termoDePesquisa = document.getElementById("searchInput").value;

  // Exibe o resultado na div de resultados
  const resultados = document.getElementById("resultados");
  if (termoDePesquisa) {
      resultados.innerHTML = `Você pesquisou por: <strong>${termoDePesquisa}</strong>`;
      window.location.href = ''${encodeURIComponent(termoDePesquisa)}`;

  } else {
      resultados.innerHTML = "pesquise";
  }
}
