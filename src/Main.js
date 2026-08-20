
import React from 'react';

function Main() {
  return (
    <main className="container main-content">
      
      {/* 1. SPECIALS SECTION */}
      <div className="specials-section">
        <div className="specials-header">
          <h3>This week's specials!</h3>
          <button className="menu-btn">Online Menu</button>
        </div>
        
        {/* Grid Container for the 3 Cards */}
        <div className="cards-grid">
          
          {/* Card 1 */}
          <div className="special-card">
            {/* UPDATED: Serving directly from public root */}
            <img src="/greek-salad.jpg" alt="Greek Salad" className="card-img" />
            <div className="card-info">
              <h4>Greek salad <span>$12.99</span></h4>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <a href="#order">Order a delivery <span className="delivery-icon">🚚</span></a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="special-card">
            {/* UPDATED: Serving directly from public root */}
            <img src="/bruchetta.svg" alt="Bruchetta" className="card-img" />
            <div className="card-info">
              <h4>Bruchetta <span>$5.99</span></h4>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <a href="#order">Order a delivery <span className="delivery-icon">🚚</span></a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="special-card">
            {/* UPDATED: Serving directly from public root */}
            <img src="/lemondessert.jpg" alt="Lemon Dessert" className="card-img" />
            <div className="card-info">
              <h4>Lemon Dessert <span>$5.00</span></h4>
              <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <a href="#order">Order a delivery <span className="delivery-icon">🚚</span></a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. TESTIMONIALS SECTION */}
      <div className="testimonials-section">
        <h3>Testimonials</h3>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />  
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <p>"Great food!"</p>
            <img src="/file.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <p> - John Doe</p>
          </div>

           <div className="testimonial-card">
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />  
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <p>"Great food!"</p>
            <img src="/file1.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <p> - Jane Miller</p>
          </div>
            
           <div className="testimonial-card">
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />  
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <p>"Great food!"</p>
            <img src="/file3.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <p> - Joanne Smith</p>
          </div>
          
          <div className="testimonial-card">
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />  
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <img src="/file2.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <p>"Highly recommend!"</p>
            <img src="/file4.jpg" alt="Customer" className="testimonial-img" width="30" height="30" />
            <p> - Joe Johnson</p>
          </div>
        </div>
      </div>

    </main>
  );
}

export default Main;
