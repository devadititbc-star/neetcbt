@echo off
echo ========================================================
echo Pushing NEETcbt updates to GitHub to trigger Vercel rebuild...
echo ========================================================
"%LOCALAPPDATA%\MinGit\cmd\git.exe" push -u origin main --force
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo SUCCESS: Pushed to https://github.com/devadititbc-star/neetcbt.git!
    echo Vercel is now rebuilding https://neetjee-prep-platform.vercel.app/ (takes ~60 seconds).
    echo ========================================================
) else (
    echo.
    echo Pushing failed. Please check your GitHub credentials if prompted.
)
pause
