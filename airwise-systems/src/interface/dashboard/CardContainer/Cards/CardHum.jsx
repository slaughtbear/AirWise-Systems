import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { ProgressCircle } from "@tremor/react";
import { WiHumidity } from "react-icons/wi";
import { database } from "../../../../firebase/FirebaseConfig";
import { ref, onValue } from "firebase/database";

function CardHum() {
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    const humidityRef = ref(database, "test/humedad");
    let unsubscribe;

    onValue(humidityRef, (snapshot) => {
      const humedad = snapshot.val();
      setHumidity(humedad);
    });

    return () => {
      return unsubscribe;
    };
  }, []);

  const getHumidityColor = (humidity) => {
    if (humidity <= 10) {
      return "orange";
    } else if (humidity <= 50) {
      return "yellow";
    } else {
      return "purple";
    }
  };

  return (
    <Card className="py-4 bg-stone-900">
      <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
        <div className="flex items-center">
          <WiHumidity className={`text-${getHumidityColor(humidity)}-200 mr-2 w-7 h-7`} />
          <h4 className="font-bold text-purple-200 text-large work-sans-aesthetic">Humedad</h4>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <ProgressCircle
          className="px-4"
          value={humidity}
          size="xl"
          color={getHumidityColor(humidity)}
        >
          <span
            className={`text-xs font-medium text-${getHumidityColor(humidity)}-200 work-sans-aesthetic`}
          >
            {humidity}%
          </span>
        </ProgressCircle>
      </CardBody>
    </Card>
  );
}

export default CardHum;