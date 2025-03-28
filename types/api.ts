export interface ChaturbateModel {
  username: string;
  display_name: string;
  room_subject: string;
  is_hd: boolean;
  is_new: boolean;
  tags: string[];
  seconds_online: number;
  gender: 'f' | 'm' | 't' | 'c';
  current_show: 'public' | 'private' | 'group' | 'away';
  chat_room_url: string;
  chat_room_url_revshare: string;
  iframe_embed: string;
  iframe_embed_revshare: string;
  image_url: string;
  image_url_360x270: string;
  num_users: number;
  num_followers: number;
  spoken_languages: string;
  birthday: string;
  age: number;
  location: string;
  country: string;
}

export interface ChaturbateResponse {
  count: number;
  results: ChaturbateModel[];
}