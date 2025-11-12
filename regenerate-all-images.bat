@echo off
echo ========================================
echo   Regenerating ALL Images from BKIncLogo.png
echo ========================================
echo.

echo Step 1: Generating Favicons for ALL Platforms (Browser Tabs, iOS, Android, Windows)...
node scripts\generate-favicon.mjs
echo.

echo Step 2: Generating Social Media Images (Facebook, Mobile Sharing)...
node scripts\generate-social-images.mjs
echo.

echo Step 3: Generating Mobile Icon Sizes...
node scripts\generate-logo-icons.mjs
echo.

echo ========================================
echo   ALL IMAGES REGENERATED SUCCESSFULLY!
echo ========================================
echo.
echo Generated files from BKIncLogo.png:
echo   - Browser Tab Favicons (favicon.ico, favicon-*.png)
echo   - Apple/iOS Icons (apple-touch-icon-*.png)
echo   - Android/Chrome Icons (android-chrome-*.png)
echo   - Windows Tiles (mstile-*.png)
echo   - Facebook Sharing Image (FacebookBKLogo.png - 1200x630)
echo   - Mobile Sharing Image (bkinc-social-square.png - 1200x1200)
echo   - PWA/Manifest Icons (assets/icons/bkinclogo-*.png)
echo.
echo Next steps:
echo   1. Rebuild your site: npm run build
echo   2. Clear Facebook cache: https://developers.facebook.com/tools/debug/
echo   3. Test sharing your link - images should not be distorted!
echo   4. Test favicon in browser tabs - should show BKIncLogo.png
echo.
pause

