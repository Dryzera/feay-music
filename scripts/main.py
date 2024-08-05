from pathlib import Path
import random

ROOT_IMGS = Path(__file__).parent.parent / 'imgs'
MUSIC_NOTES = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si']

DICT_NOTES = {
    'Dó': ROOT_IMGS / MUSIC_NOTES[0],
    'Ré': ROOT_IMGS / MUSIC_NOTES[1],
    'Mi': ROOT_IMGS / MUSIC_NOTES[2],
    'Fá': ROOT_IMGS / MUSIC_NOTES[3],
    'Sol': ROOT_IMGS / MUSIC_NOTES[4],
    'Lá': ROOT_IMGS / MUSIC_NOTES[5],
    'Si': ROOT_IMGS / MUSIC_NOTES[6],
}


class CorrectNote:
    def __init__(self, list_notes: list[str], img_dict: dict[str, Path]):
        self.notes = list_notes
        self.notes_dict = img_dict
        self._index = self.make_index()
        self._file_img = self.make_image()
        self.return_class = (self._index, self._file_img)

    def make_index(self):
        index_random = random.randint(0, 6)
        note = self.notes[index_random]
        return note

    def make_image(self):
        return self.notes_dict[self._index]
        

correct_answer, url_image = CorrectNote(MUSIC_NOTES, DICT_NOTES).return_class


def group_answers(answer, notes: list[str]):
    correct = answer
    flag_while_group_answers = True

    while flag_while_group_answers:
        incorrect_answers = random.sample(notes, 2)

        if correct not in incorrect_answers:
            flag_while_group_answers = False
            group_answer = (correct, *incorrect_answers)
            print('grupo de respostas: ', group_answer, 'correta: ', correct)
            # embaralhar grupo de respostas
            return group_answer
            

group_answer = group_answers(correct_answer, MUSIC_NOTES)

def html_utils(group_answer, url_image):
    # repassa todas as utils para o html
    ...