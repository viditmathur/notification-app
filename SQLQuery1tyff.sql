CREATE DATABASE DOCTORS_VACTINATION;

USE DOCTORS_VACTINATION;

CREATE TABLE DOCS(DOC_UID VARCHAR(10),DNAME VARCHAR(30),DESIGNATION VARCHAR(10),EMAIL_ID VARCHAR(30));

INSERT INTO DOCS(DOC_UID,DNAME,DESIGNATION,EMAIL_ID) 
VALUES(60010013,'RAVI KUMAR','SURGIN','ravikum1965@gmail.com');

CREATE TABLE LOGIN(EMAIL_ID VARCHAR(30),PASSWORD VARCHAR(20),ROLE VARCHAR(10));

INSERT INTO LOGIN(EMAIL_ID,PASSWORD,ROLE)
VALUES('user','pwd','DOCTOR');
select * from login where EMAIL_ID='userid';
select * from DOCS
	delete from login
	delete from docs



CREATE TABLE CHILD(CHILD_ID VARCHAR(10),GENDER VARCHAR(8),TIMING TIME,DATEDAY DATE,HEIGHT INTEGER,WEIGHT INTEGER);

INSERT INTO CHILD(CHILD_ID,GENDER,TIMING,DATEDAY,HEIGHT,WEIGHT)
VALUES(123456,'M','09:45','12/03/2018',10,5);

CREATE TABLE VAC(VAC_NO INTEGER,NAME varchar(20),STATUS varchar(3),CHILD_ID VARCHAR(10));

INSERT INTO VAC(VAC_NO,CHILD_ID)
VALUES(2,'sdfaf','yes',123456);
select *from vac

CREATE TABLE DETAIL(F_NAME VARCHAR(30), M_NAME VARCHAR(30), CHILD_ID VARCHAR(10), DOC_UID VARCHAR(10), EMAIL_ID VARCHAR(30), ADDRESS VARCHAR(70), ADHAR_CARD VARCHAR(20));

INSERT INTO DETAIL(F_NAME, M_NAME , CHILD_ID , DOC_UID , EMAIL_ID, ADDRESS, ADHAR_CARD)
VALUES('RAVIKUMAR','SRISTI',123456,60010013,'ravikim1965@gmail.com','g-134firstfloor jhilmil',644598077892);