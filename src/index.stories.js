import React from 'react';
import App from './App'
export default { title: 'Button' };

export const withText = () => <button>Hello Button</button>;

export const withEmoji = () => (
    <button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
);

export const app = () => {
    return(
        <App/>
    )
}

app.story = {
    parameters: {jest: ['App']},
};