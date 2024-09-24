export const theme = {
    formField: {
        width: '100%',
        border: 'none',
        label: {
            size: '14px'
        },
    },
    textInput: {
        // 'extend': (props) => {
        //     return `background-color: #333; font-size: 12px; font-weight: none`;
        // }
        extend: `background-color: transparent; border 1px solid #000;border-radius: 5px; `

    },
    button: {
        extend: `background-color: #e50914; border-radius: 5px; text-align: center; font-size: 15px; font-weight: 600; color: #fff;`,
    },
    text: {
        xsmall: {
            size: '10px',
            'height': '1.25',
        },
        small: {
            'size': '12px',
            'height': '1.33',
        },
        medium: {
            'size': '14px',
            'height': '1.75',
        },
        large: {
            'size': '16px',
            'height': '1.75',
        }
    }
}