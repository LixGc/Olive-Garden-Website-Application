import { Link, useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const navigateToMenu = (e) => {
    e.preventDefault();
    navigate("/menu");
  };

  return (
    <div>
      <div className="inside-video-text">
        <h1 className="text-medium">
          THE COMFORT
          <br />
          YOU CRAVE
        </h1>

        <video
          className="video"
          preload="auto"
          autoPlay
          playsInline
          muted
          poster="noposter"
          src="https://media.olivegarden.com/images/site/ext/pages/_promotions/video/mobile_OGcomREV_Part5_1.mp4"
          loop></video>
        <Link to={"/menu"}>
          <button className="styled-button">ORDER NOW</button>
        </Link>
      </div>

      <section className="banner">
        <div className="image-container">
          <img src="/bannerr.jpg" alt="" />
          <div className="content-container">
            <div className="button-container">
              <button onClick={navigateToMenu} className="styled-button-2">
                LEARN MORE
              </button>
            </div>
            <div className="text-container">
              <span className="span-banner">Limited time only. Prices and availability may vary in certain locations. Available dine-in only.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="image-container2">
          <img style={{ height: "75vh" }} src="/banner2.jpg" alt="" />
          <div className="content-container">
            <h1 style={{ whiteSpace: "nowrap" }} className="text-medium2">
              ENJOY OUR
              <br />
              EVERYDAY DAY SPECIALS
            </h1>
            <div className="text-container2">
              <span className="span-banner">
                Family-Style Meals · Wine Bottles To Go* · $6 Take Homes* ·
                <br />
                Lunch-Sized Favorites · Italian-Inspired Cocktails
              </span>
            </div>
            <div className="button-container">
              <button onClick={navigateToMenu} className="styled-button-2">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section><br />

      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>
        <div className="row">
          <div className="image">
            <img src="about.jpg" alt="" />
          </div>
          <div className="content">
            <h3>
              good things come to those <span>who serves </span> for others
            </h3>
            <p>Olive Garden is one of the top casual dining restaurant chains based in the United States specializing in Italian cuisine.</p>
            <p>
              A casual dining restaurant comes under the full service dining category and is typically described as an establishment that offers table
              service and moderately priced food in a casual environment.
            </p>
          </div>
        </div>
      </section><br /><br />
    </div>
  );
};
