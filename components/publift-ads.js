import { useEffect } from 'react'

const PubliftAds = ({ showAds, fuseId }) => {
  useEffect(() => {
    let isMounted = true;

    if (showAds) {
      if (window && window.fusetag && isMounted) {
        const fusetag = window.fusetag || { que: [] }

        fusetag.que.push(() => fusetag.loadSlotById(fuseId));
      }
    }

    return () => {
      isMounted = false;
    };

  }, [showAds, fuseId])

  if (!showAds) {
    return null
  }

  return <div data-fuse={fuseId} />
}

export default PubliftAds
