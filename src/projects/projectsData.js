import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";
import projectFive from "../assets/project-5.png";
const projects = {
  1: {
    title: "House Booking",
    image: projectOne,
    description: (
      <>
        <p>
          House Booking is a user-friendly application designed to simplify and
          streamline the process of booking residential accommodations.
        </p>
      </>
    ),
    github: "https://github.com/ValeriaSarazhinska/house-booking-app",
  },
  2: {
    title: "Wallet",
    image: projectTwo,
    description: (
      <>
        <p>
          Application for managing for your finance. Development section
          statistics
        </p>
      </>
    ),
    github: "https://github.com/ValeriaSarazhinska/wallet",
    demo: "https://valeriasarazhinska.github.io/wallet",
  },
  3: {
    title: "Hangman-game",
    image: projectThree,
    description: (
      <>
        <p>Guess letters one at a time to solve the word puzzle</p>
      </>
    ),
    github: "https://github.com/ValeriaSarazhinska/hangman-game",
    demo: "https://valeriasarazhinska.github.io/hangman-game/",
  },
  4: {
    title: "Currency-converter",
    image: projectFour,
    description: (
      <>
        <p>Calculate live currency and foreign exchange rates</p>
      </>
    ),
    github: "https://github.com/ValeriaSarazhinska/currency-converter",
    demo: "https://valeriasarazhinska.github.io/currency-converter/",
  },
  5: {
    title: "Filmoteka",
    image: projectFive,
    description: (
      <>
        <p>
          Site for movie search. Develop footer, animation, modal windows,
          button-up, filter by genres and pagination
        </p>
      </>
    ),
    github: "https://github.com/ValeriaSarazhinska/filmoteka",
    demo: "https://valeriasarazhinska.github.io/filmoteka/",
  },
};
export default projects;
