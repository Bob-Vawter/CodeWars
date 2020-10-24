#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 146 days ago" -m 'daily codewar'
git push -u origin main
rm test.txt
git add .
git commit --date " 147 days ago" -m 'daily codewar'
git push -u origin main
