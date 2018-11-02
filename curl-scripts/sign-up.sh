# sh curl-scripts/json/sign-up.sh

# don't use a password you use for any real websites!
curl --include --request POST https://aqueous-atoll-85096.herokuapp.com/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo
