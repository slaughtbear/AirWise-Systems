import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { ProgressCircle } from "@tremor/react";
import { WiSmog } from "react-icons/wi";


function CardHumo() {
  return (
    <Card className="py-4 bg-stone-900">
      <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
      <div className="flex items-center">
          <WiSmog className="text-purple-200 mr-2 w-6 h-6" />
          <h4 className="font-bold text-purple-200 text-large work-sans-aesthetic">Humo</h4>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <ProgressCircle className="px-4" value={30} size="xl" color="purple">
          <span className="text-xs font-medium text-purple-200 work-sans-aesthetic">30%</span>
        </ProgressCircle>
      </CardBody>
    </Card>
  );
}

export default CardHumo;
