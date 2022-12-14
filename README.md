# Dice Challenge using Docker & WebHooks

A simple dice game to decide a winner. Runs on docker using Nginx. Playing against Nithin has a twist at the end.

Although this can be accomplished via GitHub pages, I've decided to take the Docker route instead.

## Docker Steps

#### 0: Prerequisites

Run the website either by:

* [a] Installing Docker on your local machine from [here](https://www.docker.com) and run steps 1 to 4 (or)

* [b] via [Google Cloud Shell with Editor](https://ssh.cloud.google.com/cloudshell/editor?hl=en_GB&fromcloudshell=true)


#### 1: Clone Repository

From a terminal window run:

* `git clone https://github.com/nithin-ak/nus-dice-challenge-docker`


#### 2: Build Container

* Change into the directory : `cd nus-dice-challenge-docker`

* Start Build: `docker build . -t mydicechallenge`


#### 3: Run Container

* `docker run -d -p 8080:80 mydicechallenge`


#### 4: Launch Website

* [a] If via Docker on your local machine, from --> localhost:8080

* [b] via [Google Cloud Shell with Editor](https://ssh.cloud.google.com/cloudshell/editor?hl=en_GB&fromcloudshell=true) using this icon

<img width="265" alt="Preview" src="https://user-images.githubusercontent.com/79146002/205598104-740ade52-6a05-4cc2-8ec5-5b58489e8605.png">


#### 5: Basic Troubleshooting

* Show Running containers : `docker ps`

* Kill all running containers : `docker kill $(docker ps -q)`

* To delete directory:

  * `cd ~`

  * `rm -rf nus-dice-challenge-docker`



## IFTTT & WebHooks Flow Chart

Shows when WebHooks is triggered via IFTTT.

A latency of 2-10+ sec is expected for IFTTT to trigger.

![IFFFT_Webhooks](https://user-images.githubusercontent.com/79146002/205613289-33b6b9f5-2b6d-42e9-a321-913ad88f13dc.svg)
