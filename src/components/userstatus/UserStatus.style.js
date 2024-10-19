import styled from 'styled-components';

const StatusText = styled.p`
	font-size: 1em;
	color: ${props => (props.active ? 'green' : 'red')};
`;

export { StatusText };
