const chars = 'ABCDEFGIJK01234567890';

const btn = document.querySelector('button')
const section = document.querySelector('section')

const codesNumebr = 1000;
const charsNumber = 10;


const codesGenerator = () => {
    for (let i = 0; i < codesNumebr; i++) {
        let code = "";
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * 21);
            code += chars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }

}




btn.addEventListener('click', codesGenerator)