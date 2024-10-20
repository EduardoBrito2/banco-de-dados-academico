create database bd_aula06;
-- \c bd_aula06
create domain chk_categoria text check (value='DRAMA' or value='COMEDIA');
create domain chk_status text check (value='DISPONIVEL' or value='ALUGADO');
create table tbl_cliente(codigo_cliente integer PRIMARY KEY,
							nome text not null, 
							cidade text, 
							endereco text);
create table tbl_titulo(codigo_titulo integer primary key, 
						titulo text not null, 
						descricao text, 
						categoria chk_categoria);
create table tbl_livros(cod_livro integer PRIMARY KEY, 
						codigo_titulo integer REFERENCES tbl_titulo(codigo_titulo), 
						status chk_status DEFAULT 'DISPONIVEL');
create table tbl_emprestimo(numero_emprestimo integer PRIMARY KEY, 
							codigo_cliente integer REFERENCES tbl_cliente(codigo_cliente), 
							codigo_livro integer REFERENCES tbl_livros(cod_livro));
-- Inserir dados na tabela tbl_cliente
INSERT INTO tbl_cliente (codigo_cliente, nome, cidade, endereco)
VALUES
    (1, 'Joao Silva', 'Sao Paulo', 'Rua A, 123'),
    (2, 'Maria Santos', 'Rio de Janeiro', 'Av. B, 456'),
    (3, 'Pedro Almeida', 'Belo Horizonte', 'Rua C, 789'),
    (4, 'Ana Oliveira', 'Salvador', 'Av. D, 1011'),
    (5, 'Carlos Lima', 'Brasília', 'Rua E, 1213');
-- Inserir dados na tabela tbl_titulo
INSERT INTO tbl_titulo (codigo_titulo, titulo, descricao, categoria)
VALUES
    (1, 'Aventuras Urbanas', 'Uma história emocionante', 'DRAMA'),
    (2, 'Mistérios Antigos', 'Enigmas por resolver', 'COMEDIA'),
    (3, 'Amor nas Estrelas', 'Um romance intergaláctico', 'DRAMA'),
    (4, 'Código Enigmatico', 'Segredos ocultos', 'COMEDIA'),
    (5, 'Histórias Perdidas', 'Contos esquecidos', 'DRAMA');
-- Inserir dados na tabela tbl_livros
INSERT INTO tbl_livros (cod_livro, codigo_titulo, status)
VALUES
    (1, 1, 'ALUGADO'),
    (2, 1, 'ALUGADO'),
    (3, 2, 'DISPONIVEL'),
    (4, 3, 'ALUGADO'),
    (5, 4, 'ALUGADO');
-- Inserir dados na tabela tbl_emprestimo
INSERT INTO tbl_emprestimo (numero_emprestimo, codigo_cliente, codigo_livro)
VALUES
    (1, 1, 2),
    (2, 2, 4),
    (3, 3, 1),
    (4, 4, 5);

select titulo , status from tbl_titulo as titulo left join tbl_livros as livros
on titulo.codigo_titulo = livros.codigo_titulo;

select titulo,descricao from tbl_titulo as titulo inner join tbl_livros as livros
on titulo.codigo_titulo = livros.codigo_titulo
where status like 'ALUGADO';

select nome from tbl_cliente as cliente left join tbl_emprestimo as emprestimo
on cliente.codigo_cliente = emprestimo.codigo_cliente
where emprestimo.codigo_cliente is null;

select titulo, categoria from tbl_titulo as titulo inner join tbl_livros as livros
on titulo.codigo_titulo = livros.codigo_titulo
where status not like 'ALUGADO';

select nome, titulo
from tbl_cliente as cliente
left JOIN tbl_emprestimo as emprestimo ON cliente.codigo_cliente = emprestimo.codigo_cliente
left JOIN tbl_livros as livro ON emprestimo.codigo_livro = livro.cod_livro
left JOIN tbl_titulo as titulo ON livro.codigo_titulo = titulo.codigo_titulo;

select nome, titulo, status
from tbl_cliente as cliente
left JOIN tbl_emprestimo as emprestimo ON cliente.codigo_cliente = emprestimo.codigo_cliente
left JOIN tbl_livros as livro ON emprestimo.codigo_livro = livro.cod_livro
left JOIN tbl_titulo as titulo ON livro.codigo_titulo = titulo.codigo_titulo
where nome like 'Ana%';