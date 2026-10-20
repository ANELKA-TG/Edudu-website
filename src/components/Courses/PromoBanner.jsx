//course barner
import bannerImg from '../../assets/promo-girl.png';
import bee from '../../assets/bee.png';

const PromoBanner = () => (
  <section className="promo">
    <div className="promo__text">
      <h2>Edudu offers you a 30% discount this season</h2>
      <p>Promotion valid from May 1, 2023 - June 30, 2023</p>
      <div className="promo__action">
        <img src={bee} alt="" className="promo__bee" />
        <button className="btn-yellow">Explore now</button>
      </div>
    </div>
    <img src={bannerImg} alt="Happy student" className="promo__img" />
  </section>
);

export default PromoBanner;