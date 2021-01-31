import React, { Component } from "react";
import FacebookCard from "./FacebookCard";

export class FaceBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: this.props.profiles,
      countryClicked: "",
    };

    this.handleButton = (e) => {
      this.setState({
        countryClicked: e.target.name,
      });
    };
  }

  render() {
    let facebookProfiles = this.state.profiles.map((profile, index) => {
      return (
        <FacebookCard
          key={index}
          lastName={profile.lastName}
          firstName={profile.firstName}
          country={profile.country}
          picture={profile.img}
          type={profile.isStudent}
          button={this.state.countryClicked}
        />
      );
    });

    let facebookProfilesCountries = this.state.profiles.map((profile) => {
      return profile.country;
    });

    let filterRepeatedCountries = facebookProfilesCountries.filter((item, pos) => {
        return facebookProfilesCountries.indexOf(item) === pos;
      }
    );

    return (
      <div>
        {filterRepeatedCountries.map((country, index) => {
          return (
            <button
              onClick={this.handleButton}
              name={country}
              key={index}
              style={{ margin: "2px" }}
            >
              {country}
            </button>
          );
        })}
        <br />
        {facebookProfiles}
      </div>
    );
  }
}

export default FaceBook;

