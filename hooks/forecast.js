import * as R from 'ramda'
import axios from 'axios'
import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

const fetcher = (...params) => axios.get(...params).then(R.prop('data'))

export const useForecast = ({ initialData }) => {
  const { data: forecast } = useSWR(() => '/api/forecast', fetcher, { initialData })

  return { forecast }
}
