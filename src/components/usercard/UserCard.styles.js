import styled from 'styled-components';

const Card = styled.div`
	width: 30rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 0.25rem solid #ccc;
	text-align: center;
	padding: 1rem 3rem;
	margin: 1rem auto;
	box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
	border-radius: 0.5rem;
`;

const ProfileImage = styled.img`
	border-radius: 50%;
	width: 6rem;
	height: 6rem;
`;

export { Card, ProfileImage };
