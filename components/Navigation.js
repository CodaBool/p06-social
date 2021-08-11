import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'

export default function Navigation() {
  const router = useRouter()
  const { auth } = parseCookies()

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand onClick={() => router.push('/post')}>Spotters</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/post">
            <div className={`${(router.asPath.includes('/post') && router.asPath !== '/post/new') && 'active'} nav-link`}>Browse</div>
          </Link>
          {auth
            ?
            <>
              <Link href="/post/new">
                <div className={`${router.asPath === '/post/new' && 'active'} nav-link`}>Create</div>
              </Link>
              <Link href="/account">
                <div className={`${router.asPath.includes('/account') && 'active'} nav-link`}>Account</div>
              </Link>
              <Link href="/logout">
                <div className={`${router.asPath.includes('/logout') && 'active'} nav-link`}>Logout</div>
              </Link>
            </>
            : 
            <Link href="/">
              <div className={`${router.asPath === '/' && 'active'} nav-link`}>Login</div>
            </Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}