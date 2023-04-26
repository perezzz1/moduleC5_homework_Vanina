const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    const inp1 = Number(document.querySelector('#width').value);
    const inp2 = Number(document.querySelector('#height').value);
    if ((inp1 >= 100 && inp1<=300) && (inp2 >= 100 && inp2<=300)) {
        document.querySelector('#output').textContent = ""
        fetch(`https://picsum.photos/${inp1}/${inp2}`)
            .then((response) => { 
                const image = document.createElement('img');
                image.src = response.url;
                document.querySelector('#output').append(image)
            })
            .catch(() => { console.log('error') });
    } else {
        document.querySelector('#output').textContent = "одно из чисел вне диапазона от 100 до 300"
    }

});