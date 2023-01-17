import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, onEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  // render first four

  const sushis = sushi.slice(sushiIndex, sushiIndex + 4).map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />;
  });

  const handleClick = () => {
    setSushiIndex((sushiIndex + 4) % sushi.length);
  };

  return (
    <div className="belt">
      {sushis}
      <MoreButton onClickMore={handleClick} />
    </div>
  );
}

export default SushiContainer;
