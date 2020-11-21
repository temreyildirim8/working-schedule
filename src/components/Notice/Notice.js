import React from "react";
import { constants } from "../../helpers/Constants";

import './Notice.scss';

const Notice = () => {
  return (
    <div className="notice-container">
      <div className="notice-main">
        <i className="fas fa-info-circle notice-icon"></i>
        <span>
          {constants.authorizied_hours}
        </span>
      </div>
    </div>
  );
}

export default Notice;
