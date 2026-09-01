import React from 'react';

function Specials() {
  return (
    // 1. Upgraded wrapper to <section>
    <section className="specials-section" aria-labelledby="specials-title">
      <div className="specials-header">
        {/* 2. Changed to H2 for sequential heading order */}
        <h2 id="specials-title">This week's specials!</h2>
        <button className="menu-btn">Online Menu</button>
      </div>
      
      {/* Grid Container for all 3 Cards */}
      <div className="cards-grid">
        
        {/* Card 1: Greek Salad - Upgraded to <article> */}
        <article className="special-card">
          <img src="/greek-salad.jpg" alt="Greek Salad" className="card-img" />
          <div className="card-info">
            {/* 3. Changed to H3 to nest cleanly under H2 */}
            <h3>Greek salad <span>$12.99</span></h3>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            {/* 4. Added explicit aria-label and hid decorative emoji */}
            <a href="#order" aria-label="Order a delivery of Greek salad">
              Order a delivery <span className="delivery-icon" aria-hidden="true">🚚</span>
            </a>
          </div>
        </article>

        {/* Card 2: Bruschetta - Upgraded to <article> */}
        <article className="special-card">
          <img src="/bruchetta.svg" alt="Bruchetta" className="card-img" />
          <div className="card-info">
            <h3>Bruchetta <span>$5.99</span></h3>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <a href="#order" aria-label="Order a delivery of Bruschetta">
              Order a delivery <span className="delivery-icon" aria-hidden="true">🚚</span>
            </a>
          </div>
        </article>

        {/* Card 3: Lemon Dessert - Upgraded to <article> */}
        <article className="special-card">
          <img src="/lemondessert.jpg" alt="Lemon Dessert" className="card-img" />
          <div className="card-info">
            <h3>Lemon Dessert <span>$5.00</span></h3>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href="#order" aria-label="Order a delivery of Lemon Dessert">
              Order a delivery <span className="delivery-icon" aria-hidden="true">🚚</span>
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Specials;