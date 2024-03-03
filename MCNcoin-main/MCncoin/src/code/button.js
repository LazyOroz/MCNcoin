function hideButton() {
    var button = document.getElementById('myButton');
    var content = document.getElementById('content');

    // Скрываем кнопку
    button.style.display = 'none';

    // Показываем новую страницу
    content.style.display = 'block';
}
