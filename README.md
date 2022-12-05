# Dice Challenge using Docker

A simple dice game to decide a winner.

Runs on docker using Nginx.

Playing against Nithin has a twist at the end

## Docker Steps

#### 0: Prerequisites

*[1] Install Docker on your local machine from [here](https://www.docker.com) and run steps steps 1 to 3 (or)
*[2] via [Google Cloud Shell with Editor](https://ssh.cloud.google.com/cloudshell/editor?hl=en_GB&fromcloudshell=true)

#### 1: Clone the Repository

`git clone https://github.com/nithin-ak/nus-dice-challenge-docker`

#### 2: Build Container

change into the directory:

`cd nus-dice-challenge-docker`

`docker build . -t mydicechallenge`

#### 3: Run Container

`docker run -d -p 8080:80 mydicechallenge`

#### Troubleshooting

Show Running containers:

`docker ps`

Command to kill all running containers:

`docker kill $(docker ps -q)`

Command to delete directory:

`cd ~`

`rm -rf nus-dice-challenge-docker`
