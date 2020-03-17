#!/bin/bash

for file in $(find . -type f -name '*.html.png'); do
    echo "$file"
    rm "$file"
done