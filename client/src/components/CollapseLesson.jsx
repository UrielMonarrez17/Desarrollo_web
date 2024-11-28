import React from "react";
import "../styles/CollapseLesson.css";
function CollapseLesson({title,description,subtopics}){
    const [isOpen, setIsOpen] = React.useState(false);

    return (

        <>
        <div className="collapseItem-collapse">
            <div 
                className="collapseItem-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h1 className="coursesInsideView-lesson-title">{title}</h1>
                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} collapseItem-icon`}></i>
            </div>
            {isOpen && (
                <>
                <div className={isOpen ? 'collapse-active' : 'collapse-content'}>
                    <p className="coursesInsideView-description">{description}</p>
                    {
                        subtopics.map((subtopic, index) => {
                            return(
                                <div className="subtopic">{subtopic}</div>
                            )
                        })
                    }
                       
                        
                    </div>
                </>
            )}
        </div>
    </>
    );

}
export default CollapseLesson;