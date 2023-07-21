/* Listagem de todos os atributos de todos usuários */
SELECT
	* 
FROM 
	usuario;
    
    
/* Listagem retornando atributos nome, tipo, titulo e paragrafo de usuários que criaram um destino */    
SELECT
	usuario.nome, 
    usuario.tipo,
    destino.titulo,
    destino.paragrafo
FROM
 	usuario
INNER JOIN
 	destino
ON 
	usuario.id_usuario = destino.fk_id_usuario;


/* Listagem retornando o atributo nome de pessoas que aceitam receber atualizações. */
SELECT
	usuario.nome
FROM
	usuario
INNER JOIN
	contato
ON
	usuario.id_usuario = contato.fk_id_usuario
WHERE
	contato.aceita_atualizacao = 't';
	