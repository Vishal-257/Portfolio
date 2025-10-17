export const Projects = [
  {
    description: "ReactJs, PostgreSQL, ExpressJs",
    title: "Quiz App",
    src: "/componentsAssests/Quiz_App.png",
    ctaText: "Go to Github",
    ctaLink: "",
    content: () => {
      return (
        <p>
          This is a Country-Capital Quiz Project. Built using ReactJs, Express, JavaScript and PostgreSQL. In this the user will be given a random country and the user has to answer correct capital to gain score. If the use fails to correctly answer, the score will be reset to 0 and the user will have to restart the quiz. This website has not been hosted, You can refer the Github Repository.
        </p>
      );
    },
  },
  {
    description: "API, Axios, JavaScript",
    title: "Weather App",
    src: "/componentsAssests/Weather_App.png",
    ctaText: "Play",
    ctaLink: "https://github.com/Vishal-257/Weather_App",
    content: () => {
      return (
        <p>
          This is a Weather App. This project was built using React, Express, Axios, and API. In this the user passes the place name, which then sends a GET request to the API respectively and renders the necessary details from the response recieved. The main objective of this project was to demonstrate and understand the proper use of API and HTTP requests.
        </p>
      );
    },
  },

  {
    description: "API, Axios, CRUD, JavaScript",
    title: "Blog App",
    src: "/componentsAssests/Blog_App.png",
    ctaText: "Play",
    ctaLink: "https://github.com/Vishal-257/Blog_App_Using_OwnAPI",
    content: () => {
      return (
        <p>
          This is a Blog App. In this project I built an API which takes request and gives the response in the JSON format. This data is then rendered on the client side based on the user request, it also performs Create, Read, Update and Delete function based on the user request.
        </p>
      );
    },
  },
];
