# R.O.B.
**SUSPENDED**

5ebec's hubot

## Dev
```zsh
cp .env.sample .env
# Edit .env
vim .env

# start
docker-compose up -d

# update
docker-compose up -d --build

# redis-cli
docker exec -it $(docker-compose ps -q redis) redis-cli

# end
docker-compose down
```
