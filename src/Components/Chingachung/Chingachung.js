import { useEffect, useState } from "react";
import "./Chingachung.css";

const Chingachung = () => {
  const [computerChoice, setComputerChoice] = useState("Թուղթ");
  const [userChoice, setUserChoice] = useState("Թուղթ");
  const [result, setResult] = useState(null);
  const choices = ["Թուղթ", "Մկրատ", "Քար"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
    checkResult();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const color = (result) => {
    let col;
    if (result === "Հաղթանակ") {
      col = "green";
    } else if (result === "Դուք պարտվեցիք") {
      col = "red";
    } else {
      col = "yellow";
    }
    return col;
  };

  useEffect(() => {
    checkResult();
  }, [userChoice, computerChoice]);

  const checkResult = () => {
    if (
      (String(userChoice) === "Մկրատ" && String(computerChoice) === "Թուղթ") ||
      (String(userChoice) === "Թուղթ" && String(computerChoice) === "Քար") ||
      (String(userChoice) === "Քար" && String(computerChoice) === "Մկրատ")
    ) {
      setResult("Հաղթանակ");
    } else if (String(userChoice) === String(computerChoice)) {
      setResult("Ոչ ոքի");
    } else {
      setResult("Դուք պարտվեցիք");
    }
  };

  return (
    <div>
      <div className="header">
        <h1 className="gamename">ՔԱՐ-ՄԿՐԱՏ-ԹՈՒՂԹ</h1>
        <h2></h2>
        <div classname="rules">
          Կանոնները շատ պարզ են։ Քարը հաղթում է մկրատին, մկրատը՝ թղթին, թուղթն
          էլ՝ քարին։ Կատարեք ձեր քայլը՝ սեղմելով Ձեր նախընտրած նկարի վրա։
          Համակարգիչն էլ իր հերթին պատահականորեն կընտրի նշված 3-ից որեւէ մեկը
        </div>
        <h2></h2>
      </div>

      <div className="container1">
        <div className="mychoice">Ձեր ընտրությունը` </div>
        <div className="actualchoice">{userChoice}</div>

        <div className="actualchoice">{computerChoice}</div>
        <div className="mychoice">Կոմպի ընտրությունը`</div>
      </div>

      <div className="btncontainer">
        <button className="paper" onClick={() => handleClick("Թուղթ")}></button>

        <button
          className="scissors"
          onClick={() => handleClick("Մկրատ")}
        ></button>

        <button className="rock" onClick={() => handleClick("Քար")}></button>

        {/* {choices.map((choice, index) => (
          <button
            className="btn"
            style={{ backgroundImage: "url(String(" + { index } + ").svg)" }}
            key={index}
            onClick={() => handleClick(choice)}
          >
            {choice}
          </button>
        ))} */}
      </div>

      <div className="result" style={{ backgroundColor: color(result) }}>
        {result}
      </div>
    </div>
  );
};

export default Chingachung;
