class Tarefa {
    constructor(titulo, data, concluida) {
      this.titulo = titulo;
      this.data = data;
      this.concluida = concluida;
    }

}

function adicionarTarefa(){

    var tarefa = document.getElementById("input").value;
    
    idx = tarefa.indexOf("em")
    titulo = tarefa.substr(0, idx - 1);
    data = tarefa.substr(idx + 3, );
    
    // dataFormatada = new Date(data);

    taref = new Tarefa(titulo, data, concluida = false );
    localStorage.setItem("taref", JSON.stringify(taref))
    
}

function listaItens() {
  // cria o elemento li dentro da ul com os dados
  var elemento_pai = document.getElementById("myUL");
  var li_element = document.createElement("li");
  // var text = document.createTextNode(`${taref.data} - ${taref.titulo}`);
  var text = document.createTextNode(localStorage.getItem("taref") + " - " + this.localStorage.getItem("taref.titulo"));


  li_element.appendChild(text);
  elemento_pai.appendChild(li_element);
  console.log("teste");
  
}