import type { Metadata } from "next";
import { Check, Cloud, Branch } from "@/components/Icons";
import { CONTACT_EMAIL, CONTACT_EMAIL_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the Ponup team about Cloud, self-hosting or your context engineering stack.",
};

export default function ContactPage() {
  return <section className="contact-page section-shell">
    <div className="contact-copy">
      <div className="pill"><span>●</span> LET’S TALK CONTEXT</div>
      <h1>Make your knowledge<br /><em>useful everywhere.</em></h1>
      <p>Tell us what your people know, what your AI needs and where the two stop connecting. We’ll help you find a practical way forward.</p>
      <div className="contact-points">
        <div><Cloud /><span><strong>Explore Ponup Cloud</strong><small>Join early access or plan a managed workspace.</small></span></div>
        <div><Branch /><span><strong>Plan a self-hosted rollout</strong><small>Talk architecture, integrations and migration.</small></span></div>
        <div><Check /><span><strong>Get a human answer</strong><small>No funnel maze. We read and reply to every note.</small></span></div>
      </div>
      <a className="direct-email" href={CONTACT_EMAIL_URL}><span>Prefer email?</span><strong>{CONTACT_EMAIL} ↗</strong></a>
    </div>
    <div className="contact-card">
      <div className="form-heading"><span className="section-kicker">START A CONVERSATION</span><h2>What are you building?</h2><p>Submitting opens your email app with the details ready to send.</p></div>
      <form action={CONTACT_EMAIL_URL} method="post" encType="text/plain">
        <div className="field-row"><label>Name<input name="name" type="text" placeholder="Ada Lovelace" required /></label><label>Work email<input name="email" type="email" placeholder="ada@company.com" required /></label></div>
        <label>Company <span>optional</span><input name="company" type="text" placeholder="Your organization" /></label>
        <label>What can we help with?<select name="interest" defaultValue="Ponup Cloud"><option>Ponup Cloud</option><option>Self-hosting</option><option>Enterprise / Scale</option><option>Technical question</option><option>Something else</option></select></label>
        <label>Tell us a little more<textarea name="message" rows={6} placeholder="We are building an agent that needs reliable access to…" required /></label>
        <label className="consent"><input type="checkbox" required /><span>I’m happy for Ponup to reply about this request.</span></label>
        <button className="button" type="submit">Send message <span>→</span></button>
      </form>
    </div>
  </section>;
}
