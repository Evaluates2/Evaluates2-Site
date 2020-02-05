import React from "react"
import { IntroContainer, TextContainer, CenteredH1 } from "./styles"
import $ from 'jquery';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount() {

  }

  render() {
    return (
      <IntroContainer>
        <TextContainer>
          Here at Evaluates2 we offer strategic guidance in
            <AnchorLink href="#discovery"> bringing new products to life </AnchorLink>
          that combines a
            <AnchorLink href="#data"> unique and efficient approach </AnchorLink>
          to <AnchorLink href="#product">product management</AnchorLink> with
          software consulting service focused on
            <AnchorLink href="#engineering"> excellence of code and product.</AnchorLink>

          <CenteredH1>test, pair, ship.</CenteredH1>
          <CenteredH1>(Evaluates2)</CenteredH1>

        </TextContainer>

      </IntroContainer>
    )
  }
}

export default Intro
