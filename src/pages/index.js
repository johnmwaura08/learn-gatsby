import React from "react"
import { ExampleButton } from "../components/button"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hello from gatsby</h1>
      <ExampleButton>click me</ExampleButton>
    </Layout>
  )
}
