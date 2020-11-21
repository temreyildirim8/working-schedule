import React from "react";
import { constants } from "../../helpers/Constants";

import "./WorkTime.scss";

import Input from "../Input/Input";

const WorkTime = () => {
  return (
    <div className="wt-container">
      <div className="wt-main">
        <span className="wt-title">{constants.default_working_hours}</span>
        <span className="wt-desc">{constants.settings_warning}</span>
        <div className="wt-default-time">
          <span className="wt-default-text">{constants.start_with_colon}</span>
          <Input defVal={8} min={0} max={24} />
          <span> {constants.colon} </span>
          <Input defVal={30} min={0} max={59} />
          <span className="wt-default-save-btn">{constants.save}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkTime;
