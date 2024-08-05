import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { ProgressCircle } from "@tremor/react";
import { FaThermometerHalf } from "react-icons/fa";
import { database } from "../../../../firebase/FirebaseConfig";
import { ref, onValue } from "firebase/database";

function CardTemp() {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const temperaturaRef = ref(database, "test/temperatura");

    onValue(temperaturaRef, (snapshot) => {
      const temperatura = snapshot.val();
      setTemperature(temperatura);
    });
  }, []);

  const getColor = (temp) => {
    if (temp <= 10) {
      return "blue";
    } else if (temp <= 25) {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <Card className="py-4 bg-stone-900">
      <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
        <div className="flex items-center">
          <FaThermometerHalf className={`text-${getColor(temperature)}-200 mr-2 w-5 h-5`} />
          <h4 className="font-bold text-purple-200 text-large work-sans-aesthetic">
            Temperatura
          </h4>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <ProgressCircle
          className="px-4"
          value={temperature}
          size="xl"
          color={getColor(temperature)}
        >
          <span className={`text-xs font-medium text-${getColor(temperature)}-200 work-sans-aesthetic`}>
            {temperature}°
          </span>
        </ProgressCircle>
      </CardBody>
    </Card>
  );
}

export default CardTemp;