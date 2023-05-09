.PHONY: install deploy test clean

install:
	cd ./frontend/ && npm install
	cd ./frontend/ && npm install --save-dev
	cd ./backend/ && npm install
	cd ./backend/ && npm install --save-dev

deploy:
	cd ./frontend/ && npm run build
	cd ./backend/ && npm run build
	cd ./backend/ && npm run start

test:
	cd ./frontend/ && npm run test
	cd ./backend/ && npm run test

clean:
	cd ./frontend/ && npm run clean
	cd ./backend/ && npm run clean
