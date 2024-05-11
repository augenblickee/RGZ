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

window.onload = function() {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
        .then(response => response.json())
        .then(data => {
            var rate = data.rates.AZN; // Курс азербайджанского маната к российскому рублю
            document.getElementById('rate').textContent = '1 AZN = ' + rate.toFixed(2) + ' RUB';
        })
        .catch(error => {
            console.error('Ошибка при получении курса валют:', error);
            document.getElementById('rate').textContent = 'Не удалось загрузить курс валют.';
        });
};

function convertToManats() {
    var rubles = document.getElementById('rubles').value;
    var rateElement = document.getElementById('rate');
    var rateText = rateElement.textContent;
    var rate = parseFloat(rateText.split(' = ')[1].split(' ')[0]);
    var manats = (rubles / rate).toFixed(2);
    document.getElementById('manats').value = manats;
}

function convertToRubles() {
    var manats = document.getElementById('manatsToRubles').value;
    var rateElement = document.getElementById('rate');
    var rateText = rateElement.textContent;
    var rate = parseFloat(rateText.split(' = ')[1].split(' ')[0]);
    var rubles = (manats * rate).toFixed(2);
    document.getElementById('rublesResult').value = rubles;
}