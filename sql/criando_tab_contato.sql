CREATE TABLE contato (
	id_contato SERIAL PRIMARY key,
  	menssagem TEXT NOT NULL,
  	data_contato DATE NOT NULL,
  	aceita_atualizacao BOOLEAN NOT NULL,
  	fk_id_usuario INT NOT NULL,
  	CONSTRAINT fk_usuario_contato FOREIGN key (fk_id_usuario) REFERENCES usuario (id_usuario)
);