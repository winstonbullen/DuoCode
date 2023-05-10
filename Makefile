.PHONY: install build run deploy test

install:
	cd ./frontend/ && npm install
	cd ./frontend/ && npm install --save-dev
	cd ./backend/ && npm install
	cd ./backend/ && npm install --save-dev

build:
	cd ./frontend/ && npm run build
	cd ./backend/ && npm run build

run: 
	cd ./backend/ && npm run start

deploy: build run

test:
	cd ./frontend/ && npm run test
	cd ./backend/ && npm run test
