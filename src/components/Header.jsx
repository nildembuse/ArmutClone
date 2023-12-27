import Footer from "./Footer";
import "/src/App.css"
import { Link, Outlet, useNavigation } from "react-router-dom"
import { supabase } from "../main";
export default  function Header() {
    const [user, setUser] = useState(null)
  
    useEffect(() => {
      
      supabase.auth.onAuthStateChange((event, session) => {
        //setUser(session?.user);
         setUser(session?.user)
      })
      
    }, [])

    return(
        <div>
          
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container ">
                <img src="/src/img/elma.svg.png"  alt="" />
                <Link to={"/"} className="navbar-brand" href="index.html">ELMA</Link>
                <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div  className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ">
                        <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to={"/"}>TEMİZLİK</Link></li>
                        <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to={"/"}>TADİLAT</Link></li>
                        <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to={"/"}>NAKLİYAT</Link></li>
                        <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"to= {"/"}>TAMİR</Link></li>
                        <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"to= {"/"}>ÖZEL DERS</Link></li>
                        <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"to= {"/"}>SAĞLIK</Link></li>
                        <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"to= {"/"}>ORGANİZASYON</Link></li>
                        <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"to= {"/"}>DİĞER</Link></li>
                        <li><a href="" className='but'>YARDIM</a></li>
                        <li><a href="" className='but-yesil'>HİZMET VER</a></li>
                        <li> 
                            {
                                user ? 
                                <>{user.user_metadata.name} <button onClick={() => supabase.auth.signOut()}>Çıkış Yap</button></>
                                : <>
                                    <Link to='/register'>Kayıt Ol</Link> / <Link to='/login'>Giriş Yap</Link>
                                    </>
                             }
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        <Footer/>
        </div>
    )
}

function Indicator() {
    const navigation = useNavigation();
    const text = navigation.state === 'loading' && 'Yükleniyor';
    return (
        <h3 style={{ position: 'fixed', top: 10, left: 10, color: 'black', zIndex: 1 }}>{text}</h3>
    )
}