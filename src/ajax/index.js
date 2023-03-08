document.querySelector('#getEmployee').addEventListener('click', loadEmployee);

function loadEmployee(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/src/ajax/employees.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));

            let employees = JSON.parse(this.responseText)

            let html = "";
            employees.forEach(employee => {
                html += 
                `<tr>
                    <td>${employee.firstName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.age}</td>
                    <td>${employee.retired}</td>
                </tr>`;
            });
            

            document.querySelector('#employees').innerHTML=html;

        }
    }

    xhr.send();
}