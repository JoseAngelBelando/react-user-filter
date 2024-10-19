import styled from 'styled-components';

const StatusText = styled.p`
	font-size: 1.2em;
	color: ${props => (props.active ? 'green' : 'red')};
`;

export { StatusText };
