#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 110 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 111 days ago" -m 'cw daily'
git push -u origin main
touch test.txt
git add .
git commit --date " 112 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 113 days ago" -m 'cw daily'
git push -u origin main