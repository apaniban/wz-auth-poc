import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

export const useForecast = () => {
  const { data: forecast } = useSWR('/api/forecast')

  return { forecast }
}
