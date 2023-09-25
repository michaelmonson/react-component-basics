import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import jsxImage from "./assets/images/jsx-scripting.png"
import reactNativeImage from "./assets/images/react_native.png"

import Header from "./components/Header";
import Concept from "./components/Concept";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
  {
    title: "JSX",
    image: jsxImage,
    description:
      "Stands for 'JavaScript XML,' but it is also called 'JavaScript Syntax Extension.'  JSX lets you write HTML-like markup within a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX.",
  },
  {
    title: "React Native",
    image: reactNativeImage,
    description:
      "React primitives render to native platform UI, meaning your app uses the same native platform APIs other apps do.  React Native is an open-source UI software framework. It is used to develop apps for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP.",
  },  
];

function App() {
  return (
    <div>
      <Header />
      <ul id="concepts">
        <Concept
          image={concepts[0].image}
          title={concepts[0].title}
          description={concepts[0].description}
        />
        <Concept
          image={concepts[1].image}
          title={concepts[1].title}
          description={concepts[1].description}
        />
        <Concept
          image={concepts[2].image}
          title={concepts[2].title}
          description={concepts[2].description}
        />
        <Concept
          image={concepts[3].image}
          title={concepts[3].title}
          description={concepts[3].description}
        />
        <Concept
          image={concepts[4].image}
          title={concepts[4].title}
          description={concepts[4].description}
        />
      </ul>
    </div>
  );
}

export default App;
