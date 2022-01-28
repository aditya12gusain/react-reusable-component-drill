import styles from "./HeadingOne.module.css";

const HeadingOne = ({ children, weight, style }) => {
  const customStyles = {
    fontWeight: weight === "bold" ? "bold" : "normal",
    ...style
  };

  return (
    <>
      <h1 className={styles.heading} style={customStyles}>
        {children}
      </h1>
    </>
  );
};

export default HeadingOne;
