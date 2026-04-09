<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Wall Calendar — README</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
<style>
  :root {
    --cream: #f5f0e8;
    --ink: #1a1714;
    --blue: #2563eb;
    --blue-light: #dbeafe;
    --gold: #d97706;
    --muted: #6b6560;
    --border: #e5ddd0;
    --card: #ffffff;
    --spiral: #c8b8a2;
    --red-accent: #ef4444;
    --green-accent: #16a34a;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--ink);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* SPIRAL HEADER */
  .spiral-bar {
    background: #e8e2da;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    padding: 14px 0 12px;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .spiral-hole {
    width: 20px; height: 20px;
    border-radius: 50%;
    background: var(--cream);
    border: 2px solid var(--spiral);
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.12), 0 1px 2px rgba(255,255,255,0.8);
    position: relative;
  }
  .spiral-hole::after {
    content: '';
    position: absolute;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: rgba(0,0,0,0.08);
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
  }

  /* HERO */
  .hero {
    position: relative;
    z-index: 1;
    padding: 80px 40px 60px;
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 40px;
    align-items: start;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--blue);
    background: var(--blue-light);
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 20px;
    border: 1px solid #bfdbfe;
  }

  .hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(52px, 8vw, 88px);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.03em;
    color: var(--ink);
  }

  .hero h1 .wall { display: block; }
  .hero h1 .calendar {
    display: block;
    -webkit-text-stroke: 2px var(--blue);
    color: transparent;
  }

  .hero-desc {
    font-size: 16px;
    color: var(--muted);
    line-height: 1.7;
    max-width: 480px;
    margin-top: 20px;
    font-weight: 300;
  }

  .hero-year {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--muted);
    margin-top: 28px;
    letter-spacing: 0.08em;
  }

  /* Mini calendar preview */
  .mini-cal {
    background: white;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06);
    width: 220px;
    flex-shrink: 0;
    border: 1px solid var(--border);
    position: relative;
    overflow: hidden;
  }
  .mini-cal::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: 70px;
    background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
  }
  .mini-cal-header {
    position: relative;
    z-index: 1;
    color: white;
    margin-bottom: 14px;
  }
  .mini-cal-month {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .mini-cal-year { font-size: 22px; font-weight: 800; font-family: 'Syne', sans-serif; }
  .mini-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    margin-top: 10px;
  }
  .mini-day {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-family: 'DM Mono', monospace;
    border-radius: 4px;
    color: var(--ink);
  }
  .mini-day.head { color: var(--muted); font-weight: 600; font-size: 8px; }
  .mini-day.today { background: var(--blue); color: white; font-weight: 700; border-radius: 50%; }
  .mini-day.range { background: #dbeafe; }
  .mini-day.range-start { background: var(--blue); color: white; }
  .mini-day.wknd { color: var(--red-accent); }

  /* DIVIDER */
  .section-divider {
    max-width: 900px; margin: 0 auto;
    padding: 0 40px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .section-divider span {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--muted);
    white-space: nowrap;
  }
  .section-divider hr { flex: 1; border: none; border-top: 1px dashed var(--border); }

  /* SECTIONS */
  .section {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 40px;
    position: relative;
    z-index: 1;
  }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 28px;
    color: var(--ink);
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .section-title .num {
    font-size: 12px;
    font-family: 'DM Mono', monospace;
    color: var(--muted);
    font-weight: 400;
    margin-left: 4px;
  }

  /* FEATURES */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .feature-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 22px 24px;
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative;
    overflow: hidden;
  }
  .feature-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.08);
  }
  .feature-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--blue), #60a5fa);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .feature-card:hover::after { opacity: 1; }

  .feature-icon { font-size: 26px; margin-bottom: 12px; display: block; }
  .feature-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px; margin-bottom: 6px; color: var(--ink); }
  .feature-desc { font-size: 13px; color: var(--muted); line-height: 1.6; }

  /* TECH STACK */
  .stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 14px;
  }

  .stack-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 18px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    font-weight: 500;
    color: var(--ink);
    transition: all 0.2s;
  }
  .stack-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  .stack-icon {
    width: 36px; height: 36px;
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
  }

  .stack-label { font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 500; }
  .stack-sub { font-size: 10px; color: var(--muted); margin-top: 1px; }

  /* INSTALL */
  .code-block {
    background: var(--ink);
    border-radius: 12px;
    padding: 28px 32px;
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    line-height: 1.8;
    color: #e5e7eb;
    position: relative;
    overflow: hidden;
  }
  .code-block .dots { display: flex; gap: 6px; margin-bottom: 18px; }
  .code-block .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-r { background: #ef4444; }
  .dot-y { background: #f59e0b; }
  .dot-g { background: #22c55e; }
  .code-comment { color: #6b7280; }
  .code-cmd { color: #60a5fa; }
  .code-str { color: #34d399; }
  .code-dir { color: #a78bfa; }

  /* FILE TREE */
  .file-tree {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 24px 28px;
    font-family: 'DM Mono', monospace;
    font-size: 12.5px;
    line-height: 2;
  }
  .tree-dir { color: var(--blue); font-weight: 600; }
  .tree-file { color: var(--ink); }
  .tree-comment { color: var(--muted); margin-left: 8px; font-size: 11px; }
  .tree-indent { padding-left: 20px; }

  /* BADGES */
  .badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 100px;
    font-size: 11px;
    font-family: 'DM Mono', monospace;
    font-weight: 500;
    border: 1px solid;
  }
  .badge-blue { background: #eff6ff; border-color: #bfdbfe; color: #1d4ed8; }
  .badge-green { background: #f0fdf4; border-color: #bbf7d0; color: #15803d; }
  .badge-amber { background: #fffbeb; border-color: #fde68a; color: #b45309; }
  .badge-purple { background: #faf5ff; border-color: #e9d5ff; color: #7e22ce; }
  .badge-gray { background: #f9fafb; border-color: #e5e7eb; color: #374151; }

  /* FOOTER */
  .footer {
    border-top: 1px solid var(--border);
    padding: 40px;
    max-width: 900px;
    margin: 40px auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
  .footer-brand { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 18px; color: var(--ink); }
  .footer-license { font-size: 12px; font-family: 'DM Mono', monospace; color: var(--muted); }

  @media (max-width: 680px) {
    .hero { grid-template-columns: 1fr; padding: 48px 24px 40px; }
    .mini-cal { display: none; }
    .section { padding: 32px 24px; }
    .features-grid { grid-template-columns: 1fr; }
    .section-divider { padding: 0 24px; }
    .footer { flex-direction: column; gap: 12px; padding: 28px 24px; text-align: center; }
  }
</style>
</head>
<body>

<div class="spiral-bar">
  <div class="spiral-hole"></div><div class="spiral-hole"></div><div class="spiral-hole"></div>
  <div class="spiral-hole"></div><div class="spiral-hole"></div><div class="spiral-hole"></div>
  <div class="spiral-hole"></div><div class="spiral-hole"></div><div class="spiral-hole"></div>
  <div class="spiral-hole"></div><div class="spiral-hole"></div><div class="spiral-hole"></div>
</div>

<div class="hero">
  <div>
    <div class="hero-tag">📅 Open Source Project</div>
    <h1>
      <span class="wall">Wall</span>
      <span class="calendar">Calendar</span>
    </h1>
    <p class="hero-desc">
      A beautifully crafted, interactive wall calendar for the web. Supports date-range selection, monthly notes, dark mode, and seasonal imagery — all in a single Next.js app.
    </p>
    <div class="badges">
      <span class="badge badge-blue">✦ Next.js 14</span>
      <span class="badge badge-green">✦ TypeScript</span>
      <span class="badge badge-amber">✦ Tailwind CSS</span>
      <span class="badge badge-purple">✦ MIT License</span>
      <span class="badge badge-gray">✦ v1.0.0</span>
    </div>
    <p class="hero-year">© 2026 — Wall Calendar</p>
  </div>

  <div class="mini-cal">
    <div class="mini-cal-header">
      <div class="mini-cal-month">April</div>
      <div class="mini-cal-year">2026</div>
    </div>
    <div class="mini-grid">
      <div class="mini-day head">M</div><div class="mini-day head">T</div><div class="mini-day head">W</div>
      <div class="mini-day head">T</div><div class="mini-day head">F</div>
      <div class="mini-day head wknd">S</div><div class="mini-day head wknd">S</div>
      <div class="mini-day"></div><div class="mini-day">1</div><div class="mini-day">2</div>
      <div class="mini-day">3</div><div class="mini-day">4</div>
      <div class="mini-day wknd">5</div><div class="mini-day wknd">6</div>
      <div class="mini-day">7</div><div class="mini-day">8</div><div class="mini-day today">9</div>
      <div class="mini-day range">10</div><div class="mini-day range">11</div>
      <div class="mini-day range wknd">12</div><div class="mini-day range wknd">13</div>
      <div class="mini-day range-start">14</div><div class="mini-day">15</div><div class="mini-day">16</div>
      <div class="mini-day">17</div><div class="mini-day">18</div>
      <div class="mini-day wknd">19</div><div class="mini-day wknd">20</div>
      <div class="mini-day">21</div><div class="mini-day">22</div><div class="mini-day">23</div>
      <div class="mini-day">24</div><div class="mini-day">25</div>
      <div class="mini-day wknd">26</div><div class="mini-day wknd">27</div>
      <div class="mini-day">28</div><div class="mini-day">29</div><div class="mini-day">30</div>
    </div>
  </div>
</div>

<div class="section-divider"><hr/><span>Features</span><hr/></div>
<div class="section">
  <div class="section-title">What's inside <span class="num">// 01</span></div>
  <div class="features-grid">
    <div class="feature-card">
      <span class="feature-icon">📆</span>
      <div class="feature-name">Month Navigation</div>
      <div class="feature-desc">Flip through months with smooth page-turn animations. Jump back to today in one click.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">🎯</span>
      <div class="feature-name">Date Range Selection</div>
      <div class="feature-desc">Click to start a range, hover to preview, click again to finalize. Live highlight as you drag.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">📝</span>
      <div class="feature-name">Sticky Notes</div>
      <div class="feature-desc">Attach monthly or date-range notes. Notes persist to localStorage across sessions.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">🌙</span>
      <div class="feature-name">Dark / Light Mode</div>
      <div class="feature-desc">Toggle between themes. Preference saved and applied instantly without flash.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">🖼️</span>
      <div class="feature-name">Seasonal Hero Images</div>
      <div class="feature-desc">Each month gets a curated Unsplash hero image that transitions smoothly on navigation.</div>
    </div>
    <div class="feature-card">
      <span class="feature-icon">💾</span>
      <div class="feature-name">Persistent State</div>
      <div class="feature-desc">All data — notes, theme, current month — survive page refreshes via localStorage.</div>
    </div>
  </div>
</div>

<div class="section-divider"><hr/><span>Tech Stack</span><hr/></div>
<div class="section">
  <div class="section-title">Built with <span class="num">// 02</span></div>
  <div class="stack-grid">

    <div class="stack-card">
      <div class="stack-icon" style="background:#000;color:#fff;font-size:17px;font-weight:900;font-family:'Syne',sans-serif;letter-spacing:-1px;justify-content:center;">N.</div>
      <div><div class="stack-label">Next.js 14</div><div class="stack-sub">App Router</div></div>
    </div>

    <div class="stack-card">
      <div class="stack-icon" style="background:#3178c6;color:#fff;">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
      </div>
      <div><div class="stack-label">TypeScript</div><div class="stack-sub">Strict mode</div></div>
    </div>

    <div class="stack-card">
      <div class="stack-icon" style="background:#06b6d4;color:#fff;">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
      </div>
      <div><div class="stack-label">Tailwind CSS</div><div class="stack-sub">Utility-first</div></div>
    </div>

    <div class="stack-card">
      <div class="stack-icon" style="background:#61dafb20;border:1.5px solid #61dafb50;">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#61dafb"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
      </div>
      <div><div class="stack-label">React 18</div><div class="stack-sub">Hooks + state</div></div>
    </div>

    <div class="stack-card">
      <div class="stack-icon" style="background:#fff7ed;font-size:20px;">🖼️</div>
      <div><div class="stack-label">Unsplash</div><div class="stack-sub">Hero images</div></div>
    </div>

    <div class="stack-card">
      <div class="stack-icon" style="background:#fef9ee;font-size:20px;">⚡</div>
      <div><div class="stack-label">lucide-react</div><div class="stack-sub">Icons</div></div>
    </div>

    <div class="stack-card">
      <div class="stack-icon" style="background:#fff1f2;font-size:20px;">💾</div>
      <div><div class="stack-label">localStorage</div><div class="stack-sub">Persistence</div></div>
    </div>

  </div>
</div>

<div class="section-divider"><hr/><span>Getting Started</span><hr/></div>
<div class="section">
  <div class="section-title">Installation <span class="num">// 03</span></div>
  <div class="code-block">
    <div class="dots">
      <div class="dot dot-r"></div>
      <div class="dot dot-y"></div>
      <div class="dot dot-g"></div>
    </div>
    <div><span class="code-comment"># Clone the repository</span></div>
    <div><span class="code-cmd">git clone</span> <span class="code-str">https://github.com/you/wall-calendar.git</span></div>
    <div style="margin-top:6px;"><span class="code-cmd">cd</span> <span class="code-dir">wall-calendar</span></div>
    <div style="margin-top:12px;"><span class="code-comment"># Install dependencies</span></div>
    <div><span class="code-cmd">npm install</span></div>
    <div style="margin-top:12px;"><span class="code-comment"># Start the dev server</span></div>
    <div><span class="code-cmd">npm run dev</span></div>
    <div style="margin-top:12px; color:#6b7280;"># Open <span style="color:#34d399">http://localhost:3000</span> in your browser</div>
  </div>
</div>

<div class="section-divider"><hr/><span>Project Structure</span><hr/></div>
<div class="section">
  <div class="section-title">File Tree <span class="num">// 04</span></div>
  <div class="file-tree">
    <div><span class="tree-dir">src/</span></div>
    <div class="tree-indent">
      <div><span class="tree-dir">components/WallCalendar/</span></div>
      <div class="tree-indent">
        <div><span class="tree-file">index.tsx</span><span class="tree-comment">— Root component, state orchestration</span></div>
        <div><span class="tree-file">CalendarGrid.tsx</span><span class="tree-comment">— Month grid, range hover logic</span></div>
        <div><span class="tree-file">ImagePanel.tsx</span><span class="tree-comment">— Hero image + navigation controls</span></div>
        <div><span class="tree-file">NotesSection.tsx</span><span class="tree-comment">— Monthly &amp; range note management</span></div>
        <div><span class="tree-file">Spirals.tsx</span><span class="tree-comment">— Decorative spiral holes header</span></div>
        <div><span class="tree-file">types.ts</span><span class="tree-comment">— Shared TypeScript types</span></div>
        <div><span class="tree-file">utils.ts</span><span class="tree-comment">— Date helpers, grid builder</span></div>
        <div><span class="tree-file">constants.ts</span><span class="tree-comment">— Month names, hero images, labels</span></div>
      </div>
      <div><span class="tree-dir">app/</span></div>
      <div class="tree-indent">
        <div><span class="tree-file">page.tsx</span><span class="tree-comment">— Entry page</span></div>
        <div><span class="tree-file">globals.css</span><span class="tree-comment">— Tailwind base + custom CSS</span></div>
      </div>
    </div>
  </div>
</div>

<div class="footer">
  <div class="footer-brand">📅 Wall Calendar</div>
  <div class="footer-license">MIT License · Built with Next.js + TypeScript</div>
</div>

</body>
</html>
