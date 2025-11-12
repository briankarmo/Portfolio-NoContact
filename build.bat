@echo off
echo Building Next.js project...
call npx next build
if %ERRORLEVEL% EQU 0 (
    echo.
    echo Build successful! Check the 'out' folder for the exported static site.
) else (
    echo.
    echo Build failed. Please check the error messages above.
)
pause

