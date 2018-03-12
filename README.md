# NodeJS API with postgresql database

# postgresql database

database name : Demo

-- Table: public.tblusers

-- DROP TABLE public.tblusers;

CREATE TABLE public.tblusers
(
    id integer NOT NULL DEFAULT nextval('tblusers_id_seq'::regclass),
    mobile_number character varying(12) COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default",
    full_name character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    gender character varying COLLATE pg_catalog."default",
    create_date timestamp without time zone NOT NULL,
    update_date timestamp without time zone,
    status character varying(1) COLLATE pg_catalog."default" DEFAULT 'D'::character varying,
    CONSTRAINT tblusers_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.tblusers
    OWNER to postgres;


# .env file configuraction

setup your database credentials into .env file


# npm 

run following command into root of the project in command prompt (e.g D:\DemoProject> )

1) npm install
2) npm install -g pg@6.4.2
3) npm install pg

After installing run below command : 

4) node server.js


# API'S documentation 

---- For HTTP GET method -----

1) Get All User List

http://localhost:3000/user/GetAllUsers

Json Output :

{"success":true,"message":"Record found...","data":[{"id":3,"mobile_number":"1234567820","password":"123we","full_name":"qwe2","email":"qwe@qwe.com","gender":"Male","create_date":"2018-03-12T01:29:51.000Z","update_date":null,"status":"A"},{"id":4,"mobile_number":"1234567810","password":"123we","full_name":"qwe2","email":"qwe@qwe.com","gender":"Male","create_date":"2018-03-12T01:30:32.000Z","update_date":null,"status":"A"},{"id":5,"mobile_number":"1234568810","password":"123we","full_name":"qwe2","email":"qwe@qwe.com","gender":"Male","create_date":"2018-03-12T01:30:39.000Z","update_date":null,"status":"A"},{"id":6,"mobile_number":"1234568010","password":"123we","full_name":"qwe2","email":"qwe@qwe.com","gender":"Male","create_date":"2018-03-12T01:30:47.000Z","update_date":null,"status":"A"},{"id":7,"mobile_number":"1234568610","password":"qwe34","full_name":"Test1","email":"qwe@qwe.com","gender":"Male","create_date":"2018-03-12T01:30:53.000Z","update_date":"2018-03-12T01:31:24.000Z","status":"A"},{"id":8,"mobile_number":"1234564610","password":"test","full_name":"Test_123","email":"qwe@qwe.com","gender":"Male","create_date":"2018-03-12T03:05:40.000Z","update_date":"2018-03-12T03:08:27.000Z","status":"A"}]}


2) Delete User by id

http://localhost:3000/user/DeleteUser?id=2

Json Output :

{"success":true,"message":"User deleted successfully...","data":1}

---- End Http Get method -----



---- For HTTP POST method ----

1) For Create New User

POST /user/CreateUser
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

    { id: '',
     mobile_number: '1234567890',
     password: 'test',
     full_name: 'Test',
     email: 'Test@test.com',
     gender: 'Male' } };

adding above Json Object into HTTP POST body


Json Output :

{"success":true,"message":"User created successfully..."}


2) For Update User Deatils

POST /user/CreateUser
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

    { id: '8',
     mobile_number: '1234564610',
     password: 'test',
     full_name: 'Test_123',
     email: 'Test@test.com',
     gender: 'Male' } }

adding above Json Object into HTTP POST body

Notes: pass id in "id" fields for related records that you want to update

Json Output :

{"success":true,"message":"User updated successfully..."}




