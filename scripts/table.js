const LATIN_PHRASES = [
    'Consuetudo est altera natura',
    "Nota bene",
    'Nulla calamitas sola',
    'Per aspera ad astra',
];
const RUSSIAN_PHRASES = [
    'Привычка - вторая натура',
    'Заметье хорошо!',
    'Беда не приходит одна',
    'Через тернии к звездам',
];

let index = 0;

function addTableRow() {
    if (index === 4) {
        return;
    }

    const olElem = document.getElementById('dom')
    console.log(olElem)
    const li = document.createElement('li');
    const ol = document.createElement('ol');
    const russianText = document.createTextNode(RUSSIAN_PHRASES[index]);
    const latinText = document.createTextNode(LATIN_PHRASES[index]);
    li.appendChild(latinText)
    ol.appendChild(russianText)
    li.appendChild(ol)
    olElem.appendChild(li)
    index++;
}