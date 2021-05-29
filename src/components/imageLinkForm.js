
const ImageLinkForm = ({input, setInput, handleSubmit}) => {
    
    return (
        <div className="form">
            <p id="description">
                {"This magic Brain will detect colors in the picture. Give it a try"}
            </p>
            <p id="info">
                {"Input any jpg image link for example 'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg'"}
            </p>
            <form>
                <input className="input" type="text"
                    onInput = {(e) => setInput(e.target.value)}
                ></input>
                <button id="detect" onClick={handleSubmit}>Detect</button>
            </form>
            
        </div>
    );
}
 
export default ImageLinkForm;