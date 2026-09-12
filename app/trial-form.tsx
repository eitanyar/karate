"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "972504731212";

export function TrialForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = `היי אריה, שמי ${name}. אשמח לתאם שיעור ניסיון בקראטה בראשון לציון. אפשר לחזור אליי ב-${phone}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return <form className="trial-form" onSubmit={submit}>
    <label>שם מלא<input required name="name" autoComplete="name" placeholder="איך קוראים לך?" /></label>
    <label>טלפון<input required name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="מספר לחזרה" /></label>
    <label className="consent"><input required type="checkbox" /> <span>אני מאשר/ת מסירת הפרטים לצורך חזרה אליי, בהתאם ל<a href="/privacy">מדיניות הפרטיות</a>.</span></label>
    <button className="button primary" type="submit">לתיאום שיעור ניסיון ללא עלות <span>←</span></button>
    <p className="form-note">הפרטים נשארים אצלנו בלבד. לחיצה תפתח WhatsApp עם הודעה מוכנה.</p>
    {sent && <p className="success" role="status">WhatsApp נפתח — נשמח לדבר איתך.</p>}
  </form>;
}
