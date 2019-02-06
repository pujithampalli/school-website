import React from 'react';
import '../styles/App.scss';
import '../styles/about.scss';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

// The Main component renders one of the three provided

class About extends React.Component {
  render() {
    return (<PerfectScrollbar>
      <div className="about">
        <p className="sub-heading">Play School Overview</p>
        <p>
        Our aim is to create a happy and stimulating environment where a restless child is molded into an all rounder, who can use his five senses effectively by enjoying and acquiring new knowledge. RAINBOW  lays a solid foundation for their future. The grooming starts from day one and over the days, witness how your child moves from dependence to independence from shaking coordination to refined skills, from body language to verbal communication. At RAINBOW the curriculum and activities is designed where your child can grow & learn in a holistic environment.
Our motto is:<br/><br/> &nbsp;&nbsp;&nbsp; 'WE STAND BY WHAT WE SAY !'
        </p>
        <p>
          Playway method of learning is a child-centric method where the method of teaching is informal and natural to suit the child’s interests. Our belief learning is best through play activities.</p>
        <p>
          We make teaching more lively and interesting. We teach languages, mathematics, social studies etc through a series of activities like games, songs, free play, gardening, construction activities etc. The learning is not just limited to cognitive development, but also for the overall development of the child. A few methods and techniques included in this method are Role plays, Projects; Theme based learning, Field trips, Puppetry etc.</p>
        <p>
          At our schools we also follow some level of formal learning as well, to ensure that the child is ready for the primary education.</p>
        <p>Your child will receive complete freedom of expression and we will mold them into beautiful young minds, which have a keen interest in knowing about things, and how do they work through entertaining activities, sports, numerical, alphabet studies and a lot more to weld in a creative world.</p>
        <p className="sub-heading">
          Franchise Overview
        </p>
        <h5>
          Preschool Industry
        </h5>
        <p>
          The Preschool Industry in India is booming like never before. This Industry has witnessed significant developments which resultantly have attracted heavy investments from corporate sector. According to Industry reports, the Indian preschool Industry will be a whopping USD 3.25 Billions with a Compounded Annual Growth Rate (CAGR) of 27% by 2017. The fact that this Industry operates under limited regulatory framework and minimal infrastructural requirements has ensured a mammoth rise in both the number of Preschools as well as the number of enrollments in these schools.
        </p>
        <h5>
          Opportunity
        </h5>
        <p>
        Opening Pre-School needs a very low investment and guarantees high returns. Because of the importance attached to Education by parents this is a recession free business.
Operating Preschool is perceived as a very noble endeavor and also gives tremendous work satisfaction. Due to flexible working hours, there is a perfect work – life balance.

The Preschool property can be used for other meaningful purposes post the Preschool hours thus giving greater returns.</p>
        <h5>
          Advantages
        </h5>
        <p>
          1. Preschools typically cater to children from 1.5- 6yrs and is a mammoth Rs. 5000 crore industry growing at a robust 20% CAGR
        </p>
        <p>2. It is a recession-proof industry.It requires minimal investment.</p>
        <p>3. It requires no inventory.</p>
      </div>
      </PerfectScrollbar>
    );
  }
}

export default About;
