import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/router'

export default function Logout() {
  const router = useRouter()

  return (
    <>
      <h4 className="display-5 text-center my-4 p-5">
        Are you sure you would like to Logout?
      </h4>
      <Row>
        <Button 
          className="mx-auto"
          style={{width: "20%"}}
          variant="warning"
          type="submit"
          onClick={() => {
            destroyCookie(null, 'auth')
            router.push('/')
          }}
        >
          Logout
        </Button>
      </Row>
    </>
  )
}
