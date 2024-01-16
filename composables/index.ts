export interface ITLineNodeProps {
  title: string;
  subtitle: string;
  description: string;
  startDate: Date | string;
  endDate: Date | string;
  techStack: string[];
  position: "left" | "right";
}

export interface IConvoTextInputProps {
  placeholder?: string;
}

export interface IConvoTextInputEmits {
  (e: "send", value: string): void;
}

export interface IConvoRoom {
  id: number | string;
  name: string;
  userCount: number;
}

export interface IConvoMsg {
  convoId: number | string;
  userId: number | string;
  userName: string;
  content: string;
  dateSent: string;
}
