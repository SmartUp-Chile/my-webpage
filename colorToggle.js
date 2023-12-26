function toggleColor() {
    var body = document.getElementById('body');
    var currentColor = body.style.backgroundColor;
    if (currentColor == '#ff4460') {
        body.style.backgroundColor = '#44ff60';
    } else {
        body.style.backgroundColor = '#ff4460';
    }
}

document.getElementById('toggleColor').onclick = toggleColor;