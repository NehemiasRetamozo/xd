-- db/schema.sql
-- Script de ejemplo para crear la tabla de mensajes de contacto en MySQL

CREATE TABLE IF NOT EXISTS contact_messages (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  subject VARCHAR(200) DEFAULT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
