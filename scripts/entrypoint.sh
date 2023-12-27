#!/bin/bash

# Docker install

function docker-install-funct() {
	echo -e "\e[32mInstalando docker\e[0m"

	# Instalacion de docker
	sudo yum update -y
	sudo yum install docker -y
	docker-compose-install-funct

	# Llamada a la post-instalacion de docker
	echo -e "\e[32mInstalacion de docker exitosa\e[0m"

	docker-post-install-funct
}


function docker-compose-install-funct() {
	sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
	sudo chmod +x /usr/local/bin/docker-compose
}

function docker-post-install-funct() {
	echo -e "\e[32mComenzando post-instalacion de docker\e[0m"
	# Post-instalacion de docker
	echo -e "\e[32mCreando grupo docker\e[0m"
	if ! getent group docker >/dev/null; then
		sudo groupadd docker
	fi
	echo -e "\e[32mFinalizacion de creacion grupo docker y asignando el grupo docker\e[0m"
	usermod -aG docker $USER
	systemctl start --now docker.service
	systemctl enable --now docker.service

	echo -e "\e[32mFinalizacion de post-instalacion de docker\e[0m"
}

# ejecucion de funciones 

main() {
    docker-install-funct
}

main