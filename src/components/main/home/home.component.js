import { SiteHeader } from "./header/header.component"
import { HomeMain } from "./home-main/home-main.component";
import { SiteFooter } from "./footer/footer.component";

export const Home = () => {
    return(
        <>
        <div className="container">
            <SiteHeader/>
            <HomeMain/>
        </div>
        <SiteFooter/>
        </>
    )
}