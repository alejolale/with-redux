import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  light: state
});

const switchAction= { type: 'SWITCH' };

const LightComponent = ({ light, dispatch }) => (
    <div>
        <p>{light}</p>
        <button onClick={ ()=> dispatch(switchAction)}>Switch</button>
    </div>);

export default connect(mapStateToProps)(LightComponent);