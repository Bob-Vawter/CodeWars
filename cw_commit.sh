#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 135 days ago" -m 'daily codewar'
git push -u origin main
rm test.txt
git add .
git commit --date " 136 days ago" -m 'daily codewar'
git push -u origin main
