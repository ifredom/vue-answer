function statusbarappearance() {
    var header = document.querySelector('.ta-header')
    $api.fixStatusBar(header);
}

export { statusbarappearance };