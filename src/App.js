import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-heading">
          <h1>HAPPY BIRTHDAY</h1>
        </div>
        <div className="app-content">
          <div className="app-content__head">
            <h2>Here are 9 interesting facts about August-born Babies</h2>
          </div>
          <div className="cards">
            <Card
              title="They are very Confident"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam."
            />
            <Card
              title="They are very Organized"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam."
            />
          </div>
          <div className="cards">
            <Card
              title="They Tend to Make Good Leaders"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam."
            />
            <Card
              title="They have an outgoing personality"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam."
            />
          </div>
          <div className="cards">
            <Card
              title="They love being treated like Royalty"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam."
            />
            <Card
              title="They tend to prefer solitude"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam."
            />
          </div>
          <div className="cards">
            <Card
              title="They are not easily impressed"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam."
            />
            <Card
              title="They can be stubbern"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam."
            />
          </div>
          <div className="cards">
            <Card
              title="They are highly motivated"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
