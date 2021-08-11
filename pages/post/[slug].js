import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { format } from 'timeago.js'
import data from '../../constants/data.json'
import { ArrowLeft } from 'react-bootstrap-icons'
import { useRouter } from 'next/router'

export default function Post({ post }) {
  const router = useRouter()

  return (
    <>
      <Button className="my-2" variant="outline-secondary" onClick={() => router.push('/post')}>
        <ArrowLeft className="mb-1 mr-3" size={22} />
        <p className="d-inline ">Back</p>
      </Button>
      <Row className="">
        <Col className="p-3" md={4}>
          <div className="d-flex">
            <img src={post.image} className="rounded-circle mx-auto" />
          </div>
        </Col>
        <Col className="p-3" md={8}>
          <h2 className="display-4">{post.title}</h2>
          <p className="text-muted">{format(post.createdAt)}</p>
          <p className="text-muted">{post.user}</p>
        </Col>
      </Row>
      <Row>
        <Col className="p-5">
          <p>&emsp;{post.body}</p>
        </Col>
      </Row>
      <Row>
        <Col className="p-5">
          <h3 className="text-muted text-center">&emsp;Comments Here</h3>
        </Col>
      </Row>
    </>
  )
}

export async function getStaticProps(context) {
  const { slug } = context.params 
  return { props: { post: data[slug - 1] } }
}

export async function getStaticPaths() {
  let arr = []
  let paths = []
  for (let i = 1; i < data.length + 1; i++){
    arr.push(String(i))
  }
  paths = arr.map(page => ({
    params: { slug: page },
  }))
  console.log('post/[slug] paths', paths)
  return { paths, fallback: false } // { fallback: false } means other routes should 404.
}