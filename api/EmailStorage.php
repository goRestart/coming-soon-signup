<?php

class EmailStorage {

    private $table = "emails";
    private $fieldEmail = "email";
    private $connection = null;

    public function exists($email) {
        return pg_select($this->connection, $this->table, array($this->fieldEmail => $email));
    }

    public function store($email) {
        return pg_insert($this->connection, $this->table, array($this->fieldEmail => $email));
    }

    public function connect($user, $pass, $host, $path) {
      $connectionString = "user=$user password=$pass host=$host dbname=" . substr($path, 1);
      $this->connection = pg_connect($connectionString);
    }
}
