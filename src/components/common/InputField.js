import React from 'react';

export const InputFieldStyles = `
    .gh-portal-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        
        display: block;
        box-sizing: border-box;
        font-size: 1.5rem;
        color: inherit;
        background: transparent;
        outline: none;
        border: 1px solid var(--grey12);
        border-radius: 3px;
        width: 100%;
        height: 40px;
        padding: 0 12px;
        margin-bottom: 18px;
        letter-spacing: 0.2px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.05);
        transition: all 0.25s ease-in-out;
    }

    .gh-portal-input-labelcontainer {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .gh-portal-input-labelcontainer p {
        color: var(--red);
        font-size: 1.3rem;
        letter-spacing: 0.35px;
        line-height: 1.6em;
        margin-bottom: 0;
    }

    .gh-portal-input-label.hidden {
        display: none;
    }

    .gh-portal-input:focus {
        border-color: var(--brandcolor);
    }

    .gh-portal-input.error {
        border-color: var(--red);
    }

    .gh-portal-input::placeholder {
        color: var(--grey7);
    }
`;

function InputError({message, style}) {
    if (!message) {
        return null;
    }
    return (
        <p style={{
            ...(style || {})
        }}>
            {message}
        </p>
    );
}

function InputField({name, id, label, hideLabel, type, value, placeholder, disabled, onChange, onBlur, errorMessage, brandColor}) {
    id = id || `input-${name}`;
    onBlur = onBlur || function (){};
    const labelClasses = hideLabel ? 'gh-portal-input-label hidden' : 'gh-portal-input-label';
    const inputClasses = errorMessage ? 'gh-portal-input error' : 'gh-portal-input';
    return (
        <section className='gh-portal-input-section'>
            <div className='gh-portal-input-labelcontainer'>
                <label htmlFor={id} className={labelClasses}> {label} </label>
                <InputError message={errorMessage} name={name} />
            </div>
            <input
                id={id}
                className={inputClasses}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={e => onChange(e, name)}
                onBlur={e => onBlur(e, name)}
                disabled={disabled}
                aria-label={label}
            />
        </section>
    );
}

export default InputField;
