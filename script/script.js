class myHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <div class="sec1">
        <nav>
            <a href="index.html"><img src="/img/logo.jpeg" id="logo"></a>
            <ul>
                <a href="page1.html"><li>BOOK</li></a>
                <a href="blog.html"><li>BLOG</li></a>
                <a href="c.html"><li>CONTACT US</li></a>
                <a href="login.html"><li>LOGIN / REGISTER</li></a>
            </ul>
        </nav>
        </div>`
        
    }
}
customElements.define('my-header',myHeader)

class myfooter extends HTMLElement{
    connectedCallback(){  
        this.innerHTML =`
        <footer>
        <table>
                <tr>
                    <td><b>ABOUT US</b></td>
                    <td><b>SMASH N PLAY</b></td>
                    <td><b>SOCIAL MEDIA</b></td>
                </tr>
                <tr>
                    <td rowspan="3">Our system will improve efficiency at court facilities <br> and improve club/player services. Smash N Play is <br> designed with the players in mind, and is the <br> ultimate players court reservation system. With <br> easier access to opponents the overall level of club <br> players will improve.</td>
                    <td><a href="login.html">Login/ Register</a></td>
                    <td>Facebook</td>
                </tr>
                <tr>
                    <td><a href="c.html">Contact Us</a></td>
                    <td>Twitter</td>
                </tr>
                <tr>
                <td><a href="blog.html">Blog</a></td>
                    <td>Instagram</td>
                </tr>
        </table>
        
        </footer>`
    }
}
customElements.define('my-footer',myfooter) 

var user = document.forms['form']['user'];

function validation(){
    var username=document.getElementById(user)
    var pass=document.getElementById(pass)
        
        if(username == " " || username.length < 9)
        {
        alert("please enter valide username");
        }    
}
