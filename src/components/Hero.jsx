import heroImg from '../assets/page1-schoolgirl.png'

const Hero = () => {
  return (
      <section className="hero">
      <div className="hero__text">
        <h1>
          Knowledge Connection
          <br />
          <strong>Open the Door to the Future</strong>
        </h1>
        <p>
          Giving every student the opportunity to access the best education and
          open the door to the world of knowledge.
          <br />
          Start your learning journey today with Edudu to become an outstanding
          student in our learning community.
        </p>
        <button className="btn-yellow">Get started !</button>
      </div>

      <div className="hero__image">
        <img src={heroImg} alt="Girl reading a book" />
      </div>
    </section>
    
  )
}

export default Hero