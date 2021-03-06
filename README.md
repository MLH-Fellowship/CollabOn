
![License](https://img.shields.io/badge/License-ISC-yellowgreen)
![Contributors](https://img.shields.io/github/contributors/MLH-Fellowship/CollabOn)
![Issues](https://img.shields.io/github/issues/MLH-Fellowship/CollabOn?style=flat-square)
![repo size](https://img.shields.io/github/repo-size/MLH-Fellowship/CollabOn)
![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMLH-Fellowship%2FCollabOn)
<p align="center">
    <img src="https://i.imgur.com/SzqHmX0.png" />
</p>

CollabOn integrates into your organization to give you a live feed of what's happening in your organization.  
It will track the pull requests, issues, comments, and pushed commits. 

<p align="center">
  <img width="80%" src="https://i.imgur.com/BVYssiq.png">
</p>


# Installation

```
git clone https://github.com/MLH-Fellowship/CollabOn.git
cd CollabOn
docker-compose up
```
Go to http://localhost to access application

# Architecture  
<p align="center">
    <img src="CollabOn.svg" />
</p>

# Tech Stack

- Front-End : Build using VueJs
- collabon : NodeJs, Probot, SQLite, GitHub WebHooks
- helper Service : NodeJs, GitHub API

# License
ISC

# Authors

- Gautam Mishra
- Biswajit Ghosh