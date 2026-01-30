/**
 * Simple GA4 initializer.
 * Replace MEASUREMENT_ID with your actual GA4 ID.
 */
function initAnalytics(measurementId = 'G-66CY0Q6VPS') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', measurementId);
}
