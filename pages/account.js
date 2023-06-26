import React from 'react'

export default function Account() {

  // if (isLoad(session, loading, true)) return <Load />

  return (
    <>
      <div>
        <hr></hr>
        <h4 className="card-title mb-3 text-muted">Account</h4>
      </div>
      
      <div>
        <p>Name: Jon Smith</p>
        <p>jonsmith@mail.com</p>
        <p>Active: true</p>
        <p>Joined: 2023-05-05</p>
        <p>Updated: 2023-05-05</p>
      </div>
    </>
  )
}

// export async function getServerSideProps(context) {
//   const user = await quickUser(context)
//   return { props: { user }}
// }