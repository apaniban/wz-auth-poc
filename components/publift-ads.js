import { useEffect } from 'react'

const PubliftAds = ({ showAds, fuseId }) => {
  const fusetag = window.fusetag || { que: [] }

  useEffect(() => {
    let isMounted = true;

    if (showAds && isMounted) {
      fusetag.que.push(() => fusetag.loadSlotById(fuseId));
    }

    return () => {
      isMounted = false
      fusetag.que.push(() => fusetag.resetSlots())
    };

  }, [showAds, fuseId])

  if (!showAds) {
    return null
  }

  return <div data-fuse={fuseId} />
}

export default PubliftAds
