import React, { useState } from "react";

const App: React.FC = () => {
  const [hexValue, setHexValue] = useState<string>("");
  const [rgbValue, setRgbValue] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [error, setError] = useState<string>("");

  // ФУНКЦИЯ ДЛЯ ОБРАБОТКИ ПОЛЯ ВВОДА
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHexValue(value);

    if (value.length === 7) {
      const hexPattern = /^#([0-9A-Fa-f]{6})$/;
      if (hexPattern.test(value)) {
        setError("");
        const r = parseInt(value.slice(1, 3), 16);
        const g = parseInt(value.slice(3, 5), 16);
        const b = parseInt(value.slice(5, 7), 16);
        setRgbValue(`rgb(${r}, ${g}, ${b})`);
        setBackgroundColor(value);
      } else {
        setError("Ошибка!");
        setRgbValue("");
        setBackgroundColor("#ff0000");
      }
    } else {
      setError("");
      setBackgroundColor("#ffffff");
    }
  };

  return (
    <div
      style={{
        backgroundColor,
        minHeight: "100vh",
        minWidth: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <input
        type="text"
        value={hexValue}
        onChange={handleChange}
        maxLength={7}
        placeholder="#RRGGBB"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "200px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      />
      {error ? (
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      ) : (
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>{rgbValue}</p>
      )}
    </div>
  );
};

export default App;
