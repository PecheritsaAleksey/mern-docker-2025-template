DOCKER_COMPOSE_FILE_DEV = docker-compose.yml

dev:
	docker-compose -f $(DOCKER_COMPOSE_FILE_DEV) up | grep -v mongo

dev-stop:
	docker-compose -f $(DOCKER_COMPOSE_FILE_DEV) down

dev-rebuild:
	docker-compose -f $(DOCKER_COMPOSE_FILE_DEV) up -d --build | grep -v mongo
