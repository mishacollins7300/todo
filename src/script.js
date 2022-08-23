let list = [];

function printDo(name, date) {
    document.getElementById('list').innerHTML += '<p>' + name +'</p>' + ' ' + '<p>' + date + '</p>';
    
};

function addDo() {
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    if(name !='' && date !='') {
        let temp = {
            Name: name,
            Date: date,
        }    
        list.push(temp);
        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
        printDo(name, date);
    } else {
        alert('Заполните поля')
    }
};

