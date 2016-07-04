REPORTER = nyan

install:
	curl -X PUT http://127.0.0.1:5984/games

clear-db:
	curl -X DELETE http://127.0.0.1:5984/games