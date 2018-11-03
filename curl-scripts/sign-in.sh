#!/bin/bash

curl --include --request POST http://tic-tac-toe.wdibos.com \
  --headers "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'
