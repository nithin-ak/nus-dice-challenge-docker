# nus-dice-challenge-docker
Dice Challenge using Docker

## Docker Steps

#### 1: Clone the Repository

git clone https://github.com/nithin-ak/nus-dice-challenge-docker

#### 2: Build Container

change into the directory: 
`cd nus-dice-challenge-docker`

`docker build . -t mydicechallenge`

#### 3: Run Container

`docker run -d -p 8080:8080 mydicechallenge`

#### Troubleshoot

Show Running containers:

`docker ps`

Command to kill all running containers:

`docker kill $(docker ps -q)`

Command to delete image
`cd ~`
`rm -rf nus-dice-challenge-docker`