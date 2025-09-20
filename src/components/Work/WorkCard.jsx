import "./Work.css"

export default function WorkCard({element}){
    // console.log(element);
    
    return(
        <>
            <div className="work-card">
                <div className="img-or-vid">
                    <div className="vid">
                    {element.video ? 
                        <img src={element.video} alt="Screenshot/Video Placeholder" /> :
                        <div className="placeholder-image">Screenshot/Video Placeholder</div>
                    }
                    </div>
                </div>
                <div className="other-details">
                    <div className="org-service">
                        <h3>{element.organization}</h3>
                        <p>{element.service}</p>
                    </div>
                    <p>{element.result}</p>
                </div>
            </div>
        </>
    )
}