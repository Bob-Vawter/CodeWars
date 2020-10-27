#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 143 days ago" -m 'daily codewar'
git push -u origin main
rm test.txt
git add .
git commit --date " 142 days ago" -m 'daily codewar'
git push -u origin main
