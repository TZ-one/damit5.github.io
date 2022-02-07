#!/usr/bin/env bash 
# 避免本地添加水印，占用资源

server=root@knownsec2

cd _book
zip -r -q -o test.zip *
ssh $server mkdir /tmp/tmp
ssh $server mkdir /tmp/tmp/font
scp ../font/方正黑体简体.ttf root@knownsec2:/tmp/tmp/font
scp test.zip root@knownsec2:/tmp/tmp
scp ../watermarker_d4m1ts.py root@knownsec2:/tmp/tmp
ssh $server "cd /tmp/tmp && unzip -o test.zip && rm -rf test.zip && python3 watermarker_d4m1ts.py -f ./ -m 'd4m1ts gm7.org' -t 10 && zip -r -q -o test.zip *"
rm -rf test.zip
scp root@knownsec2:/tmp/tmp/test.zip ./
ssh $server "rm -rf /tmp/tmp"
unzip -o test.zip && rm -rf test.zip
cp -af * ../../damit5.github.io