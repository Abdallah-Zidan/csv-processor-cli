#!/usr/bin/bash

if which node >/dev/null; then
  echo "ok" >/dev/null
else
  echo "Looks like node isn't installed or not in path. node is required in order to run the application"
  exit 1
fi

node app.js "$@"
