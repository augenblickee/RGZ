function newsOpen(id){
    document.getElementById('openNews' + id).style.display = 'block';
    document.getElementById('btno' + id).style.display = 'none';
    document.getElementById('btnc' + id).style.display = 'inline';
    document.getElementById('news' + id).style.height = '600px';

}

function newsClose(id){
    document.getElementById('openNews' + id).style.display = 'none';
    document.getElementById('btnc' + id).style.display = 'none';
    document.getElementById('btno' + id).style.display = 'inline';
    document.getElementById('news' + id).style.height = '360px';

}
