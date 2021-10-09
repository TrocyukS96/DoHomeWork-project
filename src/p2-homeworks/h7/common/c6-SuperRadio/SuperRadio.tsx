import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: any[]
    onChangeOption: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        // onChange, onChangeOption
        //onChange - is working with event, onChangeOption - with value
        if(e.currentTarget.value){
            onChangeOption(e.currentTarget.value)
        }
    }

    console.log(value)

    const mappedOptions: any[] = options
        ? options.map((o, i) => ( // map options with key
        // <label key={name + '-' + i}>
        <label key={o}>
            <input
                type={'radio'}
                value={o}
                onChange={onChangeCallback}
                name={name}
                checked={o === value}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
