interface FormValueProps{
    teacher: number;
    subject: number;
    year: number,
    course: number;
    day: string;
    time_start: string,
    time_end: string,
    session_type: string,
    room_number: string,
}

// export type Action = {
//     type: string;
//     field: string;
//     value: string | null;
// };

export type Action = {
  type: string;
  field: keyof FormValueProps;
  value: FormValueProps[keyof FormValueProps] | null;
};