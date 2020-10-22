#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 148 days ago" -m 'daily codewar'
git push -u origin main
rm test.txt
git add .
git commit --date " 149 days ago" -m 'daily codewar'
git push -u origin main
