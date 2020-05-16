let bth = document.querySelector('button').onclick = () => {
    let che = document.querySelectorAll('option')
    let inp = document.querySelector('.out').value
    for (let i = 0; i < che.length; i++) {
        if (che[i].selected) {
            document.querySelector('.one').innerHTML = ' Цена: ' + Math.ceil(inp * che[i].value) + ' &#8381'

        }

    }
    document.querySelector('.out').value = '';
}
