#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 133 days ago" -m 'daily codewar'
git push -u origin main
rm test.txt
git add .
git commit --date " 134 days ago" -m 'daily codewar'
git push -u origin main
