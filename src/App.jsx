

import Button from './Button.jsx';
import Greed from './Greed.jsx'
import girl from './assets/myGirl.jpg'


function App() {

  let name = "Dave";

  return (


    <>

      <Greed name="Dave" />
      <Greed name="Dan" />
      <Greed name="Leon" />
      <Greed name="John" />
      <Button>
        <span>icon</span>
        <p>Submit</p>
      </Button>
      <Button>
        <span>icon</span>
        <p>Cancel</p>
      </Button>

      <img src={girl} alt="" />
    </>
  )
}

export default App
