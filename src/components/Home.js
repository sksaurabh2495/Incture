import React, { Component } from 'react';
import './Home.css';
import pic1 from './../imgs/CPG_illustration.png'
import pic6 from './../imgs/pic6.png'
import pic7 from './../imgs/pic7.png'
import cpgicon1 from './../imgs/cpgicon1.png'
import cpgicon2 from './../imgs/cpgicon2.png'
import cpgicon3 from './../imgs/cpgicon3.png'
import cpgicon4 from './../imgs/cpgicon4.png'
import cpg_icon1 from './../imgs/cpg icon1.png'
import cpg_icon2 from './../imgs/cpg icon2.png'
import cpg_icon3 from './../imgs/cpg icon3.png'

class Home extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {

  }

  render() {

    return (
      <>
      <div className="first-container second-container">
          <div className="itm">   <div className="t1">Moving forward with technology to build intelligent consumer products. </div>
                                  <br></br>
                                  <div className="t2">Creating exceptional digital experiences and accelerating opeartional excellence to deliver value to your costumers.</div>
                                  <br></br>
                                  <button className="bl-btn">Request Consultation</button>
          </div>
          <div className="itm">
            <img className="pc1" src={pic1} />
          </div>
        </div>
        <h4 className="title">Reimagining Business</h4>
        <div className="first-container">
        <table className="table">
<tr className="trh">
  <th>eCommerceDisruption</th>
  <th>Alpha Innovators</th>
  <th>Well-Informed Customers</th>
</tr>
<tr className="tr1">
  <td>Change in buyers trends, expectations and experiences.</td>
  <td>Change in buyers trends, expectations and experiences.</td>
  <td>Change in buyers trends, expectations and experiences.</td>
</tr>
<tr className="tr1">
<td>Personalization of consumer products in line with buyer petterns.</td>
<td>Personalization of consumer products in line with buyer petterns.</td>
<td>Personalization of consumer products in line with buyer petterns.</td>
</tr>
<tr className="tr1">
<td>Knowledgeable consumer has created ecompetetive ecosystem.</td>
<td>Knowledgeable consumer has created ecompetetive ecosystem.</td>
<td>Knowledgeable consumer has created ecompetetive ecosystem.</td>
</tr>
</table>
        </div>

        <div className="our-service second-container">
          <div className="itm t1">OUR SERVICE IS CUSTOMER EXPERIENCE</div>
          <div className="itm">
            <div className="b1">
              <div className="second-container">
                <div className="itm">
                  <img className="sImg" src={cpgicon1} />
                  <div className="stitle">Fueling Business Processess</div>
                  <p className="stext">Embeded in cloud applications and suites to help benefit from all business processess and achieve a competitive edge</p>
                </div>
                <div className="itm">
                  <img className="sImg" src={cpgicon2} />
                  <div className="stitle">Holistics Business And Technology Applicatons</div>
                  <p className="stext">Management, analysis, and scaling of data , Application of development and itegration, Embeded technologies to provide data to value, Assimilation of measurable customers KPIs</p>
                </div>
              </div>
            </div>
            <div className="b1">
            <div className="second-container">
              <div className="itm">
                <img className="sImg" src={cpgicon3} />
                <div className="stitle">Rapid Implementation and Value Creation</div>
                <p className="stext">Faster time-to-market, reduced repayment period, optimized resources for funding high value projects, monetized assets & liabilities</p>
              </div>
              <div className="itm">
                <img className="sImg" src={cpgicon4} />
                <div className="stitle">Multi-Cloud Adaptibility</div>
                <p className="stext">Collaboration of scalable cloud environments provides flexibility and personalizations to customers</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="title">Digital Experiences To Tranform Your Consumer Products</div>
        <div className="second-container">
          <div className="itm dig-exp">
          <img className="cir-img" src={cpg_icon1} />
          <div className="cir-text">Competing as an ecosystem</div>
          </div>
          <div className="itm dig-exp">
          <img className="cir-img" src={cpg_icon2} />
          <div className="cir-text">Delivering personilized outcomes</div>
          </div>
          <div className="itm dig-exp">
          <img className="cir-img" src={cpg_icon3} />
          <div className="cir-text">Enabling new business models</div>
          </div>
        </div>
        <div className="ta-center">
          <button className="bl-btn">View More</button>
        </div>

        <div className="our-service">
        <div className="second-container">
          <div className="itm t2">
            <img className="oImg" src={pic7} />
            <div className="ot2">Proof of Delivery</div>
          </div>
          <div className="itm t2">
            <img className="oImg" src={pic7} />
            <div className="ot2">In-Store perishable management</div>
          </div>
          <div className="itm t2">
            <img className="oImg" src={pic7} />
            <div className="ot2">Accounts payable automation</div>
          </div>
          <div className="itm t2">
            <img className="oImg" src={pic7} />
            <div className="ot2">Returns & Refunds management</div>
          </div>
          <div className="itm t2">
            <img className="oImg" src={pic7} />
            <div className="ot2">Collaborative order management</div>
          </div>
          </div>
          <div className="ta-center">
            <button className="bl-btn">Learn How</button>
          </div>
          </div>

          <div className="first-container">
          <div className="title">Digital Experiences To Transform Your Consumer Products</div>
          <div className="subline">Product Development</div>
          <div className="second-container">
            <div  className="itm">
              <img className="car-img" src={pic6} />
            </div>
            <div  className="itm t3">
              <div className="th">Product Innovation</div>
              <div className="tc">Capture real world evidence , device data and use customer interactions to develop new products.</div>
              <div className="th">Product Innovation</div>
              <div className="tc">Capture real world evidence , device data and use customer interactions to develop new products.</div>
              <div className="th">Product Innovation</div>
              <div className="tc">Capture real world evidence , device data and use customer interactions to develop new products.</div>
              <div className="th">Product Innovation</div>
              <div className="tc">Capture real world evidence , device data and use customer interactions to develop new products.</div>
            </div>
          </div>
          </div>
          <div className="con-banner">Plan your path forward with Incture, We halp you identify key improvemnet opportunities and develop a digital transformation plan. Sign up for our data value workshop today.
          <div className="ta-center">
            <button className="bl-btn2">CLICK HERE</button>
          </div>
          </div>
        </>
    );
  }
}

export default Home
