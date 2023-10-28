import React from 'react'
import '/src/components/css/Footer.css'


const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footerDesc'>
          <div className='footerComment'>
            <section>
              <h6 className='armutFooter'>En Çok Aranan </h6>
              <nav className='armutFooterYazilar'>
                <a href="#">
                  <p>İstanbul Boş Ev Temizliği</p>
                </a>
                <a href="#">
                    <p>İstanbul Boyacı(Boya Badana Ustası)</p>
                </a>
                <a href="#">
                    <p>İstanbul Parça Eşya Taşıma</p>
                </a>
                <a href="#">
                    <p>İstanbul Ev Temizliği</p>
                </a> 
                 <a href="#">
                    <p>Ankara Evden Eve Nakliyat</p>
                </a>
                <a href="#">
                    <p>İzmir Evden Eve Nakliyat</p>
                </a>
                <a href="#">
                    <p>İstanbul Evden Eve Nakliyat</p>
                </a>
                <a href="#">
                    <p>İstanbul Şehirler Arası Nakliyat</p>
                </a>
                
              </nav>
            </section>

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

          </div>
        </div>
      </div>

    </>
  )
}


export default Footer;