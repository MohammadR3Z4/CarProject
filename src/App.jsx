import React , {Component} from 'react'
import Nav from '/src/components/nav.jsx'
import Header from '/src/components/header.jsx'
import Services from '/src/components/Services.jsx'
import Product from '/src/components/product.jsx'
import Productcontainer from '/src/components/Productcontainer.jsx'
import Footer from '/src/components/footer.jsx'
import '/dist/output.css'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Services />
        <Productcontainer />
        <Product />
        <Product />
        <Footer />
      </div>
    )
  }
}

export default App

