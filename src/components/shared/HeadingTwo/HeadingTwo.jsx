import styles from "./HeadingTwo.module.css";

const HeadingTwo = ({ children, weight, style }) => {
  const customStyles = {
    fontWeight: weight === "bold" ? "bold" : "normal",
    ...style
  };

  return (
    <>
      <h2 className={styles.heading} style={customStyles}>
        {children}
      </h2>
    </>
  );
};

export default HeadingTwo;
