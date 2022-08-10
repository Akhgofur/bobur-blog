import { SiteFooter } from "../home/footer/footer.component"
import { SiteHeader } from "../home/header/header.component"
import { SingleMain } from "./single-main/single-main.component"

export const SinglePost = () => {
    
    return(
        <>
        <div className="container">
            <SiteHeader/>
            <SingleMain/>
        </div>
        <SiteFooter/>
        </>
    )
}