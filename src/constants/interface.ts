export interface User {
  id: number;
  name: string;
  token: string;
}

export interface formProps {
  username: string;
  password: string;
}

export interface project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}

export interface param {
  name: string;
  personId: string;
}
export interface SearchPanelProps {
  users: User[];
  param: param;
  setParam: (param: SearchPanelProps["param"]) => void;
}

export interface HttpConfig extends RequestInit {
  data?: Object;
  token?: string;
}
