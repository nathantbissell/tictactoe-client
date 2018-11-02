# sh curl-scripts/json/sign-up.sh

# don't use a password you use for any real websites!
curl --include --request POST http://tic-tac-toe.wdibos.com \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo
