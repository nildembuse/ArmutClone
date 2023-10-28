import { useState } from "react";
import '/src/App.css'

export default function Navbar() {
    return(
        <>
         <div className="navbar">
        
       <a href="#"><img className="logo" src="https://cdn.armut.com/images/armut-logo-colour-negative@3x.png" alt="" />
          <div className='back-img'>
            <div className="wrapper">
              <h1 className="widow-fix">Hizmet Piş, Ağzıma Düş</h1>
              <h2 className="widow-fix">İhtiyacın olan hizmete kolayca ulaş, bekleyen işlerini hallet</h2>
            </div>
          <ul className='linkler'>
              <li>Temizlik</li>
              <li>Tadilat</li>
              <li>Nakliyat</li>
              <li>Tamir</li>
              <li>Özel Ders</li>
              <li>Sağlık</li>
              <li>Organizasyon</li>
              <li>Diğer</li>
          </ul>
          </div>
          </a>
      </div>
      <div className='button'>
        <ul className='but-liste'>
          <li>
            <a href="" className='but'>YARDIM</a>
          </li>
          <li>
            <a href="" className='but-yesil'>HİZMET VER</a>
          </li>
          <li>
            <a href="" className='but'>GİRİŞ</a>
          </li>
        </ul>
        
      </div>
      
         
      
      
        </>
    )
}
