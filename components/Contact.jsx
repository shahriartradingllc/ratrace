"use client";
import { useState } from "react";

export default function Contact(){
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function onSubmit(e){
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name")?.toString() || "",
      email: form.get("email")?.toString() || "",
      message: form.get("message")?.toString() || "",
    };

    try{
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if(res.ok){
        setStatus({ ok:true, msg: data.message || "Message sent!" });
        e.currentTarget.reset();
      }else{
        setStatus({ ok:false, msg: data.error || "Something went wrong." });
      }
    }catch(err){
      setStatus({ ok:false, msg: "Network error." });
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h2>Contact</h2>
      <p>Send us a message and we’ll get back within 24 hours.</p>
      <form onSubmit={onSubmit} className="grid form-grid">
        <input className="input" name="name" placeholder="Your name" required />
        <input className="input" name="email" type="email" placeholder="Your email" required />
        <textarea className="full" name="message" placeholder="Tell us about your needs..." required />
        <button className="btn btn-accent full" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status && (
        <div style={{marginTop:12, padding:12, borderRadius:12, border:"1px solid rgba(255,255,255,.1)", background: status.ok ? "rgba(0,209,178,.12)" : "rgba(255,65,84,.12)"}}>
          {status.msg}
        </div>
      )}
    </div>
  );
}
