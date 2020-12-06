#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 103 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 102 days ago" -m 'cw daily'
git push -u origin main
touch test.txt
git add .
git commit --date " 101 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 100 days ago" -m 'cw daily'
git push -u origin main