@echo off
echo Regenerating favicons from BK.png...
node scripts\generate-favicon.mjs
echo.
echo Done! All favicons have been regenerated from BK.png.
echo.
echo Next steps:
echo 1. Rebuild your site: npm run build
echo 2. Clear browser cache on your mobile device
echo 3. Test sharing your link - the favicon should now appear
pause

