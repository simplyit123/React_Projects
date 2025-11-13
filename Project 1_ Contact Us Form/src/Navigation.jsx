import style from "./ContactForm.module.css";

const Navigation = () => {
  
  return (
    <div className={style.container}>
      <nav className={style.navigation}>
        <div className={style.logo}>
          <img src="src/assets/logo.png" alt="logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};


export default Navigation;