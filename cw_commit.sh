#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 144 days ago" -m 'daily codewar'
git push -u origin main
rm test.txt
git add .
git commit --date " 145 days ago" -m 'daily codewar'
git push -u origin main
