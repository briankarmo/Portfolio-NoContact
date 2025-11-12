@echo off
echo Regenerating favicon.ico from BK.png (gold logo)...
cd /d "%~dp0"
node scripts\generate-favicon.mjs
echo.
echo Done! The favicon.ico has been regenerated from BK.png.
echo.
echo IMPORTANT: Clear your browser cache or do a hard refresh (Ctrl+Shift+R) to see the new favicon.
pause

