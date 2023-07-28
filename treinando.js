//Adicionando Jogador
function addPlayer() {
  let position = document.getElementById("position").value;
  let name = document.getElementById("name").value;
  let camisa = document.getElementById("camisa").value;

  // Verifica se os campos estão preenchidos
  if (name === "" || position === "" || camisa === "") {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  //Usuário verifica se as informações estão corratas para escalar novo jogador
  const confirmation = confirm(
    "Escalar jogador(a) " +
      name +
      ", " +
      position +
      "," +
      " Camisa " +
      camisa +
      "?"
  );

  //Cria uma li com as informações do novo jogador
  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const playerItem = document.createElement("li");
    playerItem.id = "camisa-" + camisa;
    playerItem.innerText = position + ": " + name + "," + " Camisa " + camisa;
    teamList.appendChild(playerItem);

    //Limpando os inputs
    position = document.getElementById("position").value = "";
    name = document.getElementById("name").value = "";
    camisa = document.getElementById("camisa").value = "";
  }
}

//Removendo Jogadores
function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const player = document.getElementById("camisa-" + number);

  // Verifica se o número foi informado
  if (number === "") {
    alert("Informe o número do jogador a ser removido.");
    return;
  }

  // Verifica se o jogador foi encontrado na lista
  if (!player) {
    alert("Jogador não encontrado na lista.");
    return;
  }

  //Usuário confirma informações antes de remover o jogador
  const confirmation = confirm("Remover jogador(a) camisa " + number + "?");
  if (confirmation) {
    player.remove();
    //Limpando o input:
    document.getElementById("numberToRemove").value = "";
  }
}
