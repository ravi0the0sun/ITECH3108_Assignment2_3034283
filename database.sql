DROP DATABASE IF EXISTS poemapp;
CREATE DATABASE poemapp;

CREATE TABLE userinfo (
    userId int,
    name varchar(50),
    username varchar(50),
    passwordhash varchar(255),
    salt varchar(255)
);

CREATE TABLE poem (
    poemId int,
    title varchar(255),
    content varchar(255),
    likedby int[]
);

CREATE TABLE comment (
    commentId int,
    comment int,
    userId int,
    poemId int
);