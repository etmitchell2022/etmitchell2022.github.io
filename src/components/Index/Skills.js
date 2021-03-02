import React from 'react'

const Skills = () => {
    return (
        <div className="skills-area border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">SKILLS</span>
                </div>

                <div className="skill-wrap">
                    <div className="skill">
                        <h3>JAVASCRIPT</h3>
                        <div className="skill-bar wow fadeInLeftBig">
                            <span className="skill-count"></span>
                        </div>
                    </div>

                    <div className="skill">
                        <h3>REACT JS</h3>
                        <div className="skill-bar wow fadeInLeftBig">
                            <span className="skill-count"></span>
                        </div>
                    </div>

                    <div className="skill">
                        <h3>PYTHON</h3>
                        <div className="skill-bar wow fadeInLeftBig">
                            <span className="skill-count"></span>
                        </div>
                    </div>

                    <div className="skill">
                        <h3>NODE JS</h3>
                    </div>

                    <div className="skill">
                        <h3>MONGO DB</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills