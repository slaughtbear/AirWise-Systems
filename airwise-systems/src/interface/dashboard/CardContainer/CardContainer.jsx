import CardTemp from "./Cards/CardTemp";
import CardHum from "./Cards/CardHum";
import CardCO from "./Cards/CardCO";
import CardHumo from "./Cards/CardHumo";

function CardContainer() {
  return (
    <div className="flex flex-wrap place-content-around pt-16 bg-stone-950 sm: gap-6">
      <CardTemp />
      <CardHum />
      <CardCO />
      <CardHumo />
    </div>
  );
}

export default CardContainer;
