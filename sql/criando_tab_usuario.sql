CREATE TABLE usuario (
	id_usuario SERIAL PRIMARY key,
  	nome VARCHAR(35) NOT NULL,
  	tipo VARCHAR(35) NOT NULL,
  	email VARCHAR(80) NOT NULL,
  	senha VARCHAR(18) NOT NULL,
  	imagem BYTEA
);