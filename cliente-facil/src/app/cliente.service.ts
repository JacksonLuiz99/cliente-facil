import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  static REPO_CLIENTES = '_CLIENTES';

  constructor() {}
  salvar(Cliente: Cliente) {
    const storage = this.obterStorage();
    storage.push(Cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  atualizar(cliente: Cliente) {
    const storage = this.obterStorage();
    storage.forEach((c) => {
      if (c.id === cliente.id) {
        Object.assign(c, cliente);
      }
    });
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarClientes(nomeBusca: string): Cliente[] {
    const clientes = this.obterStorage();
    if (!nomeBusca) {
      return clientes;
    }

    /*return clientes.filter(
      (cliente) => cliente.nome?.indexOf(nomeBusca) !== -1,
    );*/

    return clientes.filter(
      (cliente) =>
        cliente.nome?.toLowerCase().includes(nomeBusca.toLowerCase()),
    );
  }

  buscarClientePorId(id: string): Cliente | undefined {
    const clientes = this.obterStorage();
    return clientes.find((cliente) => cliente.id === id);
  }

  private obterStorage(): Cliente[] {
    const repositorioClientes = localStorage.getItem(
      ClienteService.REPO_CLIENTES,
    );
    //se existir repositório
    if (repositorioClientes) {
      const clientes: Cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }
    //se não existir ele vai criar o repositório
    const clientes: Cliente[] = [];
    localStorage.setItem(
      ClienteService.REPO_CLIENTES,
      JSON.stringify(clientes),
    );
    return clientes;
  }
}
