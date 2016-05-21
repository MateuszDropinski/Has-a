function passLength()
{
    var val = document.getElementById("dlugosc").value;
    document.getElementById("length").innerHTML = val;
}
var tab;
function checkPassword()
{
    var pass = document.getElementById("password").value;
    var strength = 0;
    var tmp = 0;
    for(i=0;i<pass.split("").length;i++)
                {
                    if(pass.charCodeAt(i) >= 33 && pass.charCodeAt(i) <= 126)
                        {
                            ++tmp;
                        }
                    if(tmp==pass.split("").length)
                        {
                            tmp =0;
                        }
                }
    if(pass.split("").length<8 || tmp != 0 || pass.split("").length>16)
        {
            document.getElementById("strength").innerHTML="Hasło jest błędne";
            document.getElementById("strength").style.color = "#901818";
        }
    else
        {
          strength++;
            for(i=0;i<pass.split("").length;i++)
                {
                    if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57)
                        {
                            strength++;
                            break;
                        }
                }
            for(i=0;i<pass.split("").length;i++)
                {
                    if(pass.charCodeAt(i) >= 33 && pass.charCodeAt(i) <= 47)
                        {
                            strength++;
                            break;
                        }
                    else if(pass.charCodeAt(i) >= 58 && pass.charCodeAt(i) <= 64)
                        {
                            strength++;
                            break;
                        }
                    else if(pass.charCodeAt(i) >= 91 && pass.charCodeAt(i) <= 96)
                        {
                            strength++;
                            break;
                        }
                    else if(pass.charCodeAt(i) >= 123 && pass.charCodeAt(i) <= 126)
                        {
                            strength++;
                            break;
                        }
                }
            for(i=0;i<pass.split("").length;i++)
                {
                    var result = false;
                    if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90)
                        {
                            for(i=0;i<pass.split("").length;i++)
                                 {
                                    if(pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122)
                                        {
                                            result = true;
                                        }
                                }
                        }
                    if(result ==true)
                        {
                            strength++;
                            break;
                        }
                }
             howStrong(strength);
        }
   
}

function howStrong(strength)
{
    if(strength==1)
        {
            document.getElementById("strength").innerHTML="BARDZO SŁABE";
            document.getElementById("strength").style.color = "#901818";
        }
    else if(strength==2)
        {
            document.getElementById("strength").innerHTML="SŁABE";
            document.getElementById("strength").style.color = "#aab247";
        }
    else if(strength==3)
        {
            document.getElementById("strength").innerHTML="ŚREDNIE";
            document.getElementById("strength").style.color = "#88cb50";
        }
    else if(strength==4)
        {
            document.getElementById("strength").innerHTML="SILNE";
            document.getElementById("strength").style.color = "#288313";
        }
}
function createPassword()
{
    var Liczby = document.getElementById("Liczby").checked;
    var Znaki = document.getElementById("Znaki").checked;
    var Litery = document.getElementById("Litery").checked;
    var LiteryM = true;
    var what = 1;
    var where = 0;
    var dlugosc = document.getElementById("dlugosc").value;
    var tabLength = dlugosc;
    if(Liczby)what++;
    if(Znaki)what++;
    if(Litery)what++;
    var pass = new Array();
    tab = new Array();
            var tmp = dlugosc%what;
            dlugosc -=tmp;
            dlugosc/=what;
            if(Liczby)
                {
                    for(i=0;i<dlugosc;i++)
                    {
                        pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*9)+48);
                        
                    }
                }
            if(Litery)
                {
                    for(i=0;i<dlugosc;i++)
                    {
                        pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*25)+65);
                        
                    }
                }
            if(Znaki)
                {
                     for(i=0;i<dlugosc;i++)
                         {
                             var which = Math.floor((Math.random()*4) +1);
                            if(which==1)pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*14)+33);
                            if(which==2)pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*6)+58);
                            if(which==3)pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*5)+91);
                            if(which==4)pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*3)+123);
                             
                         }                    
                }
            if(LiteryM)
                {
                    for(i=0;i<dlugosc;i++)
                    {
                            pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*25)+97);
                        
                    }                    
                }
            if(tmp!=0 && Liczby)
            {
                
                for(i=0;i<tmp;i++){pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*9)+48)};
                
            }
            else if(tmp!=0 && Litery)
                {
                    for(i=0;i<tmp;i++)
                    {
                            pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*25)+65); 
                        
                    }
                }
                
            else if(tmp!=0 && Znaki)
                {
                     for(i=0;i<tmp;i++)
                         {
                             var which = Math.floor((Math.random()*4) +1);
                            if(which==1)pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*14)+33);
                            if(which==2)pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*6)+58);
                            if(which==3)pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*5)+91);
                            if(which==4)pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*3)+123);
                             
                         }                    
                }
            else if(tmp!=0 && LiteryM)
                {
                    for(i=0;i<tmp;i++)
                    {
                             pass[randomize(tabLength)]=String.fromCharCode(Math.floor(Math.random()*25)+97); 
                        
                    }
                }
    pass = pass.join("");
    document.getElementById("password").value = pass.toString();
    checkPassword();
}

function randomize(dlugosc)
{
    var random = 0;   
    for(;;)
        {
            random = Math.floor(Math.random()*dlugosc);
            if(tab[random]==undefined)
                {
                    tab[random]="taken";
                    break;
                }
        }
    return random;
    
}