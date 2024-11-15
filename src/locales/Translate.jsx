import React, { useEffect, useRef } from 'react';

const Translate = () => {
  const googleTranslateRef = useRef(null);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Initialize Google Translate widget only once
    window.googleTranslateElementInit = () => {
      if (googleTranslateRef.current) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          googleTranslateRef.current
        );
      }
    };

    // Load the Google Translate script
    addGoogleTranslateScript();

    // Cleanup function to set googleTranslateElementInit to null (avoid deletion)
    return () => {
      window.googleTranslateElementInit = null;
    };
  }, []);

  return <div ref={googleTranslateRef}></div>;
};

export default Translate;
