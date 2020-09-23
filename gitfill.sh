#!/usr/bin/bash

touch test.txt
git add .
git commit --date " 180 days ago" -m "codewars daily"
git push -u origin main
rm test.txt
git add .
git commit --date " 180 days ago" -m "codewars daily"
git push -u origin main

