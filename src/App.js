import { PolarChart } from "./components/PolarChart";
import FormInput from "./components/Form";
import "./app.css";
import { useState } from "react";
import { PieChart } from "./components/PieChart";

function App() {
  const [value, setValue] = useState([]);
  const [showChart, setShowChart] = useState(false);

  const handleRender = (value) => {
    setValue(value);
    setShowChart(true);
  };

  return (
    <div className="App">
      {showChart ? (
        <div className="inner">
          <div className="charts">
            <PolarChart value={value} />
            <PieChart value={value} />
          </div>
        </div>
      ) : (
        <FormInput onRender={handleRender} />
      )}
    </div>
  );
}

export default App;
