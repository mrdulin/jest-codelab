export interface IEventData {}

export function processEvent() {
  return (event: IEventData) => {
    const eventType = exports.getEventType(event);
    return eventType;
  };
}

function getEventType(event: IEventData): string {
  return '';
}

exports.getEventType = getEventType;
