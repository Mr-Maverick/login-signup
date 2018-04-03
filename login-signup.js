$(()=>{
    const loginMenu= $('#login-menu');
    const signupMenu= $('#signup-menu');
    const loginBtn= $('#login-btn');
    const signupBtn= $('#signup-btn');

    loginBtn.click(()=>{
        signupMenu.addClass('hide');
        loginMenu.removeClass('hide');
        loginBtn.removeClass('bg-white');
        signupBtn.addClass('bg-white');
    })
    signupBtn.click(()=>{
        loginMenu.addClass('hide');
        signupMenu.removeClass('hide');
        signupBtn.removeClass('bg-white');
        loginBtn.addClass('bg-white');
    })
});