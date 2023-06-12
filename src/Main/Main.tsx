import "./Main.css";
import bodymassicone from "../icons/bodymassicone.svg";
import { useState } from "react";
import { useEffect } from "react";
import image from "../icons/image.svg";
import image2 from "../icons/image2.svg";
import image3 from "../icons/image3.svg";
import image4 from "../icons/image4.svg";
import image5 from "../icons/image5.svg";
import image6 from "../icons/image6.svg";
import image7 from "../icons/image7.svg";
import image8 from "../icons/image8.svg";
import image9 from "../icons/image9.svg";
function Main() {
  const [measurementSystem, setMeasurementSystem] = useState("metric");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [stones, setStones] = useState(0);
  const [pounds, setPounds] = useState(0);
  const [btwKg, setBtwKg] = useState(0);
  const [btwLbs, setBtwLbs] = useState(0);

  const handleSystemChange = (event: any) => {
    setMeasurementSystem(event.target.value);
  };

  const readCM = (event: any) => {
    console.log(event.target.value);
    setHeight(event.target.value);
  };

  const readWeight = (event: any) => {
    console.log(event.target.value);
    setWeight(event.target.value);
  };

  const readFeet = (event: any) => {
    console.log(event.target.value);
    setFeet(event.target.value);
  };

  const readInches = (event: any) => {
    console.log(event.target.value);
    setInches(event.target.value);
  };

  const readStones = (event: any) => {
    console.log(event.target.value);
    setStones(event.target.value);
  };

  const readPounds = (event: any) => {
    console.log(event.target.value);
    setPounds(event.target.value);
  };

  const calculateBMI = () => {
    if (measurementSystem === "metric") {
      const heightInMeters = height / 100;
      setBmi(Math.round(weight / (heightInMeters * heightInMeters)));
      setBtwKg(Math.round(weight - bmi));
    } else {
      const totalHeightInInches = feet * 12 + inches;
      const totalWeightInPounds = stones * 14 + pounds;
      setBmi(
        Math.round(
          (totalWeightInPounds / (totalHeightInInches * totalHeightInInches)) *
            703
        )
      );
    }
  };

  useEffect(() => {
    calculateBMI();
  }, [height, weight, feet, inches, stones, pounds]);

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
                type="radio"
                value="metric"
                checked={measurementSystem === "metric"}
                onChange={handleSystemChange}
                className="bmi_Calculator_Metric_Selector"
              />
              <h1 className="bmi_Calculator_Metric_Selector_Text">Metric</h1>
            </div>
            <div className="bmi_Calculator_Imperial_Box">
              <input
                type="radio"
                value="imperial"
                checked={measurementSystem === "imperial"}
                onChange={handleSystemChange}
                className="bmi_Calculator_Imperial_Selector"
              />
              <h1 className="bmi_Calculator_Imperial_Selector_Text">
                Imperial
              </h1>
            </div>
          </div>

          {measurementSystem === "metric" ? (
            <>
              <div className="metric_Height_Weight_Indicator_Box">
                <div className="height_Metric_Box">
                  <a className="height_Metric_Box_Header">Height</a>
                  <div className="height_Metric_Box_Cm_box">
                    <input
                      className="height_Metric_Box_Cm_Indicator"
                      type="number"
                      onChange={readCM}
                    />
                    <a className="height_Metric_Box_Cm_Text">cm</a>
                  </div>
                </div>
              </div>
              <div className="metric_Height_Weight_Indicator_second_Box">
                <div className="weight_Metric_Box">
                  <a className="weight_Metric_Box_Header">Weight</a>
                  <div className="weight_Metric_Box_Cm_box">
                    <input
                      className="weight_Metric_Box_Cm_Indicator"
                      type="number"
                      onChange={readWeight}
                    />
                    <a className="weight_Metric_Box_Cm_Text">kg</a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="imperial_Height_Weight_Indicator_Box">
              <div className="imperial_Height_first_Box">
                <a className="imperial_Height_first_Box_Height_Header_Text">
                  Height
                </a>
                <div className="ft_In_Box">
                  <div className="imperial_Height_First_Box_Feet_Box">
                    <input
                      className="feet_Number"
                      type="number"
                      placeholder="0"
                      onChange={readFeet}
                    />
                    <a className="feet_Text">ft</a>
                  </div>
                  <div className="imperial_Height_Second_Box_Feet_Box">
                    <input
                      className="in_Number"
                      type="number"
                      placeholder="0"
                      onChange={readInches}
                    />
                    <a className="in_Text">in</a>
                  </div>
                </div>
              </div>
              <div className="imperial_Weight_Second_Box">
                <a className="imperial_Weight_Second_Box_Weight_Header_Text">
                  Weight
                </a>
                <div className="st_Ibs_Box">
                  <div className="imperial_Weight_Second_Box_st_Box">
                    <input
                      className="st_Number"
                      type="number"
                      placeholder="0"
                      onChange={readStones}
                    />
                    <a className="st_Text">st</a>
                  </div>
                  <div className="imperial_Ibs_Second_Box_Feet_Box">
                    <input
                      className="ibs_Number"
                      type="number"
                      placeholder="0"
                      onChange={readPounds}
                    />
                    <a className="ibs_Text">Ibs</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="bmi_Result_Box">
            <div className="bmi_Result_Box_Number_Box">
              <a className="bmi_Result_Box_Header_text">Your BMI is...</a>
              <a className="bmi_Result_Box_Number_text" placeholder="0">
                {bmi}
              </a>
              {measurementSystem === "metric" ? (
                <a className="bmi_Result_Box_Secondary_Text">
                  Your BMI suggests you’re a healthy weight. Your ideal weight
                  is between {btwKg} - 85.2kgs.
                </a>
              ) : (
                <a className="bmi_Result_Box_Secondary_Text">
                  Your BMI suggests you’re a healthy weight. Your ideal weight
                  is between 140lbs - 188lbs.
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="meaning_Of_Bmi_box">
          <img className="meaning_Of_Bmi_Image" src={image} />
          <div className="meaning_Of_Bmi_Text_Box">
            <h1 className="meaning_Of_Bmi_Header_Text">
              What your BMI result means
            </h1>
            <a className="meaning_Of_Bmi_Secondary_Text">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </a>
          </div>
        </div>
        <div className="meaningOfBmi">
          <div className="imageContainer">
            <img src={image2} className="icons" />
            <div className="textContent">
              <h1 className="headerText">Healthy eating</h1>
              <p className="paragraphText">
                Healthy eating promotes weight control, disease prevention,
                better digestion, immunity, mental clarity, and mood.
              </p>
            </div>
          </div>
          <div className="imageContainer">
            <img src={image3} className="icons" />
            <div className="textContent">
              <h1 className="headerText">Regular exercise</h1>
              <p className="paragraphText">
                Exercise improves fitness, aids weight control, elevates mood,
                and reduces disease risk, fostering wellness and longevity.
              </p>
            </div>
          </div>
          <div className="imageContainer">
            <img src={image4} className="icons" />
            <div className="textContent">
              <h1 className="headerText">Adequate sleep</h1>
              <p className="paragraphText">
                Sleep enhances mental clarity, emotional stability, and physical
                wellness, promoting overall restoration and rejuvenation.
              </p>
            </div>
          </div>
        </div>
        <div className="limitation_Box">
          <div className="limitation_Box_Header">
            <h1 className="limitation_Box_Header_Text">Limitations of BMI</h1>
            <a className="limitation_Box_Explanation_Text">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </a>
          </div>
          <div className="limitation_Box_Factors_Box">
            <div className="limitation_Box_Factors_list_Box">
              <div className="limitation_Box_Factors_Header_Box">
                <img src={image5} className="icons2" />
                <h2 className="limitation_Box_Factors_Header_Text">Gender</h2>
              </div>
              <a className="limitation_Box_Factors_Content">
                The development and body fat composition of girls and boys vary
                with age. Consequently, a child's age and gender are considered
                when evaluating their BMI.
              </a>
            </div>
            <div className="limitation_Box_Factors_list_Box">
              <div className="limitation_Box_Factors_Header_Box">
                <img src={image6} className="icons2" />
                <h2 className="limitation_Box_Factors_Header_Text">Age</h2>
              </div>
              <a className="limitation_Box_Factors_Content">
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </a>
            </div>
            <div className="limitation_Box_Factors_list_Box">
              <div className="limitation_Box_Factors_Header_Box">
                <img src={image7} className="icons2" />
                <h2 className="limitation_Box_Factors_Header_Text">Muscle</h2>
              </div>
              <a className="limitation_Box_Factors_Content">
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn't differentiate muscle from fat.
              </a>
            </div>
            <div className="limitation_Box_Factors_list_Box">
              <div className="limitation_Box_Factors_Header_Box">
                <img src={image8} className="icons2" />
                <h2 className="limitation_Box_Factors_Header_Text">
                  Pregnancy
                </h2>
              </div>
              <a className="limitation_Box_Factors_Content">
                Expectant mothers experience weight gain due to their growing
                baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                minimise health risks for both mother and child.
              </a>
            </div>
            <div className="limitation_Box_Factors_list_Box">
              <div className="limitation_Box_Factors_Header_Box">
                <img src={image9} className="icons2" />
                <h2 className="limitation_Box_Factors_Header_Text">Race</h2>
              </div>
              <a className="limitation_Box_Factors_Content">
                Certain health concerns may affect individuals of some Black and
                Asian origins at lower BMIs than others. To learn more, it is
                advised to discuss this with your GP or practice nurse.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
