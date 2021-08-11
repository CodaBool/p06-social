import Card from "react-bootstrap/Card"
import { format } from 'timeago.js'
import { useRouter } from 'next/router'

export default function Post({ title, body, created, updated, image, id, user }) {
  const router = useRouter()

  function handleClick() {
    window.scrollTo(0,0)
    router.push(`/post/${id}`)
  }

  return (
    <Card className="Post" onClick={handleClick}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>&emsp;{body.substring(0, 300)}...</Card.Text>
        <Card.Text>Created: {created}</Card.Text>
        <small className="mb-2 text-muted">Last Updated: {format(updated)} || Create by: {user}</small>
      </Card.Body>
    </Card>
  );
}
