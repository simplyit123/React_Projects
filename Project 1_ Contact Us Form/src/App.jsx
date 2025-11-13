import "./App.css";
import ContactForm from "./contactForm";
import FormHeader from "./Form-Header";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <FormHeader />
        <ContactForm />
      </main>
    </div>
  );
};

export default App;
