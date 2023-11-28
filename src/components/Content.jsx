import "/src/App.css"

export default  function Content() {

    return(
        <div className="content">
           
           <div className="values">
                <h3>Kaliteli Hizmet Al</h3>
                <p>Teklif aldığın hizmet verenlerin kalitesini daha önceki işlerinde aldıkları <br /> gerçek müşteri yorumları sayesinde görür, güvenle kararını verirsin.</p>
                <img src="/src/img/qualty.jpg" alt="" />
           </div>
           <div className="values2">
                <h3>Zaman Kazan</h3>
                <p>Aradığın hizmet için dükkan dükkan dolaşmak ya da tanıdıklarından referans aramakla uğraşma. Teklifler cebine gelsin, zamanın sevdiklerinle sana kalsın.</p>
                <img src="/src/img/anlaşma.jpg" alt="" />
           </div>
           <div className="values3">
                <h3>Garantide Ol</h3>
                <p>Gönül rahatlığıyla hizmet alman için, Armut'tan teklif seçimi yaptığın işler garantimiz altında</p>
                <img src="/src/img/choose-best-time.jpg" alt="" />
           </div>
           <div className="values4">
                <h3>Kolayca Kullan</h3>
                <p>Hizmet alacağın servis için özel hazırlanmış sorularına bir dakika içinde cevap ver, bekleyen işlerini kolayca hallet.</p>
                <img src="/src/img/save-time.jpg" alt="" />
           </div>

        </div>
    )
}