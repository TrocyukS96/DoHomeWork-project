import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        // onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any = options?.map(
        option => {
            return (
                <option
                    value={option}
                    key={option}>
                    {option}
                </option>
            )
        });

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value)

        if(e.currentTarget.value){
            onChangeOption(e.currentTarget.value)
        }

        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} {...restProps} defaultValue={restProps.defaultValue}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
