#!/usr/bin/env bash

git add *
git commit -m "`date +'%y-%m-%d %H:%M:%S'` $1"
git push -u origin master
