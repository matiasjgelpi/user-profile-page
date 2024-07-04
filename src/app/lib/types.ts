export interface Social {
  name: string;
  url: string;
}

export interface UserData {
  id: number;
  userName: string;
  imgUrl: string;
  aboutText: string;
  interests: string[];
  social: Social[];
}
