import { Event } from '../../interfaces/event';
import { RawEventData } from '../../interfaces/raw-event-data';

export function mapToEvent(rawEventData: RawEventData): Event {
  return {
    id: rawEventData.id,
    title: rawEventData.title,
    subtitle: rawEventData.subtitle,
    image: rawEventData.image,
    place: rawEventData.place,
    startDate: +rawEventData.startDate,
    endDate: +rawEventData.endDate,
    description: rawEventData.description,
  };
}
