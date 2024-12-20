import "../../app/components/heoooo.css"
import Image from "next/image";
const Hero = () => (
    <section className="hero">
        <div className="hero-content">
            <h1>Welcome to the Coffee Shop</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis culpa fugit porro quasi voluptatum esse dolorem itaque illum ex, odit voluptates dolor. Commodi sunt eveniet placeat omnis illo provident non..</p>
            <button className="btn">Explore Menu</button>
        </div>
        <div className="hero-image">
            <Image src="/b1.jpg" alt="A cup of coffee" height={500} width={500} />
        </div>
    </section>
);

export default Hero;
