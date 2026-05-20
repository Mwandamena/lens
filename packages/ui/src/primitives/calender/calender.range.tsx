import {
  RangeCalendar as AriaRangeCalendar,
  CalendarGrid,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  CalendarCell,
  Heading,
  Button,
  type RangeCalendarProps,
  type DateValue,
} from "react-aria-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  calendarRoot,
  calendarHeader,
  calendarHeading,
  calendarNavButton,
  calendarGrid,
  calendarGridHeader,
  calendarCell,
  calendarCellWrapper,
} from "./calender.css";

export function RangeCalendar<T extends DateValue>(
  props: RangeCalendarProps<T>,
) {
  return (
    <AriaRangeCalendar {...props} className={calendarRoot}>
      <header className={calendarHeader}>
        <Button slot="previous" className={calendarNavButton}>
          <ChevronLeft size={16} />
        </Button>
        <Heading className={calendarHeading} />
        <Button slot="next" className={calendarNavButton}>
          <ChevronRight size={16} />
        </Button>
      </header>

      <CalendarGrid className={calendarGrid}>
        <CalendarGridHeader>
          {(day) => (
            <CalendarHeaderCell className={calendarGridHeader}>
              {day}
            </CalendarHeaderCell>
          )}
        </CalendarGridHeader>

        <CalendarGridBody>
          {(date) => (
            <td className={calendarCellWrapper}>
              <CalendarCell date={date} className={calendarCell({})} />
            </td>
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </AriaRangeCalendar>
  );
}
