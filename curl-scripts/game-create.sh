TOKEN=

curl --include --request POST http://tic-tac-toe.wdibos.com \
--headers "Content-Type: application/json" \
--headers "Authorization: Token token=${TOKEN}"
