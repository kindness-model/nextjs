export default function LandingPage() {
  return (
    <div id="landing-page-container">
      <div className="splash-section">
        <div className="top-nav">
          <div className="nav-title"><a href="/">Kindness Farm</a></div>
          <div className="nav-items">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contribute-donate">Contribute</a>
            <a href="/volunteer">Volunteer</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className="splash-inner">
          <div className="splash-header">
            Let’s feed people,
                <span>together.</span>
          </div>
          <div className="splash-subheader body-text">We grow healthy fruits & vegetables for our homeless & low income neighbors. We use & teach sustainable, regnerative farming methods to heal the Earth. We believe kindness is not only the most compassionate, but also the most practical model for the world to live by.</div>
          <div className="cta-items">
            <div className="cta-item">
              <div className="cta-header">Contribute</div>
              <div className="cta-buttons">
                <a href="https://www.paypal.com/donate?hosted_button_id=JRQA5GPHMJAJS" className="cta-button">$15</a>
                <a href="https://www.paypal.com/donate?hosted_button_id=JRQA5GPHMJAJS" className="cta-button">$50</a>
                <a href="https://www.paypal.com/donate?hosted_button_id=JRQA5GPHMJAJS" className="cta-button">Other</a>
              </div>
            </div>
            <div className="cta-item">
              <div className="cta-header">Get your hands dirty</div>
              <div className="cta-buttons">
                <a href="/volunteer" className="cta-button">Volunteer</a>
              </div>
            </div>
          </div>
        </div>

        <div className="supporters">
          <div className="supporters-header">A few of our supporters</div>
          <div className="supporter-items">
            <div className="supporter-item"><img src="/images/charles_dowding_logo.png" /></div>
            <div className="supporter-item"><img src="/images/portland_nursery_logo.png" /></div>
            <div className="supporter-item"><img src="/images/pbot_logo.png" /></div>
            <div className="supporter-item"><img src="/images/renees_garden_logo.png" /></div>
            <div className="supporter-item"><img src="/images/dirt_hugger_logo.png" /></div>
          </div>
        </div>

      </div>

      <div className="subsplash-section">
        <div className="subsplash-inner">
          <div className="left">
            <div className="header">Need some amazing 10+ year old blueberry plants?</div>
            <div className="subheader">Check out our blueberry fundraiser!</div>
            <a href="https://www.thekindnessmodel.org/blueberry-fundraiser/" className="reserve-button">Reserve Yours</a>
          </div>
          <div className="right"><img src="/images/fundraiser-card.png" /></div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-inner">
          <div className="header">What is Kindness Farm?</div>
          <div className="body">
            <p>Kindness Farm started from the belief that we are all born imbued with kindness, & that kindness is a not only the most compassionate, but also the most practical model for the world to live by. </p>
            <p>Kindness Farm aims to care for people & Earth by regeneratively & sustainably growing nutrient-full vegetables & fruits; cultivating community education of balanced farming practices; & providing freshly harvested nutriments to houseless and low-income neighbors in need. </p>
            <p>Kindness is the natural instinct in all of us to take care of each other, and our planet; which we believe is distorted by a world that force us to choose our own survival over helping others.</p>
            <p>We believe that we can change that, together.</p>
          </div>
        </div>
        <div className="instafeed">
          <script src="https://snapwidget.com/js/snapwidget.js"></script>
          <iframe src="https://snapwidget.com/embed/911511" className="snapwidget-widget" allowtransparency="true" frameBorder="0" scrolling="no" style={{ border: 'none', overflow: 'hidden' }}></iframe>
        </div>
        <div className="email-signup">
          <div className="email-signup-bg">
            <div className="email-signup-inner">
              <div className="header">Enter your email to stay up to date on the farm, gardening classes, events, & volunteer opportunities</div>

              <div id="mc_embed_signup">
                <form action="https://thekindnessmodel.us7.list-manage.com/subscribe/post?u=b61e13410bfa138d5a1a650ab&amp;id=aaa0bcb10c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">

                    <div className="email mc-field-group">
                      <input type="email" placeholder="name@email.com" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                    </div>
                    <div id="mce-responses" className="clear">
                      <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                      <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_b61e13410bfa138d5a1a650ab_aaa0bcb10c" tabIndex="-1" value="" /></div>
                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="email-signup-spacer"></div>
          </div>
        </div>

        <div className="footer">
          <div>The Kindness Model | Kindness Farm © 2021</div>
          <div className="social-icons">
            <a href="https://www.facebook.com/thekindnessmodel">
              <img src="/images/fb_icon.png" />
            </a>
            <a href="https://www.instagram.com/kindnessfarm/">
              <img src="/images/insta_icon.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
