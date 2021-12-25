#!/usr/bin/env bash

if [ -n "$1" ]
then
    # 加水印
    python3 watermarker_d4m1ts.py -f ./ -m "d4m1ts gm7.org" -t 5
    # 上传到github
    git add *
    git commit -m "`date +'%y-%m-%d %H:%M:%S'` $1"
    git push -u origin master

else
    echo "必须输入一个参数！！"
fi
