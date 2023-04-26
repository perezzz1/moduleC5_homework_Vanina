btn = document.querySelector('#btn')

// Функция для запроса и вставки изображений
let sel = function(page, limit) {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                for (let i= 0; i < json.length; i+=1){
                    // создаем блок с картинкой и подписью
                    let block = document.createElement('div');
                    block.className = "block";
                    
                    // создаем картинку, вставляем в блок
                    let image = document.createElement('img');
                    image.src = json[i]['download_url'];
                    image.alt = json[i]['author'];
                    image.width = 300;
                    block.append(image);
                    
                    // создаем подпись
                    let caption = document.createElement('div');
                    caption.className = "caption";
                    caption.textContent = json[i]['author']
                    block.append(caption)
                    
                    // вставляем блок в сайт
                    document.getElementsByClassName('output')[0].append(block);                  
                }
            });
}

// Подгружаем изображения из localStorage
document.addEventListener('DOMContentLoaded', () =>{
    const output = localStorage.getItem('select');
    const massiv = JSON.parse(output);
    console.log(massiv)
    let page =massiv.inp1;
    console.log(page)
    let limit =massiv.inp2;
    console.log(limit)
    sel(page, limit)
});

// Обрабатываем запрос
btn.addEventListener('click', () => {
    inp1 = Number(document.querySelector('#num_page').value);
    inp2 = Number(document.querySelector('#limit').value);
    output = document.querySelector('.output');
    localStorage.clear();

    output.textContent = ""
    if ((inp1 < 1 || inp1 > 10)&&(inp2 < 1 || inp2 > 10)){
        output.textContent = "Номер страницы и лимит вне диапазона от 1 до 10"
    } else if (inp1 < 1 || inp1 > 10) {
        output.textContent = "Номер страницы вне диапазона от 1 до 10"
    } else if (inp2 < 1 || inp2 > 10) {
        output.textContent = "Лимит вне диапазона от 1 до 10"
    } else {

        sel(inp1, inp2)
        
        const jsonString = '{"inp1": ' + inp1 + ', "inp2": ' + inp2 + '}';

        localStorage.setItem('select', jsonString)
    }}); 