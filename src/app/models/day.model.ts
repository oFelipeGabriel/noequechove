export default class DayModel {
  date?: string = '';
  weekday?: string = '';
  description?: string = '';
  max?: number = 0;
  min?: number = 0;
  condition?: string = '';

  constructor(day: DayModel) {
    this.date = day?.date;
    this.weekday = day?.weekday;
    this.description = day?.description;
    this.max = day?.max;
    this.min = day?.min;
    this.condition = day?.condition;
  }
}