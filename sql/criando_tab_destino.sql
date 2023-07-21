CREATE TABLE destino (
	id_destino SERIAL PRIMARY key,
  	titulo VARCHAR(300) NOT NULL,
  	imagem BYTEA,
  	paragrafo TEXT NOT NULL,
  	fk_id_usuario INT NOT NULL,
  	CONSTRAINT fk_usuario_destino FOREIGN key (fk_id_usuario) REFERENCES usuario (id_usuario)
);