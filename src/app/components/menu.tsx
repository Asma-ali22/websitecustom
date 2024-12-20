
import "../../app/components/menu.css"
import Image from "next/image";
const Menu = () => {
    const coffeeItems = [
        { name: 'Espresso', price: '$5.00', image: '/b1.jpg' },
        { name: 'Latte', price: '$6.50', image: '/m2.jpeg' },
        { name: 'Cappuccino', price: '$6.00', image: '/m3.jpeg' },
        { name: 'Americano', price: '$4.50', image: '/m4.jpeg' },
        { name: 'Mocha', price: '$7.00', image: '/m13.jpeg' },
        { name: 'Macchiato', price: '$6.75', image: '/m6.jpg' },
        
    ];

    return (
        <section className="menu">
            <h2 className="menu-title">Our Coffee Menu</h2>
            <div className="menu-grid">
                {coffeeItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <Image src={item.image} alt={item.name}  width={500} height={500} className="menu-image" />
                        <h3 className="menu-name">{item.name}</h3>
                        <p className="menu-price">{item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;
