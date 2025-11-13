import style from "./ContactForm.module.css";



const Buttons = ({isoutline_btn, icon, text, ...rest}) => {

  return (
    <div >
      <button {...rest} className={isoutline_btn? style.outline_btn : style.primary_btn}>
        {icon}
        {text}
        
        </button>
    </div>
  )
}

export default Buttons
