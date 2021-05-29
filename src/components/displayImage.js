const FaceRecognition = ({imgUrl}) => {
    return (
        <div className="displayImage">
            <img alt="" id="inputImage" src={imgUrl}></img>
        </div>
    );
}
 
export default FaceRecognition;