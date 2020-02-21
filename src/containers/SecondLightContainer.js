import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  secondLight: state
});

const SecondLightComponent = ({ secondLight }) => <div>{secondLight}</div>;

export default connect(mapStateToProps)(SecondLightComponent);