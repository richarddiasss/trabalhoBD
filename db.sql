/* LOGICOFINAL */

-- Drop database if exists to start fresh
DROP DATABASE IF EXISTS dbtrab;
CREATE DATABASE dbtrab CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE dbtrab;

-- Create tables in order of dependencies
CREATE TABLE Torneio (
    Nome VARCHAR(255) PRIMARY KEY,
    Ano DATE
);

CREATE TABLE Selecao (
    Nome VARCHAR(255) PRIMARY KEY,
    Continente VARCHAR(255)
);

CREATE TABLE JogadorMarcador (
    Nome VARCHAR(255) PRIMARY KEY,
    Nacionalidade VARCHAR(255)
);

CREATE TABLE Partida (
    Cidade VARCHAR(255),
    Pais VARCHAR(255),
    AwayScore INTEGER,
    HomeScore INTEGER,
    Data DATE,
    Campo_neutro BOOLEAN,
    fk_Torneio_Nome VARCHAR(255),
    fk_Selecao_Nome1 VARCHAR(255),
    fk_Selecao_Nome2 VARCHAR(255),
    PRIMARY KEY (Data, fk_Selecao_Nome1, fk_Selecao_Nome2),
    FOREIGN KEY (fk_Torneio_Nome) REFERENCES Torneio(Nome) ON DELETE RESTRICT,
    FOREIGN KEY (fk_Selecao_Nome1) REFERENCES Selecao(Nome) ON DELETE CASCADE,
    FOREIGN KEY (fk_Selecao_Nome2) REFERENCES Selecao(Nome) ON DELETE CASCADE
);

CREATE TABLE SelecaoJogador (
    fk_Selecao_Nome VARCHAR(255),
    fk_JogadorMarcador_Nome VARCHAR(255),
    PRIMARY KEY (fk_Selecao_Nome, fk_JogadorMarcador_Nome),
    FOREIGN KEY (fk_Selecao_Nome) REFERENCES Selecao(Nome) ON DELETE RESTRICT,
    FOREIGN KEY (fk_JogadorMarcador_Nome) REFERENCES JogadorMarcador(Nome) ON DELETE CASCADE
);

CREATE TABLE TemGolMarcadoPor (
    fk_JogadorMarcador_Nome VARCHAR(255),
    fk_Partida_Data DATE,
    Penalti BOOLEAN,
    GolContra BOOLEAN,
    MinutoDoGol INTEGER,
    PRIMARY KEY (MinutoDoGol, fk_JogadorMarcador_Nome, fk_Partida_Data),
    FOREIGN KEY (fk_JogadorMarcador_Nome) REFERENCES JogadorMarcador(Nome) ON DELETE RESTRICT,
    FOREIGN KEY (fk_Partida_Data) REFERENCES Partida(Data) ON DELETE CASCADE
);
