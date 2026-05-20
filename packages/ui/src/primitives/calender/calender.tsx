import {
  Calendar as AriaCalendar,
  CalendarGrid,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  CalendarCell,
  CalendarStateContext,
  Heading,
  Button,
  type CalendarProps,
  type DateValue,
} from "react-aria-components";
import { useContext } from "react";
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

// ── Today dot indicator ───────────────────────────────────────────────────────
function CalendarCellContent({ date }: { date: DateValue }) {
  const state = useContext(CalendarStateContext);
  const today = state?.value;

  const isToday =
    date.day === new Date().getDate() &&
    date.month === new Date().getMonth() + 1 &&
    date.year === new Date().getFullYear();

  return <CalendarCell date={date} className={calendarCell({ isToday })} />;
}

interface CalendarOwnProps<T extends DateValue> extends CalendarProps<T> {
  calenderVariant?: "default" | "outlined" | "surface";
  elevation?: "none" | "sm" | "md" | "lg" | "xl";
}

// ── Main Calendar ─────────────────────────────────────────────────────────────
export function Calendar<T extends DateValue>(props: CalendarOwnProps<T>) {
  const { calenderVariant, elevation, ...rest } = props;
  return (
    <AriaCalendar
      {...rest}
      className={calendarRoot({
        variant: calenderVariant,
        elevations: elevation,
      })}
    >
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
              <CalendarCellContent date={date} />
            </td>
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </AriaCalendar>
  );
}
