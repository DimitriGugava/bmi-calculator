import "./Main.css";
import bodymassicone from "../icons/bodymassicone.svg";

function Main() {
  return (
    <div className="Main_Container">
      <div className="Main_Container_UpperPart">
        <div className="Main_Container_UpperPart_Bodymassicone">
          <img src={bodymassicone} />
        </div>
        <div className="Main_Container_BodyMass_Text_Box">
          <h1 className="Main_Container_UpperPart_Header_Text">
            Body Mass Index Calculator
          </h1>
          <a className="Main_Container_UpperPart_Second_Text">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </a>
        </div>
        <div className="bmi_Calculator_Box">
          <h1 className="bmi_Calculator_Header_Text">
            Enter your details below
          </h1>
          <div className="bmi_Calculator_Metrics_Imperial_Box">
            <div className="bmi_Calculator_Metrics_Box">
              <input
                type="checkbox"
                className="bmi_Calculator_Metric_Selector"
              />
              <h1 className="bmi_Calculator_Metric_Selector_Text">Metric</h1>
            </div>
            <div className="bmi_Calculator_Imperial_Box">
              <input
                type="checkbox"
                className="bmi_Calculator_Imperial_Selector"
              />
              <h1 className="bmi_Calculator_Imperial_Selector_Text">
                Imperial
              </h1>
            </div>
          </div>
          <div className="metric_Height_Weight_Indicator_Box">
            <div className="height_Metric_Box">
              <a className="height_Metric_Box_Header">Height</a>
              <div className="height_Metric_Box_Cm_box">
                <a className="height_Metric_Box_Cm_Indicator">185</a>
                <a className="height_Metric_Box_Cm_Text">cm</a>
              </div>
            </div>
          </div>
          <div className="metric_Height_Weight_Indicator_second_Box">
            <div className="weight_Metric_Box">
              <a className="weight_Metric_Box_Header">Height</a>
              <div className="weight_Metric_Box_Cm_box">
                <a className="weight_Metric_Box_Cm_Indicator">80</a>
                <a className="weight_Metric_Box_Cm_Text">kg</a>
              </div>
            </div>
          </div>
          <div className="bmi_Result_Box">
            <div className="bmi_Result_Box_Number_Box">
              <a className="bmi_Result_Box_Header_text">Your BMI is...</a>
              <a className="bmi_Result_Box_Number_text">23.4</a>
              <a className="bmi_Result_Box_Secondary_Text">
                Your BMI suggests you’re a healthy weight. Your ideal weight is
                between 63.3kgs - 85.2kgs.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
