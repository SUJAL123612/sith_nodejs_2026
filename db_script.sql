CREATE TABLE IF NOT EXISTS users (

	id SERIAL PRIMARY KEY,

	user_name varchar(255) NOT NULL,
	mobile varchar(20),
	email varchar(255),
	role varchar(255),
	password varchar(1024),
	otp_value varchar(255) DEFAULT NULL,
	otp_expiry TIMESTAMP DEFAULT NULL,

	is_obsolete INTEGER DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(255),
	updated_by varchar(255)
);