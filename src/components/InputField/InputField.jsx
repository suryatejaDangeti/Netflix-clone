import { FormField, TextInput } from "grommet"


const InputField = (props) => {
    const { name, onChange, label, placeholder, value } = props;

    return (
        <FormField
            label={label}
        >
            <TextInput 
                width='medium'
                size='medium'
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={(e) => {
                    if(onChange) return onChange(e)
                }}
            />
        </FormField>
    )
}

export default InputField;