@echo off
echo Generating Facebook-optimized BKIncLogo.png...
echo.
cd /d "%~dp0"
node scripts\generate-social-images.mjs
echo.
echo Done! The Facebook image has been generated.
echo.
echo Next steps:
echo 1. Rebuild your site: npm run build
echo 2. Clear Facebook cache: https://developers.facebook.com/tools/debug/
echo 3. Enter your URL and click "Scrape Again"
echo.
pause

