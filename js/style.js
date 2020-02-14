class Tarefa {
    constructor(titulo, data, concluida) {
      this.titulo = titulo;
      this.data = data;
      this.concluida = Boolean;
    }

}


function adicionarTarefa(){

    var tarefa = document.getElementById("input").value;
    
    idx = tarefa.indexOf('em')
    

    titulo = tarefa.substr(0, idx - 1);
    dia = tarefa.substr(idx + 3, );

    dataFormatada = new Date(data);

    console.log(dataFormatada);
    

    new Tarefa(titulo, dataFormatada, false)

}
