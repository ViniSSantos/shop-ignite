//import { globalCss } from ".";

export const globaStyles = globalCss({
    '*' : {
	boxSizing : 'borderBox';
    },

    'body' : {
        background: '#f6f5f7',
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: 'Montserrat', sans-serif;
        height: 100vh;
        margin: -20px 0 50px;
    }
})





/*
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
*/