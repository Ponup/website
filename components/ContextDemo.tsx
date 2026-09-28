import Image from "next/image";

export function ContextDemo() {
  return (
    <div className="context-demo" aria-label="Ponup context search example">
      <div className="demo-topbar"><span /><span /><span /><b>Product Brain / Search</b><em>⌘ K</em></div>
      <div className="demo-body">
        <div className="demo-sidebar">
          <div className="mini-logo"><Image src="/icon.png" alt="" width={24} height={24} /></div>
          <span className="side-label">SPACES</span>
          <div className="side-item active"><i>PB</i><span>Product Brain<small>42 sources</small></span></div>
          <div className="side-item"><i>CS</i><span>Customer stories<small>18 sources</small></span></div>
          <div className="side-item"><i>EN</i><span>Engineering<small>31 sources</small></span></div>
        </div>
        <div className="demo-content">
          <span className="demo-eyebrow">SEMANTIC SEARCH</span>
          <div className="search-query"><span>⌕</span><b>What are our enterprise security commitments?</b><kbd>↵</kbd></div>
          <div className="answer-line"><span>3 passages found</span><small>in 84ms</small></div>
          <article className="result-card featured">
            <div><span className="file-icon">◇</span><strong>Enterprise security overview</strong><b>96%</b></div>
            <p>All customer data is encrypted in transit and at rest. Enterprise workspaces include SSO, audit logs and configurable retention…</p>
            <footer><span>security</span><span>enterprise</span><small>Passage 4 of 12</small></footer>
          </article>
          <article className="result-card">
            <div><span className="file-icon">{`{ }`}</span><strong>Security FAQ</strong><b>89%</b></div>
            <p>Data residency options are available to enterprise customers. Contact the security team for a current compliance package…</p>
            <footer><span>faq</span><span>compliance</span><small>Passage 2 of 8</small></footer>
          </article>
        </div>
      </div>
    </div>
  );
}
