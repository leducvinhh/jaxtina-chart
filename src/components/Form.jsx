import { Button, InputNumber } from "antd";
import React, { useState } from "react";
import logo from "../logo.png";

const FormInput = ({onRender}) => {
  const [class1, setClass1] = useState("");
  const [class2, setClass2] = useState("");
  const [class3, setClass3] = useState("");
  const [class4, setClass4] = useState("");
  const [class5, setClass5] = useState("");
  const [class6, setClass6] = useState("");
  const [class7, setClass7] = useState("");
  const [class8, setClass8] = useState("");

  const handleClick = () => {
    onRender([class1, class2, class3, class4, class5, class6, class7, class8]);
  }

  return (
    <div className="container">
      <div className="inner">
        <div className="report-container">
          <div className="avatar">
            <img src={logo} alt="" />
          </div>
          <div className="form-group">
            <InputNumber
              onChange={(val) => {setClass1(val)}}
              value={class1}
              placeholder="Input Class"
              size="large"
            />
          </div>
          <div className="form-group">
            <InputNumber
              onChange={(val) => setClass2(val)}
              value={class2}
              placeholder="Input Class"
              size="large"
            />
          </div>
          <div className="form-group">
            <InputNumber
              onChange={(val) => setClass3(val)}
              value={class3}
              placeholder="Input Class"
              size="large"
            />
          </div>
          <div className="form-group">
            <InputNumber
              onChange={(val) => setClass4(val)}
              value={class4}
              placeholder="Input Class"
              size="large"
            />
          </div>
          <div className="form-group">
            <InputNumber
              onChange={(val) => setClass5(val)}
              value={class5}
              placeholder="Input Class"
              size="large"
            />
          </div>
          <div className="form-group">
            <InputNumber
              onChange={(val) => setClass6(val)}
              value={class6}
              placeholder="Input Class"
              size="large"
            />
          </div>
          <div className="form-group">
            <InputNumber
              onChange={(val) => setClass7(val)}
              value={class7}
              placeholder="Input Class"
              size="large"
            />
          </div>
          <div className="form-group">
            <InputNumber
              onChange={(val) => setClass8(val)}
              value={class8}
              placeholder="Input Class"
              size="large"
            />
          </div>
          <div className="form-group">
            <Button onClick={handleClick} className="submit" type="primary">
              Create Chart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormInput;
