import Layout from '../components/layout'

function Contact() {
  return (
    <Layout>

      <h1>Iletesim!</h1>
      <style jsx>{`
        h1 {
          background-color: blue;
          color: white;
        }
      `}</style>
      <style global jsx>{`
        body {
          background-color: yellow;
        }
      `}</style>
    </Layout>
  )
}

export default Contact
