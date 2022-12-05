# Dice Challenge using Docker

A simple dice game to decide a winner.

Runs on docker using Nginx.

Playing against Nithin has a twist at the end

## Docker Steps

#### 0: Prerequisites

* [a] Install Docker on your local machine from [here](https://www.docker.com) and run steps steps 1 to 4 (or)

* [b] via [Google Cloud Shell with Editor](https://ssh.cloud.google.com/cloudshell/editor?hl=en_GB&fromcloudshell=true)

#### 1: Clone Repository

`git clone https://github.com/nithin-ak/nus-dice-challenge-docker`

#### 2: Build Container

change into the directory:

`cd nus-dice-challenge-docker`

`docker build . -t mydicechallenge`

#### 3: Run Container

`docker run -d -p 8080:80 mydicechallenge`

#### 4: Launch Website

* [a] If on via Docker on your local machine from --> localhost:8080

* [b] via [Google Cloud Shell with Editor](https://ssh.cloud.google.com/cloudshell/editor?hl=en_GB&fromcloudshell=true) using this icon

<img width="265" alt="Preview" src="https://user-images.githubusercontent.com/79146002/205598104-740ade52-6a05-4cc2-8ec5-5b58489e8605.png">

#### 5: Troubleshooting

Show Running containers:

`docker ps`

Command to kill all running containers:

`docker kill $(docker ps -q)`

Command to delete directory:

`cd ~`

`rm -rf nus-dice-challenge-docker`
