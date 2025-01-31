import type { DateValue } from "@internationalized/date";
import type { Month, Page, PageItem, Ellipsis } from "@melt-ui/svelte";

export type Selected<Value> = {
	value: Value;
	label?: string;
};

export type DateRange = {
	start: DateValue | undefined;
	end: DateValue | undefined;
};

export type SegmentPart =
	| "month"
	| "day"
	| "year"
	| "hour"
	| "minute"
	| "second"
	| "dayPeriod"
	| "timeZoneName"
	| "literal";

export type { Month, Page, PageItem, Ellipsis };
