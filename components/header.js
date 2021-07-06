import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/auth-context'

const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter()

  const handleOnLogoutClick = async (e) => {
    e.preventDefault()
    await logout()
    router.push('/login')
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href='/'><a>Home</a></Link>
          </li>

          { !user?.loggedIn && (
            <li>
              <Link href="/login"><a>Login</a></Link>
            </li>
          )}

          {user?.loggedIn && (
            <>
              <li>
                <Link href="/dashboard"><a>Dashboard</a></Link>
              </li>

              <li>
                <a
                  href="/api/logout"
                  onClick={handleOnLogoutClick}
                >
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
