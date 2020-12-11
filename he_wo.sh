#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 98 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 98 days ago" -m 'cw daily'
git push -u origin main
touch test.txt
git add .
git commit --date " 98 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 98 days ago" -m 'cw daily'
git push -u origin main