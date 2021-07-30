import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-heading">
          <h1>HAPPY BIRTHDAY</h1>
        </div>
        <div className="app-subheading">
          <h2>Welcome to your teens!</h2>
        </div>
        <div className="app-content">
          <div className="app-content__head">
            <h2>Here are 9 interesting facts about August-born Babies</h2>
          </div>
          <div className="cards">
            <Card
              title="They are very Confident"
              description="August-borns are usually very confident. Depending on the date of birth, they would either be a Leo or Virgo, and there’s a lot to like about people born under both of these signs. Leos are extremely confident. They are strong, both physically and mentally. They are strong-willed, proud, loyal, and brave. They are a bit outspoken and enjoy being the centre of attention. If your baby is August-born and his zodiac sign is Leo, you have nothing to worry about. He will grow up to be a confident individual who will be liked by all."
            />
            <Card
              title="They are very Organized"
              description="August-borns with Virgo as their zodiac sign are witty, hardworking, and practical. They have an appealing personality too. They are detail-oriented, organised, and practical. They tend to be intelligent and reliable. Your little one will grow up to be a responsible individual. His hard work and attention to detail will help him achieve his goals."
            />
          </div>
          <div className="cards">
            <Card
              title="They Tend to Make Good Leaders"
              description="August-borns are confident, organised, and practical. These are the basic qualities of a good leader. If your August-born baby grows up to be a leader or a manager in a big organisation, don’t be surprised, because he will be at that position because of his hard work and qualities. August-borns make naturally strong leaders because of their confidence and charisma."
            />
            <Card
              title="They have an outgoing personality"
              description="August-borns also have an outgoing personality. They are confident, have little self-control, but are kind-hearted. They can easily talk to people and get along with them as well. Although they love being the centre of attention, they are also empathic listeners. They make great conversationalists and tend to be daydreamers. One thing is for sure though – you will have nothing to worry about your child’s social skills."
            />
          </div>
          <div className="cards">
            <Card
              title="They love being treated like Royalty"
              description="August-born children love being treated like royalty. They are very reciprocative and giving when treated with respect and honour. They enjoy being noticed when they enter a room which they would often do quite dramatically and won’t hesitate to ask for your praise when they don’t get one.
              "
            />
            <Card
              title="They tend to prefer solitude"
              description="Although they are outgoing, August-borns tend to be private regarding sensitive issues and need me-time now and then. They also don’t open up easily to people except for the ones they are really close to and trust."
            />
          </div>
          <div className="cards">
            <Card
              title="They are not easily impressed"
              description="August-born children are selective and have high standards. They are quite conservative with their affection and one needs to make them feel special before they begin to reciprocate. Because of their high standards, not everybody can be their close friends."
            />
            <Card
              title="They can be stubbern"
              description="Being intuitive and good at reading people, August-borns are often stubborn. They think that their opinions matter the most, and surprisingly, they are right most of the times. They tend to protect their pride to stop people from seeing their sensitive side."
            />
          </div>
          <div className="cards">
            <Card
              title="They are highly motivated"
              description="August-borns are self-motivated and can overcome difficult situations without losing their enthusiasm. They are energetic and drive themselves and others around them, making them perfect for leadership roles."
            />
          </div>
        </div>
        <div className="app-footer">
          <h3>p.s I have a gift ;)</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
