create database bd_aula07;
\c bd_aula07
create table tbl_fornecedor (cod_fornecedor serial primary key, nome text not null, status integer, cidade text);
create table tbl_peca (cod_peca serial primary key, nome text not null, cor text, preco numeric, cidade text);
create table tbl_estoque (cod_compra serial primary key, 
						 cod_fornecedor integer references tbl_fornecedor(cod_fornecedor),
						cod_peca integer references tbl_peca(cod_peca),
						quantidade integer);
						
insert into tbl_fornecedor(nome,status,cidade) 
values ('A',30,'LONDRES'),('B',20,'PARIS'),('C',10,'PARIS'),('D',10,'LONDRES');

INSERT INTO tbl_peca(nome, cor, preco, cidade) values
('PLACA','AZUL',5,'LONDRES'),('MESA','VERMELHA',10,'PARIS'),('CADERNO','PRETA',14,'ROMA'),
('TESOURA','VERMELHA',12,'LONDRES');

INSERT INTO tbl_estoque(cod_fornecedor, cod_peca, quantidade) values
(1,1,30),(2,1,30),(3,2,10),(3,3,50);

--1 Listar o nome dos fornecedores(maiusculo) e das peças(minusculo) que se situam na mesma cidade, ordenado pelo nome
select upper (nome(tbl_fornecedor)), lower(nome(tbl_peca)) from tbl_fornecedor, tbl_peca
where cidade(tbl_fornecedor) = cidade(tbl_peca)
order by nome(tbl_fornecedor) asc
--2 listar as cidades onde existem fornecedores (sem valores duplicados)
select distinct(cidade(tbl_fornecedor)) from tbl_fornecedor, tbl_peca

--3 Listar o nome e a cor das peças do fornecedor com código 3, ordenado pelo nome da peça
SELECT nome(tbl_peca),cor FROM tbl_peca , tbl_estoque  
WHERE cod_peca(tbl_peca) = cod_peca(tbl_estoque)
AND cod_fornecedor(tbl_estoque) = 3
ORDER BY nome;

--4 Listar o nome e a cidade dos fornecedores com mais de 10 peças.Contar só as peças de código 1. 
select distinct(nome(tbl_fornecedor)),cidade(tbl_fornecedor) from tbl_fornecedor, tbl_estoque, tbl_peca
where cod_peca(tbl_peca) = cod_peca(tbl_estoque)
and cod_peca(tbl_estoque) = 1
and status > 10


--5 Listar a quantidade total de peças com código 1, fornecidas pelos fornecedores.
SELECT SUM(quantidade) FROM tbl_estoque 
WHERE cod_peca = 1;

--6 Listar a média dos preços das peças fornecidas pelo fornecedor com código 3.
select avg(preco) from tbl_peca,tbl_estoque
where cod_peca(tbl_peca) = cod_peca(tbl_estoque)
and cod_fornecedor(tbl_estoque) = 3

--7 lista o valor da pecas mais cara e a mais barata.
select max(preco), min(preco) from tbl_peca

--8 listar a quantidade de peças cadastradas
select count(nome) from tbl_peca

--9 listar a quantidade de cidades diferentes onde existem peças cadastradas
select count(distinct(cidade)) from tbl_peca

--10 listar a media dos precos de todas as peças, com somente 1 digito após a virgula.
select round(avg((preco)),1) from tbl_peca


