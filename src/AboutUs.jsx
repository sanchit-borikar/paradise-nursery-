import React from 'react';

export default function AboutUs() {
  return (
    <main className="page-shell about-page">
      <section className="about-intro">
        <p className="eyebrow">ROOTED IN NATURE</p>
        <h1>A greener home starts here.</h1>
        <p className="about-lead">
          Paradise Nursery makes it easy to bring the calm, colour, and freshness of nature into
          everyday spaces.
        </p>
      </section>
      <section className="about-grid">
        <div className="about-photo" role="img" aria-label="Sunlit indoor plants on a shelf" />
        <div className="about-copy">
          <h2>Our story</h2>
          <p>
            We believe plants make a house feel more like home. Paradise Nursery is a houseplant
            shopping experience built for curious beginners and long-time plant parents alike.
          </p>
          <p>
            Our collection brings together air-purifying favourites, easy-care greenery, and
            characterful succulents. Every listing includes simple care-minded details to help you
            choose a plant that suits your space and routine.
          </p>
          <div className="about-values">
            <div><span>01</span><strong>Thoughtful choices</strong></div>
            <div><span>02</span><strong>Everyday plant care</strong></div>
            <div><span>03</span><strong>More green, more joy</strong></div>
          </div>
        </div>
      </section>
    </main>
  );
}
