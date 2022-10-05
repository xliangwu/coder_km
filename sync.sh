#!/bin/bash
echo "$(date) [INFO] sync data from github"
git pull

echo "$(date) [INFO] vue buiild static web sites"
yarn docs:build

cp -R /home/xw80329/apps/coder_km/docs/.vuepress/dist/* /home/xw80329/coder_km
echo "$(date) [INFO] sync static web sites"