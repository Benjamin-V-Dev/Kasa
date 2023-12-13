export default function Rank({ rank }) {
    if (rank == 1) {
        return (
            <div className="rate">
                <img src="/star-orange.png"/>
                <img src="/star-grey.png"/>
                <img src="/star-grey.png"/>
                <img src="/star-grey.png"/>
                <img src="/star-grey.png"/>
            </div>
        );
    } else if (rank == 2) {
        return (
            <div className="rate">
                <img src="/star-orange.png"/>
                <img src="/star-orange.png"/>
                <img src="/star-grey.png"/>
                <img src="/star-grey.png"/>
                <img src="/star-grey.png"/>
            </div>
        );
    } else if (rank == 3) {
        return (
            <div className="rate">
                <img src="/star-orange.png"/>
                <img src="/star-orange.png"/>
                <img src="/star-orange.png"/>
                <img src="/star-grey.png"/>
                <img src="/star-grey.png"/>
            </div>
        );
    } else if (rank == 4) {
        return (
            <div className="rate">
                <img src="/star-orange.png"/>
                <img src="/star-orange.png"/>
                <img src="/star-orange.png"/>
                <img src="/star-orange.png"/>
                <img src="/star-grey.png"/>
            </div>
        );
    } else if (rank == 5) {
        return (
            <div className="rate">
                <img src="/star-orange.png"/>
                <img src="/star-orange.png"/>
                <img src="/star-orange.png"/>
                <img src="/star-orange.png"/>
                <img src="/star-orange.png"/>
            </div>
        );
    }
}
