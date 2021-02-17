import React from 'react';
import styled from 'styled-components';

const Player = styled.div`
    width: 95%;
    height: 98%;
    padding: 1em;
    
`

const Youtube = (props) => {
	const { video, autoplay, rel, modest } = props;
    const videoSource = "https://www.youtube.com/embed/" +
        video + "?autoplay=" +
        autoplay + "&rel=" +
        rel + "&modestbranding=" +
        modest;
	return (
		<Player>
			<iframe type="text/html" width="100%" height="90%" src={videoSource} frameBorder="0" />
		</Player>
	);
};

export default Youtube;
