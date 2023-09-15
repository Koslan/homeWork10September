import  { useState,useEffect  } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { GoogleLogin } from 'react-google-login';
import CLIENT_ID from './config';
import TranslationTable from './TranslationTable';
import Footer from './Footer';  // adjust the path based on your folder structure


const b1 = {
  "translations": [
    {
      "originWord": "quest",
      "translationWord": "пошук"
    },
    {
      "originWord": "vanish",
      "translationWord": "зникати"
    },
    {
      "originWord": "defend",
      "translationWord": "захищати"
    }
  ]
};
const b2 = {
  "translations": [
    {
      "originWord": "forge",
      "translationWord": "ковати"
    },
    {
      "originWord": "dwell",
      "translationWord": "проживати"
    },
    {
      "originWord": "relentless",
      "translationWord": "невтомний"
    }
  ]
};
const c1 = {
  "translations": [
    {
      "originWord": "betray",
      "translationWord": "зраджувати"
    },
    {
      "originWord": "encompass",
      "translationWord": "охоплювати"
    },
    {
      "originWord": "ominous",
      "translationWord": "зловісний"
    }
  ]
};


const jsonMovies = [
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'Inception', year: 2010 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Avengers', year: 2012 },
];


const App = () => {
  const [currentTab, setCurrentTab] = useState(1);

  useEffect(() => {
    const currentPageUrl = window.location.href;
    const username = currentPageUrl.split("/")[2].split(".")[0];
    const repoName = currentPageUrl.split("/")[3];
    const githubRepoUrl = `https://github.com/${username}/${repoName}`;

    document.getElementById("github-link").href = githubRepoUrl;
  }, []);

  const responseGoogle = (response) => {
    console.log(response); // handle your login logic here
  };


  return (
    <div className="container-fluid p-0">
      {/* Header Block */}
      <div className="headerBlock bg-dark">
        <div className="d-flex justify-content-between">
          <h1 className='text-white'></h1>
          <div>
          <a id="github-link" href="/">
          <button>GitHub Link</button>
        </a>
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}  // Defaults to single_host_origin
        responseType='code,token'
        />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="row mainContent">
        {/* Left Navigation */}
        <div className="col-md-3 leftNav ">
          <ul className="nav flex-column">
            <li className="nav-item">
              <button className="nav-link " onClick={() => setCurrentTab(1)}>Tab 1</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => setCurrentTab(2)}>Tab 2</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => setCurrentTab(3)}>Tab 3</button>
            </li>
          </ul>
          
        </div>

        {/* Container */}
        <div className="col-md-9 container">
          {currentTab === 1 && (
            <>
              <TranslationTable data={b1} title="B1 Level" />

              <TranslationTable data={b2} title="B2 Level" />

              <TranslationTable data={c1} title="C1 Level" />
            </>
          )}
          {currentTab === 2  && (
           <>
          <h4>Movies:</h4>
          <ul>
            {jsonMovies.map((movie, index) => (
              <li key={index}>{movie.title} ({movie.year})</li>
            ))}
          </ul>
          </>
          )}
          {currentTab === 3 && <h2>Tab 3 Content</h2>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;