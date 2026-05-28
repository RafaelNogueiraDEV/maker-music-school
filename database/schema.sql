CREATE DATABASE maker_music_school;

USE maker_music_school;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    tipo_usuario ENUM('ALUNO', 'PROFESSOR', 'ADMIN') NOT NULL
);

CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    curso VARCHAR(100),
    telefone VARCHAR(20),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE professores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    especialidade VARCHAR(100),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE disciplinas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    professor_id INT,
    progresso INT DEFAULT 0,
    FOREIGN KEY (professor_id) REFERENCES professores(id)
);

CREATE TABLE agendamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    aluno_id INT,
    professor_id INT,
    disciplina_id INT,
    data_aula DATE,
    horario TIME,
    descricao TEXT,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (professor_id) REFERENCES professores(id),
    FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id)
);

CREATE TABLE pagamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    aluno_id INT,
    mes_referencia VARCHAR(20),
    valor DECIMAL(10,2),
    data_vencimento DATE,
    status_pagamento ENUM('PAGO', 'ATRASADO', 'PENDENTE'),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

CREATE TABLE frequencias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    aluno_id INT,
    disciplina_id INT,
    data_aula DATE,
    presente BOOLEAN,
    justificativa TEXT,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id)
);