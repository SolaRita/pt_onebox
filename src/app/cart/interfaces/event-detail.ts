export interface EventDetail {
  event: EventInfo;
  sessions: Session[];
}

export interface EventInfo {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface Session {
  date: number;
  availability: number;
  selected: number;
}
[];
