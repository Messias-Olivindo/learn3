import { useState, useEffect } from 'react';
// import { to_do_backend } from 'declarations/to_do_backend';

function tarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    // consultarTarefas();
  }, []);

  async function consultarTarefas() {
    // setTarefas(await to_do_backend.getTarefas());    
  }

  async function handleSubmit(event) {
    // event.preventDefault();

    // const idTarefa = event.target.elements.idTarefa.value;
    // const categoria = event.target.elements.categoria.value;
    // const descricao = event.target.elements.descricao.value;    
    // const urgente = ((event.target.elements.urgente.value === "false") ? false : true);

    // alert(urgente);

    // /* Caso o idTarefa for null siginifica que é um novo cadastro,
    //    desta forma será executada a função addTarefa do Canister de backend,
    //    caso contrário será executada a função de alteração dos dados de uma tarefa */
    // if( idTarefa === null || idTarefa === ""){
    //     await to_do_backend.addTarefa(descricao, categoria, false, false);            
    // } else {
    //     await to_do_backend.alterarTarefa( parseInt(idTarefa), categoria, descricao, urgente, false );    
    // }

    // consultarTarefas();    

    // event.target.elements.idTarefa.value = "";
    // event.target.elements.categoria.value = "";
    // event.target.elements.descricao.value = "";    
    // event.target.elements.urgente.value = "";
  }

  async function excluir(id) {
    // await to_do_backend.excluirTarefa(parseInt(id));
    // consultarTarefas();
  }

  async function alterar(id, categoria, descricao, urgente, concluida) {
    // await to_do_backend.alterarTarefa(parseInt(id), categoria, descricao, urgente, concluida);
    // consultarTarefas();
  }

  async function editar(id, categoria, descricao, urgente) {
    // document.getElementById('formTarefas').elements['idTarefa'].value = id;
    // document.getElementById('formTarefas').elements['categoria'].value = categoria;
    // document.getElementById('formTarefas').elements['descricao'].value = descricao;
    // document.getElementById('formTarefas').elements['urgente'].value = urgente;
    // alert(document.getElementById('formTarefas').elements['urgente'].value);
  }

  return (
    <main>
      <h1>Tarefas</h1>
    </main>
  );
}

export default tarefas;