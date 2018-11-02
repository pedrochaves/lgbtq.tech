.PHONY: all build down up

build:
	@docker-compose build --no-cache

up:
	@docker-compose up

down:
	@docker-compose down

publish:
	@docker-compose run --rm node npm run export
	@mv docs/CNAME docs/.nojekyll .
	@rm -rf docs && mv out docs
	@mv CNAME .nojekyll docs/
