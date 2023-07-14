import { globalCss } from ".";

export const globaStyles = globalCss({
    '*' : {
        margin : 0,
        padding : 0,
    },

    body : {
        backgroundColor: '$gray900',
        color: '$gray100',
        '-webkit-font-smoothing' : 'antialiased',
    },

    'body, imput, textarea, button' : {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
    }
})