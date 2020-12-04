#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 105 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 106 days ago" -m 'cw daily'
git push -u origin main
touch test.txt
git add .
git commit --date " 104 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 99 days ago" -m 'cw daily'
git push -u origin main