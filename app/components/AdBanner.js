"use client";

import { useEffect, useRef } from 'react';

/**
 * AdBanner Component
 * 
 * Injects a script with atOptions and invoke.js into a container.
 * 
 * @param {Object} props
 * @param {string} props.adKey - The 'key' from atOptions
 * @param {number} props.height - The 'height' from atOptions
 * @param {number} props.width - The 'width' from atOptions
 */
export default function AdBanner({ adKey, height, width }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Clear any existing children (to avoid double ads on hot-reload)
    container.innerHTML = '';

    const scriptOptions = document.createElement('script');
    scriptOptions.type = 'text/javascript';
    scriptOptions.innerHTML = `
      atOptions = {
        'key' : '${adKey}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;
    
    const scriptInvoke = document.createElement('script');
    scriptInvoke.type = 'text/javascript';
    scriptInvoke.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;

    container.appendChild(scriptOptions);
    container.appendChild(scriptInvoke);

    return () => {
      // Clean up if needed
    };
  }, [adKey, height, width]);

  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: '20px 0',
        minHeight: `${height}px`,
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <div ref={containerRef}></div>
    </div>
  );
}
