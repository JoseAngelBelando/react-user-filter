import {
    CheckboxLabel,
    InputDiv,
    InputField,
    SelectField
  } from './Inputs.styles';
  
  const Inputs = ({ setShowActiveOnly, setSortOption, setSearchTerm }) => {
    return (
      <InputDiv>
        <InputField
          type='text'
          placeholder='Buscar por nombre'
          onChange={e => setSearchTerm(e.target.value)}
        />
        <CheckboxLabel>
          Sólo activos
          <input
            type='checkbox'
            onChange={e => setShowActiveOnly(e.target.checked)}
          />
        </CheckboxLabel>
        <SelectField onChange={e => setSortOption(e.target.value)}>
          <option value='default'>Por defecto</option>
          <option value='name'>Por nombre</option>
        </SelectField>
      </InputDiv>
    );
  };
  
  export default Inputs;