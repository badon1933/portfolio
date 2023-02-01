const Home = () => {
  return (

    <section id="home" className="container">
      <div className="row align-items-center" style={{ height: "inherit" }}>
        <article className="col-lg-6" id="profile">
          <h1>Hi, I'm Firdaus</h1>
          <h2 className="fs-5">Bachelor of Informatics</h2>
          <p>
            Berpengalaman dalam bidang Web Development dan IT Infrastructure,
            memberikan layanan yang terbaik.
          </p>
          <a className="btn btn-primary">Contact me</a>
        </article>
        <section id="profile-image" className="col-lg text-center">
          <img src={process.env.PUBLIC_URL + "/me.png"} className="img-fluid" alt="profile-image" />
        </section>
      </div>
    </section>

  );
}
export default Home;