import { useEffect, useRef } from 'react'

const TaboolaAds = ({ showAds, pageType, targetType }) => {
  let isMounted = true
  const containerRef = useRef(null)
  const taboola = window?._taboola || [];

  useEffect(() => {
    let isMounted = true

    if (isMounted && showAds && containerRef) {
      taboola.push({ notify: 'newPageLoad' });

      taboola.push({
        [pageType]: 'auto',
        url: `${window?.location?.origin}`,
      });
    }

    return () => {
      isMounted = false
      taboola.push({ flush: true })
    }
  }, [showAds, pageType])

  useEffect(() => {
    let isMounted = true;

    if (isMounted && showAds && containerRef.current) {
      const taboola = window?._taboola || [];

      taboola.push({
        mode: 'thumbnails-b',
        container: containerRef.current,
        placement: 'Below Home Thumbnails',
        target_type: targetType
      });
    }

    return () => {
      isMounted = false
      taboola.push({ flush: true })
    };
  }, [containerRef, showAds]);

  if (!showAds) {
    return null
  }

  return <div ref={containerRef} />
}

export default TaboolaAds
