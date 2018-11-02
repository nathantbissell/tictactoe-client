#!/bin/bash

curl --include --request DELETE http://tic-tac-toe.wdibos.com \
  --header "Authorization: Token token=${TOKEN}"
