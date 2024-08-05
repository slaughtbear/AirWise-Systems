import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { ProgressCircle } from "@tremor/react";
import { MdCo2 } from "react-icons/md";
import { database } from "../../../../firebase/FirebaseConfig";
import { ref, onValue } from "firebase/database";

function getProgressValue(carbon) {
  return carbon ? 100 : 0;
}

function CardCO() {
  const [co2, setCo2] = useState(0);

  useEffect(() => {
    const co2Ref = ref(database, "test/carbon");
    let unsubscribe;

    onValue(co2Ref, (snapshot) => {
      const gases = snapshot.val();
      const progressValue = getProgressValue(gases);
      setCo2(progressValue);
    });

    return () => {
      return unsubscribe;
    };
  }, []);

  const getGasColor = (co2) => {
    if (co2 === 100) {
      return "green";
    } else {
      return "blue";
    }
  };

  return (
    <Card className="py-4 bg-stone-900">
      <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
        <div className="flex items-center">
          <MdCo2 className={`text-${getGasColor(co2)}-200 mr-2 w-8 h-8`} />
          <h4 className="font-bold text-purple-200 text-large work-sans-aesthetic">
            Gases
          </h4>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <ProgressCircle
          className="px-4"
          value={co2}
          size="xl"
          color={getGasColor(co2)}
        >
          <span
            className={`text-xs font-medium text-${getGasColor(co2)}-200 work-sans-aesthetic`}
          >
            {co2}%
          </span>
        </ProgressCircle>
      </CardBody>
    </Card>
  );
}

export default CardCO;