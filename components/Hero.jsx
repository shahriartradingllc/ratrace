export default function Hero(){
  return (
    <div className="hero">
      <div>
        <h1>Trusted partner for sourcing & supply</h1>
        <p>
          We help businesses source quality products at competitive prices and deliver on time.
          From vendor selection to logistics — we handle end‑to‑end so you can focus on growth.
        </p>
        <div style={{display:'flex', gap:12, marginTop:16}}>
          <a href="#services" className="btn">Explore Services</a>
          <a href="#contact" className="btn btn-accent">Get a Quote</a>
        </div>
      </div>
      <div className="card">
        <h2>Why work with us</h2>
        <ul style={{margin:0,paddingLeft:18,lineHeight:1.9}}>
          <li>Global supplier network</li>
          <li>Quality assurance & inspection</li>
          <li>Transparent pricing</li>
          <li>On‑time delivery</li>
        </ul>
      </div>
    </div>
  );
}
