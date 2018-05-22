import Api from '@/services/Api'

export default{
    register(credentials){
        return Api().post('register', credentials)
    }
}


/*
//how to use it:
AhthenticationService.register({
    email：‘testing@email.com’,
    password:'12456'
})
*/