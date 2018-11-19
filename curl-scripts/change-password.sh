# TOKEN=<token> OLD_PASSWORD=123 NEW_PASSWORD=321 sh curl-scripts/json/change-password.sh

curl http://tic-tac-toe.wdibos.com \
  --include \
  --request PATCH \
  --headers "Authorization: Token token=${TOKEN}" \
  --headers "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
