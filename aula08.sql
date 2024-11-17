\c bd_aula08
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



--1 Listar o nome e a cidade dos fornecedores com mais de 10 peças.Contar só as peças de código 1.
select nome,cidade from tbl_fornecedor
where cod_fornecedor
in(select cod_fornecedor from tbl_estoque
where cod_peca = 1
and quantidade > 10)

--2  Encontre o nome das peças com preço superior a 10 que estão disponíveis em estoque:
select nome from tbl_peca
where preco > 10 
and cod_peca in(select cod_peca from tbl_estoque)

--3 Selecione o nome das peças que não estão em estoque:
select nome from tbl_peca
where cod_peca not in(select cod_peca from tbl_estoque)

--4 Encontre o nome das peças que estão em estoque com uma quantidade maior que 20:
select nome from tbl_peca
where cod_peca in(select cod_peca from tbl_estoque
where quantidade > 20)

--5 Listar todas as pecas exceto a PLACA, ordenado por nome
select * from tbl_peca
where cod_peca in(select cod_peca from tbl_peca
where nome not like '%PLACA'
)
order by nome asc

--6 Listar o nome e a cor das peças do fornecedor C, ordenado pelo nome da peça
select nome, cor from tbl_peca
where cod_peca in(select cod_peca from tbl_estoque
where cod_fornecedor in (select cod_fornecedor from tbl_fornecedor
where nome like '%C'))
order by nome asc

--7 Listar o nome e a cor de todas as pecas de Londres
select nome, cor from tbl_peca
where cod_peca in(select cod_peca from tbl_peca
where cidade like '%LONDRES')

--8 Encontre o nome das peças que estão disponíveis em estoque em Londres e não estão disponíveis em estoque em Paris:
select nome from tbl_peca
where cod_peca in (select cod_peca from tbl_estoque
where cidade like '%LONDRES') 
except select nome from tbl_peca
where cod_peca in(select cod_peca from tbl_estoque
where cidade like '%PARIS')

--9 Quais os codigos das peças que possuem maior estoque do que a peça de codigo 2?
select distinct(cod_peca) from tbl_estoque
where quantidade > all(select quantidade from tbl_estoque
where cod_peca = 2)



