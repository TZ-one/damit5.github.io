#!/usr/bin/env bash

if [ -n "$1" ]
then
    git add *
    git commit -m "`date +'%y-%m-%d %H:%M:%S'` $1"
    git push -u origin master

else
    echo "必须输入一个参数！！"
fi
