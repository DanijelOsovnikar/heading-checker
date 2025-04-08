import { ChangeEvent, useRef, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const [status, setStatus] = useState(false);

  const heading = useRef<HTMLHeadingElement | null>(null);

  const check = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.trim());
    setTimeout(() => {
      getWrappedLines(heading.current ?? null);
    }, 200);
  };

  function getWrappedLines(element: HTMLHeadingElement | null) {
    if (element) {
      const height = element.clientHeight;

      const lineHeight = parseFloat(
        window.getComputedStyle(element).lineHeight
      );

      const numberOfLines = Math.round(height / lineHeight);

      setStatus(numberOfLines === 1 || numberOfLines === 2);
    }
  }

  return (
    <>
      <h2>Header checker</h2>
      <div className="card">
        <input
          type="text"
          name="header"
          id="header"
          onChange={(e) => check(e)}
        />
      </div>
      <div className={`customCard ${status ? "activeStatus" : "falseStatus"}`}>
        <h1 ref={heading}>{text}</h1>
      </div>
    </>
  );
}

export default App;
