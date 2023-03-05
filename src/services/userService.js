// export: dışarıdan import edilebileceği anlamına geliyor
// default: default olarak ilgili classı importlarda kullan demek

export default class UserService{
    add(user){
        console.log("kullanıcı eklendi: " + user)
    }
    list(){
        console.log("kullanıcılar listelendi")
    }
    getById(id){
        console.log("kullanıcı detayı getirildi")
    }
}