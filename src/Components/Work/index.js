import React, { Component } from "react";
import axios from "axios";
import {
  WorkSection,
  WorkTitle,
  Span,
  WorkPart,
  Icon,
  PartTitle,
  Line,
  PartDesc
} from "./style.js";

class Work extends Component {
  state = {
    works: []
  };

  //* Import Les Données à partir file 'data.json :
  //* Plus : Utilisation de LifeCicle Function componentDidMount() pour lancé avant chargement de Component.
  componentDidMount() {
    axios.get("js/data.json").then(res => {
      // console.log(res.data.works);
      this.setState({ works: res.data.works });
    });
  }

  render() {
    const { works } = this.state;
    const worksList = works.map(workItem => {
      return (
        <WorkPart first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDesc>
            {workItem.body}
          </PartDesc>
        </WorkPart>
      );
    });

    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>

          {worksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;

//TODO : Condition in style-components
//* 1 - Send Value in props :
//* <WorkPart first="1" > : Envoyé props first avec valeur "1" à Component WorkPart in stylejs .

/* 
    <WorkPart first="1" >
      <Icon className="icon fa fa-chain fa-2x"></Icon>
      <PartTitle>Mobile Ux</PartTitle>
      <Line />
      <PartDesc>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        quos omnis voluptas ea ipsam! Voluptas.
      </PartDesc>
    </WorkPart>
*/

//* 2 - Recevoir le valeur à partir de Props :
//* margin-left: ${props => (props.first === '1' ? "0" : "5%")}; : Si first égal "1" valeur de margin-left:'0' .
/* 
export const WorkPart = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: ${props => (props.first === '1' ? "0" : "5%")};
`;
*/
