import React, { useState, useEffect } from "react";
import { constants } from "../../helpers/Constants";

import Input from "../Input/Input";

import "./ShiftCard.scss";

const ShiftCard = ({ data }) => {
  const [startTime, setStartTime] = useState({ hour: "8", min: "30" });
  const [endTime, setEndTime] = useState({ hour: "18", min: "0" });
  const [holiday, setHoliday] = useState(false);
  const [save, setSave] = useState(true);

  useEffect(() => {
    controlInputs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTime, endTime, holiday]);

  const handleSave = () => {
    data.startTime = startTime;
    data.endTime = endTime;
    data.isHoliday = holiday;
    controlInputs();
  };

  const controlInputs = () => {
    if (
      data.startTime.hour !== startTime.hour ||
      data.startTime.min !== startTime.min ||
      data.endTime.hour !== endTime.hour ||
      data.endTime.min !== endTime.min ||
      data.isHoliday !== holiday
    ) {
      setSave(false);
    } else {
      setSave(true);
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setStartTime((el) => ({
      ...el,
      [name]: value,
    }));
    setEndTime((el) => ({
      ...el,
      [name]: value,
    }));
  };

  const switchOnChange = () => {
    setHoliday(!holiday);
  };

  return (
    <div className="sc-container">
      <div className="sc-main">
        <span className="sc-constant-text">{constants.day}</span>
        <span className="sc-day">{data.day}</span>
        <div className="sc-switch">
          <label className="switch">
            <input onClick={() => switchOnChange()} type="checkbox" />
            <span className="slider"></span>
          </label>
          <span className="sc-switch-text">{constants.holiday}</span>
        </div>
        <div className="sc-time">
          <div className="sc-time-text">
            <span>{constants.start_with_colon}</span>
            <span>{constants.end_with_colon}</span>
          </div>
          <div className="sc-time-clock">
            <div className="sc-time-clock-start sctsi">
              <Input
                min={0}
                max={24}
                defVal={8}
                name="hour"
                onChange={onInputChange}
              />
              <span> {constants.colon} </span>
              <Input
                min={0}
                max={59}
                defVal={30}
                name="min"
                onChange={onInputChange}
              />
            </div>
            <div className="sc-time-clock-end sctsi">
              <Input
                min={0}
                max={24}
                defVal={18}
                name="hour"
                onChange={onInputChange}
              />
              <span>{constants.colon} </span>
              <Input
                min={0}
                max={59}
                defVal={0}
                name="min"
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>
        <div className="sc-save-btn">
          <button disabled={save} onClick={() => handleSave()}>
            {constants.save}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShiftCard;
