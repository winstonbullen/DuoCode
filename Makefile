.PHONY: install build test run

install:
	cd ./frontend/ && npm ci
	cd ./backend/ && npm ci

build:
	cd ./frontend/ && npm run build
	cd ./backend/ && npm run build

test:
	cd ./frontend/ && npm run test
	cd ./backend/ && npm run test

run: 
	cd ./backend/ && npm run start
