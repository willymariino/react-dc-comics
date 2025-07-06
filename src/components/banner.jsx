function Banner() {
    return (
        <section className="banner">
            <div className="banner-item">
                <a href="#"><img src="/img/buy-comics-digital-comics.png" alt="Digital Comics" /> <p className="descriptor">DIGITAL COMICS</p></a>
            </div>
            <div className="banner-item">
                <a href="#"> <img src="/img/buy-comics-merchandise.png" alt="DC Merchandise" /> <p className="descriptor">DC MERCHANDISE</p> </a>

            </div>
            <div className="banner-item">
                <a href="#">  <img src="/img/buy-comics-subscriptions.png" alt="Subscription" /> <p className="descriptor">SUBSCRIPTION</p></a>
            </div>
            <div className="banner-item">
                <a href="#">  <img src="/img/buy-comics-shop-locator.png" alt="Comic Shop Locator" />  <p className="descriptor">COMIC SHOP LOCATOR</p> </a>

            </div>
            <div className="banner-item">
                <a href="#"> <img src="/img/buy-dc-power-visa.svg" alt="DC Power Visa" /> <p className="descriptor">DC POWER VISA</p> </a>
            </div>
        </section>
    );
}

export default Banner;