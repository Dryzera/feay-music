document.addEventListener('DOMContentLoaded', function() {
    const MUSIC_NOTES = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];
    const DICT_NOTES = {
        'Dó': 'imgs/Dó.png',
        'Ré': 'imgs/Ré.png',
        'Mi': 'imgs/Mi.png',
        'Fá': 'imgs/Fá.png',
        'Sol': 'imgs/Sol.png',
        'Lá': 'imgs/Lá.png',
        'Si': 'imgs/Si.png',
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
            return `${this.notesDict[this._index]}`;
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
                // Embaralhar array
                for (let i = groupAnswer.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [groupAnswer[i], groupAnswer[j]] = [groupAnswer[j], groupAnswer[i]];
                }
                return groupAnswer;
            }
        }
    }

    const groupAnswer = groupAnswers(correctAnswer, MUSIC_NOTES);

    document.getElementById('note_1').value = groupAnswer[0];
    document.getElementById('note_2').value = groupAnswer[1];
    document.getElementById('note_3').value = groupAnswer[2];

    document.getElementById('noteImage').src = urlImage;

    document.querySelectorAll('input[type="submit"]').forEach((button, index) => {
        button.addEventListener('click', event => {
            event.preventDefault(); 

            const userAnswer = document.getElementById(`note_${index + 1}`).value;

            if (userAnswer === correctAnswer) {
                document.body.style.backgroundColor = '#67C862'; 
            } else {
                document.body.style.backgroundColor = '#E13737'; 
            }

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    });
});
