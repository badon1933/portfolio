const Skills = () => {
  return (

    <section id="skills" className="container">
      <div className="text-center" style={{ height: "15vh" }}>
        <h1>Skills</h1>
        <p>Current Technical Skills</p>
      </div>
      <div className="row g-3 justify-content-center overflow-y-auto pb-3" style={{ height: "75vh" }}>

        <div className="col-lg-3">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <img src={process.env.PUBLIC_URL + "/logo/html.png"} className="img-fluid" alt="html-logo" />
              <h1 className="fs-5">HTML</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <img src={process.env.PUBLIC_URL + "/logo/css.png"} className="img-fluid" alt="css-logo" />
              <h1 className="fs-5">CSS</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <img src={process.env.PUBLIC_URL + "/logo/javascript.png"} className="img-fluid" alt="javascript-logo" />
              <h1 className="fs-5">JavaScript</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <img src={process.env.PUBLIC_URL + "/logo/json.png"} className="img-fluid" alt="json-logo" />
              <h1 className="fs-5">JSON</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <img src={process.env.PUBLIC_URL + "/logo/php.png"} className="img-fluid" alt="php-logo" />
              <h1 className="fs-5">PHP</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <img src={process.env.PUBLIC_URL + "/logo/codeigniter.png"} className="img-fluid" alt="codeigniter-logo" />
              <h1 className="fs-5">CodeIgniter</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <img src={process.env.PUBLIC_URL + "/logo/react.png"} className="img-fluid" alt="react-logo" />
              <h1 className="fs-5">ReactJS</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <img src={process.env.PUBLIC_URL + "/logo/bootstrap.svg"} className="img-fluid" alt="bootstrap-logo" />
              <h1 className="fs-5">Bootstrap</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <img src={process.env.PUBLIC_URL + "/logo/api.png"} className="img-fluid" alt="api-logo" />
              <h1 className="fs-5">RESTful API</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <img src={process.env.PUBLIC_URL + "/logo/mysql.png"} className="img-fluid" alt="mysql-logo" />
              <h1 className="fs-5">MySQL</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <img src={process.env.PUBLIC_URL + "/logo/git.png"} className="img-fluid" alt="git-logo" />
              <h1 className="fs-5">Git</h1>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
}
export default Skills;