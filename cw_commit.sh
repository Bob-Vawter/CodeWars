#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 126 days ago" -m 'daily codewar'
git push -u origin main
rm test.txt
git add .
git commit --date " 127 days ago" -m 'daily codewar'
git push -u origin main
