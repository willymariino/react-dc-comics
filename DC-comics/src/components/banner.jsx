function Banner() {
    return (
        <section className="banner">
            <div className="banner-item">
                <a href="#"><img src="/img/buy-comics-digital-comics.png" alt="Digital Comics" /></a>
                <p className="descriptor">DIGITAL COMICS</p>
            </div>
            <div className="banner-item">
                <a href="#"> <img src="/img/buy-comics-merchandise.png" alt="DC Merchandise" /> </a>
                <p className="descriptor">DC MERCHANDISE</p>
            </div>
            <div className="banner-item">
                <a href="#">  <img src="/img/buy-comics-subscriptions.png" alt="Subscription" /> </a>
                <p className="descriptor">SUBSCRIPTION</p>
            </div>
            <div className="banner-item">
                <a href="#">  <img src="/img/buy-comics-shop-locator.png" alt="Comic Shop Locator" /> </a>
                <p className="descriptor">COMIC SHOP LOCATOR</p>
            </div>
            <div className="banner-item">
                <img src="/img/buy-dc-power-visa.svg" alt="DC Power Visa" />
                <p className="descriptor">DC POWER VISA</p>
            </div>
        </section>
    );
}

export default Banner;