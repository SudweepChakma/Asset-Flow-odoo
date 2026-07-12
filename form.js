
function signup()
    {
        let email = document.getElementById("signupEmail").value;
        let password =document.getElementById("signupPwd").value;

        if(email == "" || password == "")
            {
                alert("Please fill in all field!");
                return false;
            }
            else
            {
                alert("Account created Successfully!");
                return true;
            }
    }

function signin()
    {
        let email = document.getElementById("signinEmail").value;
        let password = document.getElementById("signinPwd").value;

        if( email == "" || password == "")
        {
            alert("Please fill in all fields!");
            return false;
        }
        else if(email == "admin@email.com" && password == "123456")
        {
            alert("Login successfully!");
            return true;
        }
        else
        {
            alert("Invalid email or password!");
            return false;
        }
    }