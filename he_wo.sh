#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 114 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 115 days ago" -m 'cw daily'
git push -u origin main
touch test.txt
git add .
git commit --date " 116 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 117 days ago" -m 'cw daily'
git push -u origin main