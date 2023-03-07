
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
                console.log(xhr.responseText);
            }else if (xhr.status === 404){
                console.log('kaynak bulunamadı')
            }else {
                console.log('hata')
        }
    }  
}

xhr.onprogress = function(){
    console.log('on progressing');
}

xhr.open('GET', '/src/ajax/msg.txt', true);     // bu true asenkrona demek, false = senkron
xhr.send();


console.log('hello')

// sondaki bu hello en başta çalıştı

/*
readyState:
0: request not initialized
1: server connection established
2: processing recieved
3: processing request
4: request finished and response is ready
*/