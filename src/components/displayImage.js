const FaceRecognition = ({imgUrl}) => {
    return (
        <div className="displayImage">
            <img id="inputImage" src={imgUrl}></img>
        </div>
    );
}
 
export default FaceRecognition;