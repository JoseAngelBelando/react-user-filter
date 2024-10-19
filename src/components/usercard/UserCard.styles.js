import styled from 'styled-components';

const Card = styled.div`
	width: 43.75rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 0.1rem solid #ccc;
	text-align: center;
	padding: 0.5rem 2rem;
	margin: 1rem auto;
	box-shadow: 0.4rem 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
	border-radius: 0.8rem;
`;

const ProfileImage = styled.img`
	border-radius: 50%;
	width: 6.25rem;
	height: 6.25rem;
`;

export { Card, ProfileImage };
