.PHONY: $(shell egrep -o ^[a-zA-Z_-]+: $(MAKEFILE_LIST) | sed 's/://')

run:
	npm run dev

build:
	npm run generate

api:
	cd $(PWD)/api && npm run start
