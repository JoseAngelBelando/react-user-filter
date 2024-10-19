import styled from 'styled-components';

const InputField = styled.input`
	padding: 0.625rem;
	margin: 0.625rem 0;
	border: 0.0625rem solid #ccc;
	border-radius: 0.25rem;
`;

const CheckboxLabel = styled.label`
	margin-inline: 2rem;
`;

const SelectField = styled.select`
	padding: 0.625rem;
	margin: 0.625rem 0;
`;

const InputDiv = styled.div`
	width: 43.75rem;
	text-align: center;
	margin-inline: auto;
`;

export { InputField, CheckboxLabel, SelectField, InputDiv };
