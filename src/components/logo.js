import Tilt from 'react-tilt'
import brain from './brain.png'
const Logo = () => {
    return (
        <div className="logo">
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"><img alt="logo" className="image" src={brain}></img></div>
            </Tilt>
        </div>
    );
}
 
export default Logo;