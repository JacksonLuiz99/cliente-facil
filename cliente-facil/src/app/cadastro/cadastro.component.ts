import { Component, OnInit, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Cliente } from './cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { ClienteService } from '../cliente.service';
import { BrasilapiService } from '../brasilapi.service';
import { Estado, Municipio } from '../models/brasilapi.models';

@Component({
  selector: 'app-cadastro',
  imports: [
    MatCardModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskDirective,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [provideNgxMask()],

  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent implements OnInit {
  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;
  estados: Estado[] = [];
  municipios: Municipio[] = [];
  _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private service: ClienteService,
    private brasilapiService: BrasilapiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query: any) => {
      const params = query['params'];
      const id = params['id'];
      if (id) {
        let clienteEncontrado = this.service.buscarClientePorId(id);
        if (clienteEncontrado) {
          this.atualizando = true;
          this.cliente = clienteEncontrado;
        }
      }
    });

    this.carregarUFs();
  }

  carregarUFs() {
    //observable => subiscriber
    this.brasilapiService.listarUFs().subscribe({
      next: (listaEstadors) => this.estados = listaEstadors,
      error: (error) => console.log(error),
    });
  }

  salvar() {
    if (!this.atualizando) {
      this.service.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
      this.mostrarMensagem('Cliente cadastrado com sucesso!');
    } else {
      this.service.atualizar(this.cliente);
      this.router.navigate(['/consulta']);
      this.mostrarMensagem('Cliente atualizado com sucesso!');
    }
  }

  mostrarMensagem(mensagem: string) {
    this._snackBar.open(mensagem, 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
