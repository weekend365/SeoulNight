import { useState } from "react";
import BackgroundImage from "./BackgroundImage";
import styles from "./openAI.module.css";

export type PropsType = {
  keyword: string;
};

export default function Poem() {
  const [keywordInput, setKeywordInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await fetch("/api/poemGenerate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ poem: keywordInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      console.log(data.result);
      setKeywordInput("");
    } catch (error: any) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <main className={styles.main}>
        <h3>SeoulNight</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="poem"
            placeholder="Enter a keyword"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
          />
          <input type="submit" value="Generate poem" />
        </form>
        <div className={styles.result}>{result}</div>
        <BackgroundImage props={keywordInput} />
      </main>
    </div>
  );
}
