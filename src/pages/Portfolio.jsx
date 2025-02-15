import "../styles/Portfolio.css";
import img2 from '../assets/images/github.jpeg';


export default function Porfolio() {
    
    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>
            <div className='portfolio-items'>
                <div alt='placeholder' className="portfolio-item">
                    <h3>Kanban Board</h3>
                    <a href="" target="_blank" rel="noreferrer">
                        <img src={img2} alt="github link" className="github"/>
                    </a>
                    <p>MERN Stack</p>
                </div>
                <div  alt='placeholder' className="portfolio-item">
                    <h3>Surf Report</h3>
                    <a href="" target="_blank" rel="noreferrer">
                        <img src={img2} alt="github link" className="github"/>
                    </a>
                    <p>MERN Stack</p>
                </div>
                <div alt='placeholder' className="portfolio-item">
                    <h3>Pastel Puzzles</h3>
                    <a href="" target="_blank" rel="noreferrer" >
                        <img src={img2} alt="github link" className="github"/>
                    </a>
                    <p>MERN Stack</p>
                </div>
                <div alt='placeholder' className="portfolio-item" >
                    <h3>Weather Dashboard</h3>
                    <a href="" target="_blank" rel="noreferrer" >
                        <img src={img2} alt="github link" className="github"/>
                    </a>
                    <p>HTML, CSS, JS</p>
                </div>
            </div>
        </div>
    )
}