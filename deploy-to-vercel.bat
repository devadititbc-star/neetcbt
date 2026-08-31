@echo off
echo ========================================================
echo Step 1: Logging in to Vercel (will open in your browser)...
echo ========================================================
set PATH=%LOCALAPPDATA%\NodeJS;%LOCALAPPDATA%\MinGit\cmd;%PATH%
call npx vercel login

echo.
echo ========================================================
echo Step 2: Deploying NEETcbt to Vercel...
echo ========================================================
call npx vercel --prod
pause
