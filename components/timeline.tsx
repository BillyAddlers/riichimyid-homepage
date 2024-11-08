import { Timeline, Typography } from "@material-tailwind/react";
import { FC } from "react";

export const TimelineComponent: FC = () => {
  return (
    <Timeline color="primary" orientation="vertical">
      <Timeline.Item className="h-12">
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default">Born in Malang, Indonesia.</Typography>
        </Timeline.Body>
      </Timeline.Item>

      <Timeline.Item className="h-12">
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default">
            Completed Internship in Roleplay Studio.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>

      <Timeline.Item className="h-12">
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default">
            Graduated from SMKN 5 Malang School of Art and Technology.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>

      <Timeline.Item className="h-12">
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default">
            Attending to International School of Multimedia Malang.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>

      <Timeline.Item className="h-12">
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default">
            Transferred to Widyagama University.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>

      <Timeline.Item className="h-12">
        <Timeline.Header>
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default">
            (Soon to be) Completed the Bachelor&apos;s Program in the Widyagama
            University.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
    </Timeline>
  );
};
