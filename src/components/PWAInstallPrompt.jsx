'use client'

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered successfully:', registration.scope);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Show the install prompt
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowInstallPrompt(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    // Clear the deferredPrompt so it can only be used once
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    // Store dismissal in localStorage to not show again for a while
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  // Don't show if dismissed recently (within 7 days)
  useEffect(() => {
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
      if (Date.now() - dismissedTime < sevenDaysInMs) {
        setShowInstallPrompt(false);
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {showInstallPrompt && deferredPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-2xl p-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              {/* App Icon */}
              <div className="flex-shrink-0 p-1.5 rounded-lg">
                <img
                  src="/assets/bkinclogo.png"
                  alt="BK Inc Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm mb-1">
                  Install BRIAN Portfolio
                </h3>
                <p className="text-gray-300 text-xs mb-3">
                  Install this app on your home screen for quick and easy access
                </p>
                
                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={handleInstallClick}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-medium py-2 px-4 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Install
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs font-medium py-2 px-4 rounded-md transition-all duration-200"
                  >
                    Not Now
                  </button>
                </div>
              </div>
              
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

