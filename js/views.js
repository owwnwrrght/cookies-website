
export const getHomeView = () => `
  <!-- Hero Section -->
  <section class="section" style="padding-top: 120px; padding-bottom: 60px; text-align: center;">
    <div class="container">
      <h1>Master your attention.</h1>
      <p class="subhead" style="max-width: 600px; margin: 0 auto 32px;">
        The physical interface for a distracted world.
      </p>
      
      <div style="display: flex; gap: 16px; justify-content: center; align-items: center; margin-bottom: 60px;">
        <a href="#/get-cookies" class="btn btn-primary">Order Cookies $99</a>
        <a href="#features" class="btn btn-link">Learn more ></a>
      </div>

      <!-- Hero Image -->
      <div class="hero-image-container animate-on-scroll">
        <img src="assets/hero-product.png" alt="Cookies Device" style="width: 100%; max-width: 600px; height: auto; border-radius: 20px;">
      </div>
    </div>
  </section>

  <!-- Recognition / Social Proof -->
  <section class="section" style="padding: 40px 0; border-bottom: 1px solid #d2d2d7;">
    <div class="container text-center">
      <p style="font-size: 10px; font-weight: 600; letter-spacing: 0.05em; color: #86868b; text-transform: uppercase; margin-bottom: 16px;">
        Recognized by
      </p>
      <div style="display: flex; justify-content: center; gap: 40px; color: #86868b; font-weight: 600; font-size: 14px;">
        <span>TheVerge</span>
        <span>TechCrunch</span>
        <span>WIRED</span>
        <span>FastCompany</span>
      </div>
    </div>
  </section>

  <!-- How it Works -->
  <section id="features" class="section">
    <div class="container">
      <h2>How it works.</h2>
      <p class="subhead" style="max-width: 600px;">
        Reclaim your time with simple, tactile interactions designed to break the loop of digital addiction.
      </p>
      
      <div class="grid-3">
        <!-- Card 1 -->
        <div class="card animate-on-scroll">
            <div class="icon-placeholder">👆</div>
            <h3>Tap to Block</h3>
            <p class="body-text">Instantly block distracting apps on all your devices with a single, satisfying physical tap.</p>
        </div>

        <!-- Card 2 -->
        <div class="card animate-on-scroll">
          <div class="icon-placeholder">⏱️</div>
          <h3>Physical Timer</h3>
          <p class="body-text">Set your deep work duration with a weighted aluminum dial. Watch the LED ring count down.</p>
        </div>

        <!-- Card 3 -->
        <div class="card animate-on-scroll">
           <div class="icon-placeholder">🔄</div>
           <h3>Seamless Sync</h3>
           <p class="body-text">Connects effortlessly via Bluetooth LE. Your rules apply across iOS, Android, and macOS.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Grid (Bento) -->
  <section id="tech-specs" class="section" style="background: #F5F5F7;">
    <div class="container">
       <div class="grid-feature">
           <!-- Large Dark Card -->
           <div class="card card-dark animate-on-scroll" style="background-image: linear-gradient(to bottom right, #1D1D1F, #000000); padding: 40px;">
               <p style="font-size: 10px; font-weight: 700; color: #86868b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Engineered Feel</p>
               <h3>Precision Haptics.</h3>
               <p class="body-text">Feel the focus. Premium linear resonant actuators provide subtle, affirmative feedback for every interaction without breaking your flow.</p>
               <div style="flex-grow: 1; display: flex; align-items: flex-end; justify-content: center; width: 100%; margin-top: 40px;">
                   <!-- Placeholder for internal component visual -->
                   <img src="assets/haptics.png" onerror="this.style.display='none'" style="max-width: 80%; opacity: 0.8;">
               </div>
           </div>

           <!-- Right Column Stack -->
           <div style="display: flex; flex-direction: column; gap: 24px;">
               <div class="card animate-on-scroll">
                   <div class="icon-placeholder" style="color: #86868b;">⛔</div>
                   <h3>Silent Mode.</h3>
                   <p class="body-text">Operates completely silently. Visual cues only.</p>
               </div>
               
               <div class="card animate-on-scroll" style="justify-content: center; align-items: center; text-align: center;">
                   <!-- Battery Ring Visual Placeholder -->
                   <div style="width: 80px; height: 80px; border-radius: 50%; border: 4px solid #00C7BE; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                       <span style="font-weight: 700;">98%</span>
                   </div>
                   <h3>Battery for weeks.</h3>
                   <p class="body-text">Low energy display. USB-C.</p>
               </div>
           </div>
       </div>
    </div>
  </section>

  <!-- Bottom CTA -->
  <section class="section text-center" style="padding-bottom: 120px;">
    <div class="container">
      <h2>Ready to focus?</h2>
      <p class="subhead" style="margin-bottom: 32px;">
        Join thousands of creatives who have reclaimed their attention span.
      </p>
      <a href="#/get-cookies" class="btn btn-primary" style="padding: 16px 32px; font-size: 16px;">Pre-order Now</a>
    </div>
  </section>
`;

export const getFreeCookiesView = () => `
  <section class="section" style="min-height: 80vh; padding-top: 100px;">
    <div class="container" style="max-width: 500px; text-align: center;">
      <h1>Pre-order.</h1>
      <p class="subhead">Reserve your spot in line.</p>
      
      <div class="card" style="margin-top: 40px; text-align: left;">
          <form id="lead-form" class="animate-on-scroll">
            <input type="text" name="website_hp" id="website_hp" style="display:none" tabindex="-1" autocomplete="off">
            
            <label style="font-size: 12px; font-weight: 600; margin-bottom: 4px; display: block; margin-left: 4px;">Email Address</label>
            <input type="email" id="email" required placeholder="name@example.com" />
            
            <label style="font-size: 12px; font-weight: 600; margin-bottom: 4px; display: block; margin-left: 4px;">Shipping Address</label>
            <textarea id="address" required rows="3" placeholder="enter your address"></textarea>

            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 8px;">Place Reservation</button>
          </form>

          <div id="form-success" style="display: none; text-align: center; padding: 40px 0;">
            <div style="font-size: 3rem; margin-bottom: 16px;">✅</div>
            <h3>Reserved.</h3>
            <p class="body-text">We'll be in touch soon.</p>
            <a href="#/" class="btn btn-link" style="margin:0;">Return Home</a>
          </div>
          
           <div id="form-error" style="display: none; text-align: center; color: #FF3B30; margin-top: 16px;">
            <p>Something went wrong. Please try again.</p>
          </div>
      </div>
    </div>
  </section>
`;

// Simple Text Views
const simpleView = (title, content) => `
  <section class="section" style="padding-top: 100px;">
    <div class="container" style="max-width: 700px;">
      <h1>${title}</h1>
      <div class="body-text" style="font-size: 18px;">${content}</div>
    </div>
  </section>
`;

export const getAboutView = () => simpleView("About", "We build tools for the mind. Cookies is our first step towards a distraction-free future.");
export const getPrivacyView = () => simpleView("Privacy", "Your data stays on your device. We believe in privacy by design.");
export const getTermsView = () => simpleView("Terms", "Standard terms apply.");
export const getSupportView = () => simpleView("Support", "Contact us at support@cookies.unknown."); // Placeholder domain
