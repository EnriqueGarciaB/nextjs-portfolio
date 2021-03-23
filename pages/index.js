import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences, projects } from "../utils/profile";

const Index = () => (
  <Layout>
    {/*Header card*/}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="me.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Enrique Garcia Bautista</h1>
              <h3>Front-End Developer</h3>
              <p>
                Professional with just over 2 years of experience in Mobile
                Development in hybrid technologies such as React Native; and
                Front-End Web Development with React JS technology.
              </p>
              <p>
                Excellent process analysis and optimization capability, clearly
                and timely identifying business needs with customers to deliver
                the best software solution that fits their needs. My goal is to
                belong to a company whose values, development and vision are to
                transcend and remain in high levels of success.
              </p>
              <a href="/hireme">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/*Second section*/}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage, i }) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          {" "}
          {/*h-100*/}
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experiences.map(
                ({ company, position, description, from, to }, i) => (
                  <li key={i}>
                    <h3>{company}</h3>
                    <h4>{position}</h4>
                    <h5>
                      {from} - {to}
                    </h5>
                    <p>{description}</p>
                  </li>
                )
              )}
            </ul>
            {/*<Link href="/experiences">
              <a className="btn btn-light">Know More</a>
                </Link>*/}
          </div>
        </div>
      </div>
    </div>

    {/*Portfolio section*/}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${image}`} alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="#!">Know More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light">More Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
