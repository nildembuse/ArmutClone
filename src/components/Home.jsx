import Container from "./Container"
import Content from "./Content"
import User from "./User"
import Services from "./Services"
export default function Home () {
    return(
        <>
        <header className="masthead">
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>Hizmet Piş, Ağzıma Düş</h1>
                            <span className="subheading">İhtiyacın olan hizmete kolayca ulaş, bekleyen işlerini hallet</span>
                            <app-root-wizard placeholder="hangi hizmeti arıyorsun?" jobsource="homepage_search" buttontext="Ara" pagescreennname="HomePageWizard" ng-version="14.2.10"><router-outlet></router-outlet><modal></modal><div loadingfield=""></div><div alert=""></div><data-collector></data-collector></app-root-wizard>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div>
             <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                     <div className="col-md-10 col-lg-8 col-xl-7">
                    
                        <div className="post-preview">
                           
                            <Container/>
                            <Content/>
                            <Services />
                            <User/>
                        </div>
                   
                    </div>
                </div>
            </div>
        </div>
        </>


      
      
    )
}