#!/bin/bash

curl --include --request POST http://tic-tac-toe.wdibos.com \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'
