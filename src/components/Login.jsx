import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from "../main";


function Login() {
    const [suggestRegister, setSuggestRegister] = useState(false)
    const isRegister = location.pathname === '/register';

    const navigate = useNavigate();

    useEffect(() => {
        if(isRegister) { 
            setSuggestRegister(false)
        }
    })

    async function register(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);
        if(isRegister) {
            const { data, error } = await supabase.auth.signUp(
                {
                    email: user.email,
                    password: user.password,
                    options: {
                        data: {
                            name: user.name,
                            color: user.color
                        }
                    }
                }
            );

            if(error) {
                if(error.status === 400) {
                    alert('kullanıcı kayıtlı.');
                }
                else {
                    alert('hatalı veya eksik girildi.');
                }
                
                return;
            }
            
            user.id = data.user.id
            
            const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .insert([user])
                .select()
        
            navigate('/')
        } else {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: user.email,
                password: user.password,
            })
            
            if(error) {
                setSuggestRegister(true)
                return;
            }
            
            navigate('/');
        }
    }
    
    return (
        <div>
            
            {<h1>{ isRegister ? <><Link to="/login">Giriş Yap</Link> / Kayıt Ol</> : <>Giriş Yap / <Link to="/register">Kayıt Ol</Link></> }</h1>}
            <form onSubmit={register}>
                {isRegister && <p><input required type="text" name='name' placeholder='Adınız' /></p>}
                <p><input required type="email" name='email' placeholder='E-Posta' /></p>
                <p><input required type="password" name='password' placeholder='Şifre' /></p>
                <button>{isRegister ? 'Kayıt Ol' : 'Giriş Yap'}</button>
            </form>
            {suggestRegister && <p style={{color:'red'}}>Kullanıcı bulunamadı. <Link to="/register">Kayıt ol</Link>mak ister misin?</p>}
            
     </div>
    )
} 

export default Login
