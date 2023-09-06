import React, { useEffect, useState } from 'react';
import styles from '../styles/pages/SignIn.module.css';  // Certifique-se de criar esse arquivo de estilo

const SignIn: React.FC = () => {
 // const router = useRouter();

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
      
      return () => {
        signUpButton.removeEventListener('click', () => {});
        signInButton.removeEventListener('click', () => {});
      };
    }
  }, []);

  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const activateRightPanel = () => {
    setRightPanelActive(true);
  };

  const deactivateRightPanel = () => {
    setRightPanelActive(false);
  };

  return (
    <div>
      <h2 className={styles.h2Style}>Sign in/up Form</h2>
      <div className={`${styles.container} ${isRightPanelActive ? styles.rightPanelActive : ''}`}>
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form className={styles.formStyle}>
            <h1 className={styles.h1Style}>Create Account</h1>
            <div className={styles.socialContainer}>
              <a href="#" className={styles.aStyle}>{/* Add FontAwesome icons here if needed */}</a>
              <a href="#" className={styles.aStyle}>{/* Add FontAwesome icons here if needed */}</a>
              <a href="#" className={styles.aStyle}>{/* Add FontAwesome icons here if needed */}</a>
            </div>
            <span className={styles.spanStyle}>or use your email for registration</span>
            <input className={styles.inputStyle} type="text" placeholder="Name" />
            <input className={styles.inputStyle} type="email" placeholder="Email" />
            <input className={styles.inputStyle} type="password" placeholder="Password" />
            <button className={styles.buttonStyle} onClick={deactivateRightPanel}>Sign Up</button>
          </form>
        </div>
        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
          <form className={styles.formStyle}>
            <h1 className={styles.h1Style}>Sign in</h1>
            <div className={styles.socialContainer}>
              <a href="#" className={styles.aStyle}>{/* Add FontAwesome icons here if needed */}</a>
              <a href="#" className={styles.aStyle}>{/* Add FontAwesome icons here if needed */}</a>
              <a href="#" className={styles.aStyle}>{/* Add FontAwesome icons here if needed */}</a>
            </div>
            <span className={styles.spanStyle}>or use your account</span>
            <input className={styles.inputStyle} type="email" placeholder="Email" />
            <input className={styles.inputStyle} type="password" placeholder="Password" />
            <a className={styles.aStyle} href="#">Forgot your password?</a>
            <button className={styles.buttonStyle} onClick={activateRightPanel}>Sign In</button>
          </form>
        </div>
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1 className={styles.h1Style}>Welcome Back!</h1>
              <p className={styles.pStyle}>To keep connected with us please login with your personal info</p>
              <button className={styles.buttonStyle} onClick={deactivateRightPanel} id="signIn">Sign In</button>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1 className={styles.h1Style}>Hello, Friend!</h1>
              <p className={styles.pStyle}>Enter your personal details and start journey with us</p>
              <button className={styles.buttonStyle}onClick={activateRightPanel} id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
