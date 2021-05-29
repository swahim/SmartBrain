const Rank = ({entries, displayName}) => {
    return (
        <div className="rank">
            <div className="text">{`${displayName}, your current entries are : `}</div>
            <div className="rankNumber">{`#${entries}`}</div>
        </div>
    );
}
 
export default Rank;