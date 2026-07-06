import { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">

      <div className="login-shell">
        <section className="login-panel login-panel--story">
          <div className="brand-mark">
            <span className="brand-mark__dot" aria-hidden="true" />
            <span>InvisQ</span>
          </div>

          <h1>Good to see you again.</h1>

          <p>
            A calmer place to pick up where you left off, check what matters,
            and keep the day moving without extra noise.
          </p>

          <div className="story-card" aria-label="Quick note">
            <span className="story-card__label">Today&apos;s focus</span>
            <ul>
              <li>Review the important updates first.</li>
              <li>Keep one clean view of the work ahead.</li>
              <li>Log in once and stay in rhythm.</li>
            </ul>
          </div>
        </section>

        <section className="login-panel login-panel--form">
          <div className="form-header">
            <span className="eyebrow">Welcome back</span>
            <h2>Sign in to InvisQ</h2>
            <p>Use your email and password to continue.</p>
          </div>

          <form className="login-form">
            <label className="field">
              <span>Email address</span>
              <input
                type="email"
                placeholder="name@company.com"
                autoComplete="email"
              />
            </label>

            <label className="field">
              <span>Password</span>
              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <div className="form-row">
              <label className="checkbox-field">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <a href="#" className="forgot-link">
                Forgot password?
              </a>
            </div>

            <button className="login-btn" type="submit">
              Sign in
            </button>
          </form>

          <p className="footer-note">
            If you ever get stuck, the reset link is waiting right where you need it.
          </p>
        </section>
      </div>

    </div>
  );
}

export default Login;