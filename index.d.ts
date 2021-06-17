declare module "ical.js" {
  export function parse(data: string): Data

  export class Component {
    constructor(data: Data)
    getAllSubcomponents(name: string): Component[]
  }

  export class Event {
    constructor(component: Component)

    uid: string
    summary?: string
    description?: string
    startDate: Time
    endDate: Time
    duration: Duration
    location? :string
    organizer?: string
    attendees: Property[]
  }

  class Data {}

  class Time {
    toString(): string
  }

  class Duration {
    toSeconds(): number
    toString(): string
  }

  class Property {
    getFirstValue(): string
    getValues(): string[]
  }
}
