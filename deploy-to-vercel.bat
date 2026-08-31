@echo off
echo ========================================================
echo Deploying NEETcbt directly to Vercel...
echo ========================================================
set PATH=%LOCALAPPDATA%\NodeJS;%LOCALAPPDATA%\MinGit\cmd;%PATH%
call npx vercel --prod
pause
