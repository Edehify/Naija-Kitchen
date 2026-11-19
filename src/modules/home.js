import egusiSoupImage from "../assets/images/egusi-soup.jpg";
import heroPageImage from "../assets/images/hero-page.jpg";
import jollofRiceImage from "../assets/images/jollof-rice.jpg";
import grilledFishImage from "../assets/images/grilled-fish.jpg";

export function createHomePage() {
    return `
            <div class="home-page">
                <section class="hero">
                    <h1>Welcome to Naija Kitchen</h1>
                    <p>Experience the authentic taste of Nigeria with our delicious dishes.</p>
                    <p>From traditional favorites to modern twists, we bring the flavors of Nigeria to your table.</p>
                    <img src=${heroPageImage} alt="Delicious Nigerian dishes">
                    <button id="explore-button">Explore Our Menu</button>
                </section>

                <section class="about">
                    <h2>About Us</h2>
                    <p>At Naija Kitchen, we are passionate about sharing the rich culinary heritage of Nigeria with the world. Our chefs use fresh ingredients and traditional recipes to create mouthwatering dishes that will transport you to the heart of Nigeria.</p>
                    <p>Whether you're a fan of spicy stews, savory soups, or sweet treats, we have something for everyone. Join us on a culinary journey and discover the flavors of Nigeria!</p>
                    <p>Visit our restaurant to experience the taste of Nigeria from the comfort of your home.</p>
                </section>

                <section class="featured-dishes">
                    <h2>Featured Dishes</h2>
                    <div class="dish">
                        <img src=${jollofRiceImage} alt="Jollof Rice">
                        <h3>Jollof Rice</h3>
                        <p>A classic West African dish made with rice, tomatoes, and a blend of spices. Served with your choice of protein.</p>
                    </div>
                    <div class="dish">
                    <img src=${egusiSoupImage} alt="Egusi Soup">
                        <h3>Egusi Soup</h3>
                        <p>A rich and flavorful soup made with ground melon seeds, vegetables, and your choice of meat or fish. Served with pounded yam or fufu.</p>
                    </div>
                    <div class="dish">
                        <img src=${grilledFishImage} alt="Grilled Fish">
                        <h3>Grilled Fish</h3>
                        <p>Freshly caught fish grilled to perfection and seasoned with traditional Nigerian spices. Served with rice and salad.</p>
                    </div>
                </section>

                <section class="why-choose-us">
                    <h2>Why Choose Naija Kitchen?</h2>
                    <ul>
                        <li>Authentic Nigerian Cuisine: We use traditional recipes and fresh ingredients to create dishes that capture the true flavors of Nigeria.</li>   
                        <li>Experienced Chefs: Our chefs are skilled in Nigerian cooking techniques and are passionate about delivering delicious meals.</li>
                        <li>Our Service: We are committed to providing excellent customer service and ensuring that every dining experience is memorable.</li>

                    </ul>
                </section>

                <section class="call-to-action">
                    <h2>Ready to Taste Nigeria?</h2>
                    <p>Visit our restaurant  to experience the flavors of Nigeria!</p>
                          
                </section>
            </div>
    `;
}


