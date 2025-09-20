import "./Work.css";
import WorkElements from "./WorkData.js";
import WorkCard from "./WorkCard.jsx";

export default function Work() {
  return (
    <div className="featured-work-container">
      <div className="featured-work-description">
        <h2>Featured Work</h2>
        <div className="work-view">
          <p>A peek at projects we loved building and scaling.</p>
          <button>View All</button>
        </div>
      </div>
      <div className="featured-work-card">
        {WorkElements && WorkElements.length
          ? WorkElements.map((workElement, index) => (
              <WorkCard key={workElement.id} element={workElement} />
            ))
          : null}
      </div>
    </div>
  );
}
