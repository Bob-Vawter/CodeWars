#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 118 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 119 days ago" -m 'cw daily'
git push -u origin main
touch test.txt
git add .
git commit --date " 120 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 121 days ago" -m 'cw daily'
git push -u origin main