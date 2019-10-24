import React, { Component } from "react";
import axios from "axios";
import {
  ProfileSkillsSection,
  ProfileSection,
  ProfileList,
  ProfileTitle,
  ProfileTitleSpan,
  ProfileItem,
  ItemSpan,
  SkillsSection,
  SkillsDesc,
  SkillsBar,
  SkillsTitle,
  SkillsTitleSpan,
  BarTitle,
  BarPerc,
  BarParent,
  BarParentSpan
} from "./style.js";

class Profile extends Component {
  state = {
    skills: [],
    item: []
  };

  componentDidMount() {
    axios.get("js/data.json").then(res => {
      this.setState({
        item: res.data.profile.item,
        skills: res.data.profile.skills
      });
    });
  }

  render() {
    const items = this.state.item;
    const { skills } = this.state;
    const ProfileItems = items.map(item => {
      return (
        <ProfileItem key={item.id}>
          <ItemSpan>{item.key}</ItemSpan>
          {item.style === "web" ? (
            <ItemSpan web>{item.value}</ItemSpan>
          ) : (
            item.value
          )}
        </ProfileItem>
      );
    });

    const SkillsBars = skills.map(skill => {
      return (
        <SkillsBar key={skill.id}>
          <BarTitle>{skill.title}</BarTitle>
          <BarPerc>{skill.perc}%</BarPerc>
          <BarParent>
            <BarParentSpan perc={skill.perc}></BarParentSpan>
          </BarParent>
        </SkillsBar>
      );
    });

    return (
      <ProfileSkillsSection>
        <div className="container">
          <ProfileSection>
            <ProfileTitle>
              <ProfileTitleSpan>My </ProfileTitleSpan>Profile
            </ProfileTitle>
            <ProfileList>{ProfileItems}</ProfileList>
          </ProfileSection>

          <SkillsSection>
            <SkillsTitle>
              Some <SkillsTitleSpan>skills</SkillsTitleSpan>
            </SkillsTitle>
            <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>

            {SkillsBars}
          </SkillsSection>
        </div>
      </ProfileSkillsSection>
    );
  }
}

export default Profile;
