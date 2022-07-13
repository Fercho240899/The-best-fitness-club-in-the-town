import React from "react";
import "./Plans.css";
import {plansData} from "../../data/plansData"
import RightArrow from "../../assets/rightArrow.png"
import whiteTick from "../../assets/whiteTick.png"


const Plans = () => {
  return (
    <div className="Plan-container" id="plan-container">
         {/*header*/}
      <div className="plans-header" style={{gap: '2rem'}}>
        <span className="stroke-text">Ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">Now withus</span>
      </div>


      {/*plans*/}

        <div className="plans">
        {plansData.map((plan, i) =>(
            <div className="plan" key={i}>
                {plan.icon}
                <span >{plan.name}</span>
                <span>$ {plan.price}</span>
                <div className="features">
                    {plan.features.map((feature, i) => (
                        <div className="feature"> 
                        <img src={whiteTick} alt="" />
                        <span key={i}>{feature}</span>

                        </div>
                    ))}
                </div>


                <div className="see-more-benefits">
                    <span>See more benefits</span>
                    <img src={RightArrow} alt="" />
                </div>

                <button className="btn">Join Now</button>
            </div>
        ))}
      </div>

    </div>
    
  );
};
export default Plans;
