import { getContext, setContext } from 'svelte';

const CALENDAR_KEY = Symbol('big-calendar');

export type CalendarEvent = {
	id: string;
	title: string;
	start: Date;
	end: Date;
	type?: 'default' | 'secondary' | 'destructive' | 'success' | 'warning';
	[key: string]: any;
};

export type DateRange = {
	start: Date | undefined;
	end: Date | undefined;
};

type CalendarContext = {
	currentDate: () => Date;
	selectedRange: () => DateRange;
	events: () => CalendarEvent[];
	weekStartsOn: () => 0 | 1;
	showWeekends: () => boolean;
	isDragging: () => boolean;
	isDateDisabled: (d: Date) => boolean;

	getEventSlot: (date: Date, eventId: string) => number;

	setDate: (d: Date) => void;
	startSelection: (d: Date, e?: MouseEvent) => void;
	updateSelection: (d: Date) => void;
	endSelection: () => void;
	next: () => void;
	prev: () => void;
	today: () => void;
};

export function setCalendarContext(props: CalendarContext) {
	setContext(CALENDAR_KEY, props);
}

export function getCalendarContext() {
	return getContext<CalendarContext>(CALENDAR_KEY);
}
