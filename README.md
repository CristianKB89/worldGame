/*
CREATE DATABASE wolrdGame;
USE wolrdGame;

CREATE TABLE Users (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
email VARCHAR(100)NOT NULL,
nickName varchar(100) not null,
name VARCHAR(100) NOT null,
password varchar(100) not null,
img_user varchar(100)
);

alter table users 
	add img_user varchar(100)


create table Genres (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
title VARCHAR(100) NOT null
)

create table Games (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
title VARCHAR(100)NOT NULL,
price float not null,
discount int,
description text not null,
genre_id int not null,
img_card varchar(100),
img_detail varchar(100),
rating_age int,
foreign key (genre_id) references Genres(id)
)

create table Library (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
user_id int,
game_id int,
foreign key (user_id) references Users(id),
foreign key (game_id) references Games(id)
)

create table platforms (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(100) NOT null
)

create table platforms_games (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
platform_id int,
game_id int,
foreign key (platform_id) references Platforms(id),
foreign key (game_id) references Games(id)
)

create table Publications (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
title VARCHAR(100) NOT null,
description text not null,
img varchar(100),
user_id int,
created_at timestamp,
foreign key (user_id) references Users(id)
)

create table shoppingCart (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
user_id int,
game_id int,
foreign key (user_id) references Users(id),
foreign key (game_id) references Games(id)
)

*/