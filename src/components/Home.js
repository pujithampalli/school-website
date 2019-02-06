import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.aboutUsTabId = 2;
    this.productsTabId = 3;
  }

  setActiveTab(id) {
    this.props.updateMainNavId(id);
  }

  render() {
    return (
      <div className="home">
        <div className="carousel-container">
          <Carousel autoPlay showArrows={false} infiniteLoop={true} showStatus={false} centerMode={false} showThumbs={false}>
              <div>
                  <img className="c-img" src={c1} alt="Play School-1"/>
              </div>
              <div>
                  <img className="c-img" src={c2}  alt="Play School-2"/>
              </div>
              <div>
                  <img className="c-img" src={c3}  alt="Play School-3"/>
              </div>
              <div>
                  <img className="c-img" src={c4}  alt="Play School-4"/>
              </div>
          </Carousel>
        </div>
        <div className="product-links">
          <div>
            Overview
          </div>
          <div className="thumbnails" onClick={ () => this.setActiveTab(this.productsTabId) }>
            <Link to="/home/vision">
              <div>
                <p>Vision</p>
                <div>
                  <img className="c-img" src={require("../images/mango.jpg")}  alt="Vision"/>
                </div>
              </div>
            </Link>
            <Link to="/home/mission">
              <div>
                <p>Mission</p>
                <div>
                  <img className="c-img" src={require("../images/papaya-1.jpg")}  alt="Mission"/>
                </div>
              </div>
            </Link>
            <Link to="/home/methodology">
              <div>
                <p>Methodology</p>
                <div>
                  <img className="c-img" src={require("../images/methodology.jpg")}  alt="Methodology"/>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <article>
          <p><strong>Play-School</strong>  program is designed for children between 1.5 to 2.5 years of age. We encourage children to develop unique skills, interests, and strengths by introducing them to various activities that include puppet shows, cartoon shows, sand play, coloring, scribbling, etc.</p>
          <p>Kids are introduced to group reading, writing, finger plays, singing, yoga sessions, puppets, poems, rhyming, dance classes and more. Our curriculum is based on encouraging mental and physical development with active participation in basic skills such as alphabet mastery, coloring, and more. <Link to='/about' onClick={ () => this.setActiveTab(this.aboutUsTabId) }>Read more..</Link></p>
        </article>
      </div>
    )
  }
}

export default Home
