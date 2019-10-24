import React, { Component } from "react";
import axios from "axios";
import {
  SocialMediaSection,
  Social,
  Icon,
  SocialDesc,
  Span,
  SpanInfo
} from "./style.js";

class SocialMedia extends Component {
  state = {
    social: []
  };

  componentDidMount() {
    axios.get("js/data.json").then(res => {
      this.setState({ social: res.data.social });
    });
  }

  render() {
    const socials = this.state.social;
    const socialList = socials.map(social => {
      return (
        <Social item={social.id} key={social.id}>
          <Icon className={social.icon}></Icon>
          <SocialDesc>
            <Span>{social.title}</Span>
            <SpanInfo>{social.body}</SpanInfo>
          </SocialDesc>
        </Social>
      );
    });

    return <SocialMediaSection>{socialList}</SocialMediaSection>;
  }
}

export default SocialMedia;
