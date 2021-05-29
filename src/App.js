
import {useState } from 'react';
import Clarifai from 'clarifai'
import ImageLinkForm from './components/imageLinkForm';
import Logo from './components/logo';
import Navigation from './components/navigation';
import Rank from './components/rank';
import FaceRecognition from './components/displayImage';
import DisplayColors from './components/displayColors';
import SignIn from './components/signIn/signIn';
import Register from './components/register/register';



const app = new Clarifai.App({
  apiKey: '857608ae43c54ba1ae90c8025fa80a2a',
});

const url = 'http://localhost:8000';

function App() {

  const [input, setInput] = useState("");
  const [imgUrl, setImageUrl] = useState("");
  const [displayName, setDisplayName] = useState("");
  const displayDiv = document.querySelector(".displayColors");
  const [route, setRoute] = useState("signin")
  const [id, setId] = useState();
  const [entries, setEntries] = useState();
  const idBody = {
    id
  }
    const handleSubmit = (e) => {
        e.preventDefault();
        // handleClick();
        // console.log(input);
        setImageUrl({input}.input)
        // console.log(imgUrl);
            app.models
              .predict(Clarifai.COLOR_MODEL, input).then((datain) => {
                if(datain){
              
                  fetch(`${url}/images`, {
                    method : 'PUT',
                    headers : {
                      "Content-Type": "application/json"
                    },
                    body : JSON.stringify(idBody)
                  }).then((data) => {
                    return data.text()
                  }).then(result => {
                    setEntries(result);
                    
                  })
                }
                // console.log(datain.outputs[0].data.colors);
                const array = datain.outputs[0].data.colors;
                displayDiv.innerHTML = "";
                array.forEach(Element => {
                    
                    const copyColor = document.createElement("div");
                    copyColor.classList.add("copyColor");
                    copyColor.innerHTML = `<div class="color"></div>
                    <div class="displayValue">${Element.raw_hex}</div>`
                    displayDiv.appendChild(copyColor);
                    const color = copyColor.querySelector(".color")
                    // console.log(color);
                    color.classList.add("color");
                    color.style.background = Element.raw_hex;
                  
                  })
                }).catch((err) => {
                    console.log(err);
                })
    }
    const routeChange = (route) => {
      setRoute(route);
    }



  return (
    <div className="App">
      {route === 'home' 
        ?<div>
         <Navigation routeChangeSignIn={routeChange}/>
         <Logo />
        <Rank entries={entries} displayName={displayName}/>
        <ImageLinkForm  input={input} setInput={setInput} handleSubmit={handleSubmit}/>
        <FaceRecognition imgUrl={imgUrl} />
        <DisplayColors />
      </div>

      : (
        route === 'signin' ? <SignIn routeChange={routeChange} setId={setId} setEntries={setEntries} setDisplayName={setDisplayName}/>
        : <Register routeChange={routeChange} setId={setId} setEntries={setEntries} setDisplayName={setDisplayName}/>
      )}

    </div>
  );
}


export default App;
