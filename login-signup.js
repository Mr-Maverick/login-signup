$(()=>{
    const loginMenu= $('#login-menu');
    const signupMenu= $('#signup-menu');
    const loginBtn= $('#login-btn');
    const signupBtn= $('#signup-btn');

    loginBtn.click(()=>{
        signupMenu.addClass('hide');
        loginMenu.removeClass('hide');
        loginBtn.removeClass('toggleBorder');
        signupBtn.addClass('toggleBorder');
    })
    signupBtn.click(()=>{
        loginMenu.addClass('hide');
        signupMenu.removeClass('hide');
        signupBtn.removeClass('toggleBorder');
        loginBtn.addClass('toggleBorder');

    })
});