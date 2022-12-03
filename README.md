# nus-dice-challenge-docker
Dice Challenge using Docker

# 1: Clone the Repository

git clone https://github.com/nithin-ak/nus-dice-challenge-docker

# 2: Build Container

change into the directory: cd nus-dice-challenge-docker

docker build . -t mydicechallenge

# 3: Run Container

docker run -d -p 8080:8080 mydicechallenge

Command to kill all running containers:

docker kill $(docker ps -q)