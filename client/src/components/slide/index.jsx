import './style.css';

const Slide = () => {
  return (
    <div id="introslide" className="carousel slide" data-bs-ride="carousel" data-bs-interval={2000}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="slide-items">
            <img src="https://www.olacabs.com/webstatic/img/fleet-image/micro.png" alt="Micro Bike" />
            <div>
              <h1 className="d-block w-100">Hourly Micro Rentals</h1>
              <h3>Perfect for Short Rides</h3>
              <p>
                Explore the city with our compact yet comfortable bikes and cars designed for short rides. Ideal for quick trips and small errands.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slide-items">
            <img src="https://www.olacabs.com/webstatic/img/fleet-image/share.png" alt="Share Bike" />
            <div>
              <h1>Hourly Share Rides</h1>
              <h3>Environmentally Friendly and Budget-Friendly</h3>
              <p>
                Enjoy fully air-conditioned bikes and cars that you can share with others based on your route and location. Budget-friendly and eco-conscious travel.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slide-items">
            <img src="https://www.olacabs.com/webstatic/img/fleet-image/prime-sedan.png" alt="Prime Sedan" />
            <div>
              <h1>Hourly Prime Sedan Rentals</h1>
              <h3>Luxurious Sedans with Free WiFi</h3>
              <p>
                Experience top-notch comfort with our prime sedan rentals. Our hand-picked fleet offers extra legroom, spacious boot, and complimentary WiFi, driven by top-rated drivers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
