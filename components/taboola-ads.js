import { useEffect, useRef } from 'react'

const TaboolaAds = ({ showAds }) => {
  let isMounted = true
  const containerRef = useRef(null)

  useEffect(() => {
    if (window && isMounted && showAds) {
      window._taboola = window?._taboola || [];

      window?._taboola?.push({ notify: 'newPageLoad' });

      window?._taboola?.push({
        article: 'auto',
        url: `${window?.location?.origin}`,
      });
    }
  }, [showAds])

  useEffect(() => {
    let isMounted = true;

    if (window && isMounted && showAds && containerRef.current) {
      window._taboola = window._taboola || [];

      window?._taboola?.push({
        mode: 'thumbnails-b',
        container: containerRef.current,
        placement: 'Below Home Thumbnails',
        target_type: 'mix',
      });
    }

    return () => {
      isMounted = false;
    };
  }, [containerRef, showAds]);

  if (!showAds) {
    return null
  }

  return <div ref={containerRef} />
}

export default TaboolaAds
