import "./NotFound.css"
import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" />
                                    <h1 className="text-center ">404</h1>
                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <div href="" className="link_404" > <Link className="link-to" to="/">Go to home</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default NotFound;