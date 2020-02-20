class Tarefa {
    constructor(titulo, data, concluida) {
      this.titulo = titulo;
      this.data = data;
      this.concluida = Boolean;
    }

}

function adicionarTarefa(){

    var tarefa = document.getElementById("input").value;
    
    idx = tarefa.indexOf("em")
    titulo = tarefa.substr(0, idx - 1);
    data = tarefa.substr(idx + 3, );
    
    // dataFormatada = new Date(data);

    taref = new Tarefa(titulo, data, false);

    // localStorage.setItem()
    
    // cria o elemento li dentro da ul com os dados
    var elemento_pai = document.getElementById("myUL");
    var li_element = document.createElement("li");
    var text = document.createTextNode(`${taref.data} - ${taref.titulo}`);

    li_element.appendChild(text);
    elemento_pai.appendChild(li_element);
    
}
