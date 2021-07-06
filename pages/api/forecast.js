import { withSession } from '../../lib/session'

const getForecast = async (req, res) => {
  const user = req.session.get('user')
  const accessToken = user?.accessToken

  /**
   * NOTE: If user has access token from cookie,
   * use this as authorization header when calling upstream services
   * e.g.
   *
   * const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
   * const forecast = axios.get('/mapped-locations', { headers }).then(R.prop('data'))
   */

  /**
   * But for now, just to demonstrate that we're able to pull data,
   * we are responding with different body if it has access token
   */

  if (accessToken) {
    /**
     * If API re-issue a new JWT, replace with the new value and set it in the cookie
     * e.g.
     * const response = await axios.get('/forecast')
     * const newAccessToken = resopnse.headers.Authorization
     *
     * if (accessToken !== newAccessToken) {
     *   req.session.set('user', { ...user, accessToken: newAccessToken })
     *   await req.session.save()
     * }
     */

    /**
     * But for now, we are just going to re-issue token every call to see that new access token is saved
     */
    const newAccessToken = `${accessToken}2`

    req.session.set('user', { ...user, accessToken: newAccessToken })
    await req.session.save()

    return res.json({ precis: 'Sunny', summary: "It's a good day in Sydney" })
  }

  return res.json({ precis: 'Sunny' })
}

export default withSession(getForecast)
