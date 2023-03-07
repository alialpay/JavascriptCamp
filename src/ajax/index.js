document.querySelector('#getEmployee').addEventListener('click', loadEmployee);

function loadEmployee(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/src/ajax/employees.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));

        }
    }

    xhr.send();
}