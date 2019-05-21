#!/bin/zsh
npm run build

scp -i ~/下载/myKey.pem -r ~/code/cloudCompute/CloudCompute/files/mean-docker/express-server linux1@148.100.87.15:/home/linux1/app/Cloud-Native-Workloads-on-LinuxONE/files/mean-docker
