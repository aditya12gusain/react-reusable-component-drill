import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({ children, style, ...rest }) => {
  const customStyles = {
    ...style
  };

  return (
    <button {...rest} className={styles.secondaryButton} style={customStyles}>
      {children}
    </button>
  );
};
export default SecondaryButton;
