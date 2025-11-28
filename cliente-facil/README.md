# 📋 Cadastro de Clientes (Angular)

Aplicação simples em **Angular** para cadastro e consulta de clientes, utilizando **Angular Material** para a interface e **LocalStorage** para persistência dos dados no navegador.

Os dados de **Estados** e **Municípios** são carregados dinamicamente a partir da **[BrasilAPI](https://brasilapi.com.br/docs)**.

---

## ✨ Funcionalidades

- ✅ Cadastro de clientes (nome, e-mail, CPF, data de nascimento, UF e município)
- ✅ Edição de clientes já cadastrados
- ✅ Exclusão de clientes
- ✅ Consulta de clientes por nome
- ✅ Lista de clientes em tabela com ações (editar / deletar)
- ✅ Carregamento de **Estados** e **Municípios** via **BrasilAPI**
- ✅ Layout responsivo utilizando **Angular Material** e containers centralizados

---

## 🧱 Tecnologias utilizadas

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [Angular Flex Layout] (em algumas versões do layout)
- TypeScript
- HTML / CSS
- LocalStorage (para armazenamento dos clientes)
- [BrasilAPI](https://brasilapi.com.br/docs) (Estados e Municípios)

---

## 🌐 Integração com BrasilAPI

Os campos de **UF** e **Município** do formulário de cadastro são populados a partir da  
[BrasilAPI](https://brasilapi.com.br/docs).

- Lista de Estados (UF)
- Lista de Municípios de acordo com a UF selecionada

Isso permite que os dados de localização estejam sempre atualizados, sem necessidade de manter tabelas fixas no código.

---

## 🗂️ Estrutura geral da aplicação

A aplicação é organizada em componentes simples, por exemplo:

- `app.component`

  - Toolbar com navegação:
    - **Cadastrar** → rota `/cadastro`
    - **Consulta** → rota `/consulta`
  - `<router-outlet>` para renderização dos componentes de página

- `cadastro`

  - Formulário de **Dados Pessoais** do cliente
  - Campos obrigatórios: Nome, E-mail, CPF, Data de Nascimento, UF, Município
  - Integração com BrasilAPI para carregar **Estados** e **Municípios**

- `consulta`
  - Filtro por nome
  - Tabela (`mat-table`) listando clientes cadastrados
  - Ações: **Editar**, **Deletar** (com confirmação)

---

## 💾 Persistência de dados

Os clientes cadastrados são armazenados no **LocalStorage** do navegador, por meio de um service (`ClienteService`), utilizando uma chave fixa (ex.: `_CLIENTES`).

Isso facilita o uso em ambiente local e para fins de estudo, sem necessidade de backend.

---

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js instalado
- Angular CLI instalado globalmente:

```bash
npm install -g @angular/cli
```
# Clonar o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Entrar na pasta do projeto
cd seu-repositorio

# Instalar as dependências
npm install

# Subir a aplicação em ambiente de desenvolvimento
ng serve

# Depois, acesse no navegador:
http://localhost:4200


