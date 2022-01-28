import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ children, style, ...rest }) => {
  const customStyles = {
    ...style
  };

  return (
    <button {...rest} className={styles.primaryButton} style={customStyles}>
      {children}
    </button>
  );
};
export default PrimaryButton;
