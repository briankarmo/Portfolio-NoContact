@echo off
echo Regenerating social sharing images with black background...
node scripts\generate-social-images.mjs
echo.
echo Done! Images have been regenerated with black backgrounds.
echo.
echo Next steps:
echo 1. Rebuild your site: npm run build
echo 2. Clear Facebook cache: https://developers.facebook.com/tools/debug/
echo 3. Test sharing your link on Facebook
pause

