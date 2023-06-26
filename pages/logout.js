import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

export default function Logout() {

  // if (isLoad(session, loading, false)) return <Load />

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
            window.alert('This is a sample, authentication is unecessary.')
          }}
        >
          Logout
        </Button>
      </Row>
    </>
  )
}
