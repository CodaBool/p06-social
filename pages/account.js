import { format } from 'timeago.js'

export default function Account() {
  const user = {
    name: 'Bob Joe',
    email: 'bobjoe@gmail.com',
    active: 'true',
    joined: Date.now(),
    updated: Date.now()
  }

  return (
    <>
      <div>
        <hr></hr>
        <h4 className="card-title mb-3 text-muted">Account</h4>
      </div>
      
      <div>
        <p>Name: {user.name}</p>
        <p>{user.email}</p>
        <p>Active: {user.active ? 'true' : 'false'}</p>
        <p>Joined: {format(user.joined)}</p>
        <p>Updated: {format(user.updated)}</p>
      </div>
    </>
  )
}