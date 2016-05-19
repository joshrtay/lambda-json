#
# Vars
#

BIN = ./node_modules/.bin
.DEFAULT_GOAL := all

#
# Tasks
#

test:
	@node test/*

validate:
	@standard

all: validate test

init:
	@git init
	@git add .
	@git commit -am "FIRST"
	@hub create joshrtay/lambda-json -d "Convert JSON with embedded functions to static JSON."
	@travis enable
	@git push -u origin master

#
# Phony
#

.PHONY: test validate all init
