function changeContent(images) {
    var contentDiv = document.getElementById('content');
    var html = '';
    for (var i = 0; i < images.length; i++) {
      html += '<img src="' + images[i] + '" alt="Imagem">';
    }
    contentDiv.innerHTML = html;
  }