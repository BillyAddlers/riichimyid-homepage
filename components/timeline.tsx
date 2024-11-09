import { Timeline, Typography } from "@material-tailwind/react";
import { FC } from "react";
import { TimelineLists } from "@/constants/timelinelist";

export const TimelineComponent: FC = () => {
  return (
    <Timeline color="primary" orientation="vertical">
      {TimelineLists.map((item, index) => (
        <Timeline.Item key={index} className="h-12">
          <Timeline.Header>
            {index !== TimelineLists.length - 1 && <Timeline.Separator />}
            <Timeline.Icon className="h-3 w-3" />
          </Timeline.Header>
          <Timeline.Body className="-translate-y-1.5">
            <Typography color="default">{item.context}</Typography>
          </Timeline.Body>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};
