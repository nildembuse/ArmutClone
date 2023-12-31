import "/src/App.css"

export default  function Content() {

    return(
        <div className="values">
               <div className="values_text">
                    <h3>Kaliteli Hizmet Al</h3>
                    <p>Teklif aldığın hizmet verenlerin kalitesini <br /> daha önceki işlerinde aldıkları gerçek müşteri <br /> yorumları sayesinde görür, güvenle kararını verirsin.</p>
               </div>
               <div className="values_image">
                    <img src="/src/img/qualty.jpg" alt="" />
               </div> 
          
               <div className="values_text">
                    <h3>Zaman Kazan</h3>
                    <p>Aradığın hizmet için dükkan dükkan dolaşmak ya da <br /> tanıdıklarından referans aramakla uğraşma. <br /> Teklifler cebine gelsin, zamanın sevdiklerinle sana kalsın.</p>
               </div>
               <div className="values_image">
                    <img src="/src/img/anlaşma.jpg" alt="" />
               </div> 
           
               <div className="values_text">
                    <h3>Garantide Ol</h3>
                    <p>Gönül rahatlığıyla hizmet alman için, <br /> Armut'tan teklif seçimi yaptığın işler garantimiz altında</p>
               </div>
               <div className="values_image">
                    <img src="/src/img/choose-best-time.jpg" alt="" />
               </div> 
         
               <div className="values_text">
                    <h3>Kolayca Kullan</h3>
                    <p>Hizmet alacağın servis için özel hazırlanmış <br /> sorularına bir dakika içinde cevap ver, bekleyen işlerini kolayca hallet.</p>
                </div>
                <div className="values_image">
                    <img src="/src/img/save-time.jpg" alt="" />
                </div>
        </div>

    )
}