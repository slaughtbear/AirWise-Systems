import { ProgressCircle } from '@tremor/react';

export const ProgressCircleHero = () => (
  <div className="mx-auto grid grid-cols-1 gap-12">
    <div className="flex justify-center">
      <ProgressCircle value={25} size="lg" />
    </div>
  </div>
);