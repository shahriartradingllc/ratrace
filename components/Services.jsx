export default function Services(){
  return (
    <div className="grid" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
      <div className="card">
        <h3>Product Sourcing</h3>
        <p>Find vetted suppliers and negotiate the best terms for your needs.</p>
      </div>
      <div className="card">
        <h3>Quality Control</h3>
        <p>Factory audits and pre‑shipment inspections to ensure standards.</p>
      </div>
      <div className="card">
        <h3>Logistics</h3>
        <p>Shipping, customs, and last‑mile coordination handled end‑to‑end.</p>
      </div>
    </div>
  );
}
