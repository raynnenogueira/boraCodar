const dropArea = document.querySelector('.files')

dropArea.addEventListener('dragover', () => { //colocando um arquivo
    dropArea.classList.add('dragover')
})

dropArea.addEventListener('dragleave', () => { // saindo do dropArea um arquivo
    dropArea.classList.remove('dragover')
})