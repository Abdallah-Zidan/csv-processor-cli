@echo off

where node >nul 2>&1 && node app.js %* || echo Looks like node isn't installed or not in path. node is required in order to run the application

