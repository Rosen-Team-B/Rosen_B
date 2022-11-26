import React from 'react';


const PageHeader = () => {

    return (
        <div style={styles.pageContainer}>
            <div style={styles.innerContainer}>
                <img style={styles.logo} src={logo} alt={'Rosen Logo'}/>
            </div>
            <div style={styles.innerContainer}>
                <p style={styles.username}>username</p>
            </div>

        </div>
    );
}

export default PageHeader;