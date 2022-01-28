import "./styles.css";
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  SmallContent,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  Input
} from "./components/shared/exports";

export default function App() {
  return (
    <div className="App container">
      <HeadingOne>Hello Everyone</HeadingOne>
      <HeadingTwo>Hello This is Heading Two </HeadingTwo>
      <HeadingThree>Heading Three</HeadingThree>
      <SmallContent>Lol</SmallContent>
      <SmallContent type="para">Lol</SmallContent>
      <Paragraph>Hello</Paragraph>
      <PrimaryButton
        disabled={false}
        onClick={() => alert("Hello")}
        style={{ margin: "5px" }}
      >
        Confirm
      </PrimaryButton>
      <SecondaryButton
        disabled={true}
        onClick={() => alert("Hello")}
        style={{ margin: "5px" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
          alt="logo"
          width="70px"
        />
      </SecondaryButton>
      <Input label="Full Name" type="text" placeholder="Enter name ..." />
      <Input
        label="Enter Password"
        type="password"
        placeholder="Enter name ..."
      />
      <Input label="Full Name" type="date" placeholder="Enter name ..." />
    </div>
  );
}
