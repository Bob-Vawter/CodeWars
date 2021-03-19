#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 122 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 123 days ago" -m 'cw daily'
git push -u origin main
touch test.txt
git add .
git commit --date " 124 days ago" -m 'cw daily'
git push -u origin main
rm test.txt
git add .
git commit --date " 125 days ago" -m 'cw daily'
git push -u origin main