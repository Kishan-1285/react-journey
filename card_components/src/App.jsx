import Card from './Card.jsx'
import ProfilePicture from './assets/img.jpg'
import Anotherimage from './assets/img2.png'
import Anotherpic from './assets/img3.png'
function App() {
  return(
    <>
    <Card
     image={ProfilePicture}
     title="Game of Thrones"
     description="A brutal fantasy epic where noble families fight for control of the Iron Throne in the land of Westeros."
    
    />
    <Card
    image={Anotherimage}
    title="House of dragon"
    description="The prequel to Game of Thrones, exploring the rise and fall of House Targaryen and the bloody civil war known as the Dance of the Dragons."
    />
    <Card
    image={Anotherpic}
    title="Breaking Bad"
    description="A high school chemistry teacher turns into a ruthless drug kingpin, transforming from ordinary man to criminal mastermind."
    />
    </>
  );
}

export default App
