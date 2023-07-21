CREATE TABLE sugestao (
	id_sugestao SERIAL PRIMARY key,
  	titulo VARCHAR(300) NOT NULL,
  	local_sug VARCHAR (50) NOT NULL,
  	texto VARCHAR(600) NOT NULL,
  	fk_id_usuario INT NOT NULL,
  	CONSTRAINT fk_usuario_sugestao FOREIGN key (fk_id_usuario) REFERENCES usuario (id_usuario)
);