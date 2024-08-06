const path = require('path');
const fs = require('fs'); 

const ROOT_IMGS = path.join(__dirname, '..', 'imgs');
const MUSIC_NOTES = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];

const DICT_NOTES = {
    'Dó': path.join(ROOT_IMGS, 'Dó'),
    'Ré': path.join(ROOT_IMGS, 'Ré'),
    'Mi': path.join(ROOT_IMGS, 'Mi'),
    'Fá': path.join(ROOT_IMGS, 'Fá'),
    'Sol': path.join(ROOT_IMGS, 'Sol'),
    'Lá': path.join(ROOT_IMGS, 'Lá'),
    'Si': path.join(ROOT_IMGS, 'Si'),
};

class CorrectNote {
    constructor(listNotes, imgDict) {
        this.notes = listNotes;
        this.notesDict = imgDict;
        this._index = this.makeIndex();
        this._fileImg = this.makeImage();
        this.returnClass = [this._index, this._fileImg];
    }

    makeIndex() {
        const indexRandom = Math.floor(Math.random() * this.notes.length);
        return this.notes[indexRandom];
    }

    makeImage() {
        return `${this.notesDict[this._index]}.png`;
    }
}

const [correctAnswer, urlImage] = new CorrectNote(MUSIC_NOTES, DICT_NOTES).returnClass;

function groupAnswers(answer, notes) {
    let correct = answer;
    let flagWhileGroupAnswers = true;
    let groupAnswer;

    while (flagWhileGroupAnswers) {
        const incorrectAnswers = [];
        while (incorrectAnswers.length < 2) {
            const randomNote = notes[Math.floor(Math.random() * notes.length)];
            if (randomNote !== correct && !incorrectAnswers.includes(randomNote)) {
                incorrectAnswers.push(randomNote);
            }
        }

        if (!incorrectAnswers.includes(correct)) {
            flagWhileGroupAnswers = false;
            groupAnswer = [correct, ...incorrectAnswers];
            // Shuffle array
            for (let i = groupAnswer.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [groupAnswer[i], groupAnswer[j]] = [groupAnswer[j], groupAnswer[i]];
            }
            console.log('grupo de respostas: ', groupAnswer, 'correta: ', correct);
            return groupAnswer;
        }
    }
}

const groupAnswer = groupAnswers(correctAnswer, MUSIC_NOTES);

function utils_html(groupAnswer, urlImage) {
    // repassa utils para o html
}
