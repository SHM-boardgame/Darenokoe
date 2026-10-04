export type ProfileType = 'personality' | 'value';

export type ProfileOption = {
  id: string;
  name: string;
  description: string;
  type: ProfileType;
};

export type ProfileData = {
  personalities: ProfileOption[];
  values: ProfileOption[];
};
