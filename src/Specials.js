import React from 'react';

function Specials() {
  return (
    <div className="specials-section">
      <div className="specials-header">
        <h3>This week's specials!</h3>
        <button className="menu-btn">Online Menu</button>
      </div>
      
      {/* Grid Container for all 3 Cards */}
      <div className="cards-grid">
        
        {/* Card 1: Greek Salad */}
        <div className="special-card">
          <img src="/greek-salad.jpg" alt="Greek Salad" className="card-img" />
          <div className="card-info">
            <h4>Greek salad <span>$12.99</span></h4>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <a href="#order">Order a delivery <span className="delivery-icon">🚚</span></a>
          </div>
        </div>

        {/* Card 2: Bruschetta */}
        <div className="special-card">
          <img src="/bruchetta.svg" alt="Bruchetta" className="card-img" />
          <div className="card-info">
            <h4>Bruchetta <span>$5.99</span></h4>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <a href="#order">Order a delivery <span className="delivery-icon">🚚</span></a>
          </div>
        </div>

        {/* Card 3: Lemon Dessert */}
        <div className="special-card">
          <img src="/lemondessert.jpg" alt="Lemon Dessert" className="card-img" />
          <div className="card-info">
            <h4>Lemon Dessert <span>$5.00</span></h4>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href="#order">Order a delivery <span className="delivery-icon">🚚</span></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Specials;