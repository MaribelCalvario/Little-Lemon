import React from 'react';

function Testimonials() {
  return (
    // 1. Upgraded container to <section>
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      {/* 2. Fixed heading hierarchy to H2 */}
      <h2 id="testimonials-title">Testimonials</h2>
      <div className="testimonials-grid">
        
        {/* Card 1: John Doe - Upgraded to <article> */}
        <article className="testimonial-card">
          {/* 3. Combined stars into one hidden container with an accessible visual label */}
          <div className="star-rating" aria-label="5 out of 5 stars">
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />  
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
          </div>
          
          {/* 4. Wrapped review text inside a semantic figure/blockquote box */}
          <figure className="testimonial-content">
            <blockquote>"Great food!"</blockquote>
            <div className="author-info">
              <img src="/file.jpg" alt="John Doe" className="testimonial-img" width="30" height="30" />
              <figcaption> - John Doe</figcaption>
            </div>
          </figure>
        </article>

         {/* Card 2: Jane Miller */}
         <article className="testimonial-card">
          <div className="star-rating" aria-label="5 out of 5 stars">
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />  
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
          </div>
          <figure className="testimonial-content">
            <blockquote>"Great food!"</blockquote>
            <div className="author-info">
              <img src="/file1.jpg" alt="Jane Miller" className="testimonial-img" width="30" height="30" />
              <figcaption> - Jane Miller</figcaption>
            </div>
          </figure>
        </article>
          
         {/* Card 3: Joanne Smith */}
         <article className="testimonial-card">
          <div className="star-rating" aria-label="5 out of 5 stars">
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />  
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
          </div>
          <figure className="testimonial-content">
            <blockquote>"Great food!"</blockquote>
            <div className="author-info">
              <img src="/file3.jpg" alt="Joanne Smith" className="testimonial-img" width="30" height="30" />
              <figcaption> - Joanne Smith</figcaption>
            </div>
          </figure>
        </article>
        
        {/* Card 4: Joe Johnson */}
        <article className="testimonial-card">
          <div className="star-rating" aria-label="5 out of 5 stars">
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />  
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
            <img src="/file2.jpg" alt="" aria-hidden="true" width="30" height="30" />
          </div>
          <figure className="testimonial-content">
            <blockquote>"Highly recommend!"</blockquote>
            <div className="author-info">
              <img src="/file4.jpg" alt="Joe Johnson" className="testimonial-img" width="30" height="30" />
              <figcaption> - Joe Johnson</figcaption>
            </div>
          </figure>
        </article>

      </div>
    </section>
  );
}

export default Testimonials;