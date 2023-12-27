import "/src/App.css"

export default  function Footer() {

    return(
      <div>

       <footer>
            <div className='footerDesc'>
              <div className='footerComment'>
    
                <section>
                  <h6 className='armutFooter'>Bilgi</h6>
                  <nav className='footerFirstStatemenet' >
                    <a href="#"><p2 className="statment">Nasıl Çalışır?</p2><br /></a>
                    <a href="#"><p2 className="statment">İletişim</p2><br /></a>
                    <a href="#"><p2 className="statment">Blog </p2><br />  </a>
                    <a href="#"> <p2 className="statment">Hakkımızda</p2><br /></a>
                    <a href="#"><p2 className="statment">Kariyer</p2></a>
                  </nav>
                </section>
    
                <section>
                  <h6 className='armutFooter'>Hizmetler</h6>
                  <nav className='footerFirstStatemenet' >
                    <a href="#"><p2 className="statment">Ev Temizliğir</p2><br /></a>
                    <a href="#"><p2 className="statment">Evden Eve Nakliyat</p2><br /></a>
                    <a href="#"><p2 className="statment">Boya Badana</p2><br />  </a>
                    <a href="#"> <p2 className="statment">Usta Arıyorum</p2><br /></a>
                    <a href="#"><p2 className="statment">En Yakın</p2></a> <br />
                  </nav>
                </section>
    
                <section>
                  <h6 className='armutFooter'>Fiyatlar</h6>
                  <nav className='footerFirstStatemenet' >
                    <a href="#"><p2 className="statment">Ev Temizliği Fiyatları</p2><br /></a>
                    <a href="#"><p2 className="statment">Evden Eve Nakliyat Fiyatları</p2><br /></a>
                    <a href="#"><p2 className="statment">Boya Badana Fiyatları</p2><br />  </a>
                    <a href="#"> <p2 className="statment">Online Psikolog Fiyatları</p2><br /></a>
                    <a href="#"><p2 className="statment">İngilizce Özel Ders Fiyatları</p2></a>
                  </nav>
                  
                </section>
                <p> 2023 Armut.com Benzeri E-Ticaret Sitesi</p>
              </div>
            </div>
        
    </footer>
  </div>

    )
}