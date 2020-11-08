#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 131 days ago" -m 'daily codewar'
git push -u origin main
rm test.txt
git add .
git commit --date " 132 days ago" -m 'daily codewar'
git push -u origin main
