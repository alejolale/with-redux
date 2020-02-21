const secondLightReducer = (state = "on", action) => {
    switch(action.type) {
        case "SWITCH-SECOND":
            return state === "on" ? "off" : "on";
        default:
            return state;
    }

  };
  export default secondLightReducer;