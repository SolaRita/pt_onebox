import { EventDetail, EventInfo, Session } from '../../interfaces/event-detail';
import { RawEventDetailData } from '../../interfaces/raw-event-detail-data';

export function mapToEventDetail(
  rawEventDetailData: RawEventDetailData
): EventDetail {
  const event: EventInfo = {
    id: +rawEventDetailData.event.id,
    title: rawEventDetailData.event.title,
    subtitle: rawEventDetailData.event.subtitle,
    image: rawEventDetailData.event.image,
  };

  const sessions: Session[] = rawEventDetailData.sessions.map((session) => ({
    date: +session.date,
    availability: +session.availability,
    selected: 0,
  }));

  return { event, sessions };
}
