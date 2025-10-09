import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() {
    
   }
   salvar(Cliente: Cliente) {
      console.log("Cliente salvo com sucesso:", Cliente);
    }
}
