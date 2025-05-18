#!/bin/bash
cd /home/xw80329/apps/coder_km
echo "$(date) [INFO] sync data from github"
current_commit_id=$(git log |head -1 |cut -d ' ' -f2)
timeout 60 git pull

new_commit_id=$(git log |head -1 |cut -d ' ' -f2)
echo "old:${current_commit_id} ,new:${new_commit_id}"

if [[ "$current_commit_id" == "$new_commit_id" ]];then
   echo "$(date) no code changes"
   exit 0
fi

echo "$(date) [INFO] start to buiild static web sites"
yarn docs:build &
wait
echo "$(date) [INFO] finish to buiild static web sites"

cp -R /home/xw80329/apps/coder_km/docs/.vuepress/dist/* /home/xw80329/coder_km
echo "$(date) [INFO] sync static web sites"

## rsync -raP /root/apps/code_km/coder_km/docs/.vuepress/dist/ <>:<>:/home/xw80329/coder_km
#export NODE_OPTIONS=--openssl-legacy-provider