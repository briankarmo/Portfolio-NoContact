@echo off
cd /d "%~dp0"
echo Current directory: %CD%
echo.
echo Running favicon generation from BKIncLogo.png...
echo.
node scripts\generate-favicon.mjs
echo.
echo Done! Check the public folder for generated favicon files.
pause

