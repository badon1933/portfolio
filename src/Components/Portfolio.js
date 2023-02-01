const Portfolio = () => {
  return (

    <section id="portfolio" className="container">
      <div className="text-center" style={{ height: "15vh" }}>
        <h1>Portfolio</h1>
        <p>My Latest Projects</p>
      </div>

      <div className="overflow-y-auto pb-2" style={{ height: "75vh" }}>
        <div className="card mb-3 border-0 m-3 shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://dppai.uii.ac.id/wp-content/uploads/2019/12/cropped-Icon-DPPAI-UII.png" className="img-fluid rounded-start" alt="dppai" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Proposal Online DPPAI</h5>
                <p className="card-text">Sebuah aplikasi pengajuan proposal online yang dikhususkan untuk beberapa lembaga dakwah di bawah naungan DPPAI</p>
                <p className="card-text"><small className="text-muted">Private Project</small></p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 border-0 m-3 shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://lh3.googleusercontent.com/p/AF1QipMo5zDm445VrKf69W8477wgOKC6AaLhkL7Gln-C=s680-w680-h510" className="img-fluid rounded-start" alt="polbap" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Profile Politeknik Bhakti Asih Purwakarta</h5>
                <p className="card-text">Sebuah halaman profile Politeknik Bhakti Asih Purwakarta untuk keperluan akreditasi</p>
                <p className="card-text"><small className="text-muted"> <a href="https://polbap.ac.id/polbapac_new/public/" className="btn btn-primary" target={"_blank"}>Check it out</a> </small></p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section >

  );
}
export default Portfolio;