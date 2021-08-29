create table if not exists product
(

    id int not null
            primary key,
    name varchar(255) not null,
    price varchar(255) not null,
    owner varchar(255) not null,
    count int not null
);

drop table product;

alter table product owner to kocfunxtdqayok;

create sequence product_id_seq;

alter sequence product_id_seq owner to qnqppidiuuffam;

