# 🎵 Maker Music School

Aplicativo mobile desenvolvido para o Projeto de Extensão - App Developer.

O Maker Music School tem como objetivo centralizar informações acadêmicas, financeiras e administrativas de uma escola de música, proporcionando uma experiência moderna e intuitiva para alunos, professores e administradores.

---

## 📱 Telas Desenvolvidas

### 🔐 Login

* Autenticação visual para usuários
* Seleção de perfil:

  * Aluno
  * Professor
  * Administrador
* Navegação para cadastro

### 📝 Cadastro

* Registro de novos alunos
* Campos para:

  * Nome
  * E-mail
  * Curso
  * Senha

### 🏠 Dashboard

* Pesquisa de disciplinas
* Progresso do aluno
* Favoritos
* Atalhos rápidos
* Navegação central do sistema

### 📅 Agenda

* Agendamento semanal
* Horários das aulas
* Eventos mensais
* Informações de professores

### 💳 Financeiro

* Controle de mensalidades
* Status de pagamento:

  * Pago
  * Pendente
  * Atrasado
* Histórico financeiro

### 📊 Frequência

* Controle de presença
* Controle de faltas
* Indicadores de desempenho
* Situação do aluno

---

## 🛠 Tecnologias Utilizadas

### Frontend

* React Native
* Expo
* React Navigation
* Expo Vector Icons

### Backend

* Java
* Spring Boot (estrutura inicial)

### Banco de Dados

* MySQL

### Controle de Versão

* Git
* GitHub

---

## 🎨 Identidade Visual

Paleta utilizada no projeto:

| Cor              | Hexadecimal |
| ---------------- | ----------- |
| Preto Principal  | #121212     |
| Cinza Escuro     | #1E1E1E     |
| Amarelo Destaque | #F5B700     |
| Branco           | #FFFFFF     |

---

## 🗂 Estrutura do Projeto

```text
maker-music-school
│
├── src
│   └── screens
│       ├── Login
│       ├── Register
│       ├── Dashboard
│       ├── Agenda
│       ├── Financeiro
│       └── Frequencia
│
├── backend
│   └── src/main/java/com/makermusic
│       ├── controller
│       ├── service
│       ├── repository
│       └── model
│
├── database
│   └── schema.sql
│
├── assets
│
└── README.md
```

---

## 🗄 Estrutura do Banco de Dados

O banco foi modelado para suportar:

* Usuários
* Alunos
* Professores
* Disciplinas
* Agendamentos
* Pagamentos
* Frequências

Relacionamentos implementados utilizando chaves primárias e estrangeiras.

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entrar na pasta

```bash
cd maker-music-school
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Iniciar aplicação

```bash
npx expo start
```

### 5. Executar no celular

* Instale o aplicativo Expo Go
* Escaneie o QR Code gerado no terminal

---

## 👥 Integrantes

* Adrian Patrício da Silva — RA 223082025
* Christian Silva — RA 223162025
* Rafael Alves Nogueira — RA 227082025

---

## 📌 Status do Projeto

✅ Sprint 1 concluída

✅ Sprint 2 concluída

🚧 Em desenvolvimento para próximas entregas

---

Projeto acadêmico desenvolvido para fins educacionais.
