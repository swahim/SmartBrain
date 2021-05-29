const FaceRecognition = ({imgUrl}) => {
    return (
        <div className="displayImage">
            <img alt="" id="inputImage" src={imgUrl} width="500px" height="auto"></img>
        </div>
    );
}
 
export default FaceRecognition;