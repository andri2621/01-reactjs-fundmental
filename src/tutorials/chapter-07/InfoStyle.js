import styled from 'styled-components';

export const InfoStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	margin-left: 30px;
	margin-right: 30px;
`;

export const InfoMain = styled.div`
	display: flex;
	width: 100%;
	height: 98%;
	flex-direction: row;
	background-color: #e6e6fa;
	margin-bottom: 1px;
`;

export const InfoLeft = styled.div`
	flex: 50%;
	width: 100%;
	height: auto;
	background-color: #ffffff;
	flex-direction: row;
	border-right-style: inset;
`;

export const InfoRight = styled.div`
	display: flex;
	flex: 50%;
	width: 100%;
	height: auto;
	background-color: #ffffff;
	flex-direction: column;
`;

export const InfoTitle = styled.div`
	background-color: #ffffff;
	width: 100%;
	flex: 10%;
	border-bottom-style: inset;
	h3 {
		font-size: 18px;
		font-weight: 600;
		line-height: 28px;
		margin: 10px;
		text-align: left;
	}
	.overview {
		width: 95%;
		padding: 1em 0 1em 1em;
		font-size: 12px;
		line-height: 1.4;
		font-style: italic;
		color: #aaa;
		text-align: justify;
	}
`;

/**
 *  customize styled component button
 */
const Button = styled.button`
	position: relative;
	width: 100px;
	display: block;
	margin: 10px auto;
	padding: 0;
	overflow: hidden;
	border-width: 0;
	outline: none;
	border-radius: 2px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
	background-color: #2ecc71;
	color: #ecf0f1;
	transition: background-color .3s;
	:hover,
	:focus {
		background-color: #27ae60;
		cursor: pointer;
	}
	span {
		display: block;
		padding: 12px 24px;
	}
`;

export const ButtonBack = styled(Button)`
    color: #fff;
    background-color: #428bca;
    margin-top: 1px;
    border-color: #357ebd;
	font-size: 14px;
    top:0;
    span {
        display: block;
        padding: 16px 30px;
    }
`;

export const Facebook = styled(Button)`
    color: #fff;
    background-color: #428bca;
    border-color: #357ebd;
    span {
        display: block;
        padding: 1px 5px;
    }
`;

export const Twitter = styled(Button)`
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;
    span {
        display: block;
        padding: 1px 5px;
    }
`;

export const Google = styled(Button)`
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
    span {
        display: block;
        padding: 1px 5px 0 5px;
    }
`;

export const InfoButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;
export const Star = styled.span`
	color: #133337;
	font-size: 0.80em;
	align-self: center;
`;

/*   end customize styled component button
 */

export const InfoGenre = styled.div`
	background-color: #ffffff;
	width: 100%;
	flex: 30%;
	display: flex;
	flex-direction: row;
	border-radius: .5em;
	border-bottom-style: inset;
	justify-content: space-around;
`;

export const AkaGenre = styled.div`
	flex: 50%;
	flex-direction: row;
	text-transform: initial;
	padding: 1em 0 1em 1em;
	line-height: 1em;
	strong {
		font-weight: 700;
	}
`;

export const RatingIcon = styled.div`
	flex: 50%;
	display: flex;
	flex-direction: column;
	padding: 1em 0 1em 1em;
	line-height: 2.5em;
	span {
		margin-left: 3px;
	}
`;

export const InfoActor = styled.div`
	background-color: #ffffff;
	width: 90%;
	flex: 60%;
	display: flex;
	flex-direction: row;
	margin-top: 10px;
	margin-left: 10px;
`;

export const ActorCard = styled.div`
	width: 85px;
	height: 65px;
	margin-left: 5px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	box-shadow: 0 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, .08);
	.photo {
		height: 100%;
		width: 100%;
		transform-origin: top-left;
		img {
			height: 90%;
			width: 100%;
		}
	}
	.roles {
		width: 100%;
		height: 65px;
		font-size: 10px;
		color: #222;
		line-height: 3px;
		text-transform: initial;
		padding: 8px 10px 5px 8px;
		.actors {
			color: #757575;
			text-overflow: elippsis;
			overflow: hidden;
			white-space: nowrap;
		}
	}
`;
