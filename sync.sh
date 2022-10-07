#!/bin/bash
cd /home/xw80329/apps/coder_km
echo "$(date) [INFO] sync data from github"
timeout 60 git pull

echo "$(date) [INFO] start to buiild static web sites"
yarn docs:build &
wait
echo "$(date) [INFO] finish to buiild static web sites"

cp -R /home/xw80329/apps/coder_km/docs/.vuepress/dist/* /home/xw80329/coder_km
echo "$(date) [INFO] sync static web sites"