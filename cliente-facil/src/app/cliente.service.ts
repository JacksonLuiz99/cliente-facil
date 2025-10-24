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

  pesquisarClientes(nomeBusca: string): Cliente[] {
    const clientes = this.obterStorage();
    if (!nomeBusca) {
      return clientes;
    }

    /*return clientes.filter(
      (cliente) => cliente.nome?.indexOf(nomeBusca) !== -1,
    );*/

    return clientes.filter(
      (c) => c.nome?.toLowerCase().includes(nomeBusca.toLowerCase()),
    );
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
