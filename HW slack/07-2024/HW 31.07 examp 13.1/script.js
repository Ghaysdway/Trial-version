const inputNote = document.getElementById('input_note');
const btnNote = document.getElementById('btn_note');
const noteText = document.getElementById('note_text');
document.addEventListener('DOMContentLoaded' , () =>{
    function download (){
        const saveNote = localStorage.getItem('saveNote');
        if (saveNote) {
            noteText.textContent = saveNote;
        }
    }
    download();
    btnNote.addEventListener('click' , () =>{
        const clickNote = inputNote.value;
       localStorage.setItem('saveNote' , clickNote) ;
       download();
    });
});