#!/bin/bash

i=0

for x in *.JPG; do
  echo $x
  echo $i
  mv $x $i.jpg
  i=$((i + 1))
done
