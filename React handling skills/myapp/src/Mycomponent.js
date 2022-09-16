import React, { Component } from "react";
import PropTypes from "prop-types";

class Mycomponent extends Component {
  static default = {
    name: "기본 이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props; //비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. 안녕하세요, children {children}
        입니다. 제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

export default Mycomponent;
