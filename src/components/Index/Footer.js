import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <div className="copyright-area three">
                <div className="container">
                    <div className="copyright-item">
                        <p>&copy;{currentYear} Evan Mitchell</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer