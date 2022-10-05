#!/bin/bash
echo "${date} [INFO] sync data from github"
git pull

echo "${date} [INFO] vue buiild static web sites"
yarn docs:build