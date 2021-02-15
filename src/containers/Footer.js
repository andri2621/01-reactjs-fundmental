import React from 'react';

 const Footer = () => {
    return (
        <div className="footer">
                <h3>&copy; CodeId Academy
                {(new Date()).getFullYear()}
                </h3>
            </div>

    );
}

export default Footer;