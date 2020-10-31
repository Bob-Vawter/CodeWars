#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 139 days ago" -m 'daily codewar'
git push -u origin main
rm test.txt
git add .
git commit --date " 140 days ago" -m 'daily codewar'
git push -u origin main
