import UserService from "../services/userService.js"

console.log("user component yüklendi")

let userService = new UserService

userService.add()
userService.list()
userService.getById(1)