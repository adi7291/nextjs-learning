export const logOut =()=>{
    localStorage.removeItem('user')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('otp')
}
