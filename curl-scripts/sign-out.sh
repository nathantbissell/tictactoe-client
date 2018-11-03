#!/bin/bash

curl --include --request DELETE http://tic-tac-toe.wdibos.com \
  --headers "Authorization: Token token=${TOKEN}"
