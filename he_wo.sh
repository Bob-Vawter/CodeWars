#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 107 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 108 days ago" -m 'cw daily'
git push -u origin main
touch test.txt
git add .
git commit --date " 109 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 97 days ago" -m 'cw daily'
git push -u origin main