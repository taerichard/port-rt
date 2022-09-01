import photoPointsImage from "../../images/work/work-1.jpg";
import getGrubImage from "../../images/work/work-2.jpg";
export const ProjectData = [
  {
    id: 1,
    title: `Photo-Points`,
    description:
      "I created an application for Bothell North Creek Forest administrators and customers to upload nature photos to interact. My role was to display UI elements from the backend, creating API controllers, and managing the data access layers. ",
    imageSrc: photoPointsImage,
    role: "Full Stack Developer",
    technology: "Razor, DotNetCore, MSSQL",
  },
  {
    id: 2,
    title: "Get-Grub",
    description:
      "This is a Mobile Application that uses Yelp's business API to search restaurants from the user's location. My role was to develop the front-end with CSS and request Yelp's business API endpoints to display restaurant information in the UI. ",
    imageSrc: getGrubImage,
    role: "Fuck Stack Developer",
    technology: "React Native, CSS",
  },
];
