SET default_with_oids = false;

CREATE TABLE test_1
(
   id serial, 
   "name" character varying(16), 
   phone character varying(16), 
    PRIMARY KEY (id)
);