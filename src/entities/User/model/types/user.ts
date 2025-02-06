export interface User {
  id: string;
  email: string;
  googleId: string;
  role: string;
  type: string[];
  password?: string;
  displayName?: string;
  name?: {
    familyName?: string;
    givenName?: string;
  };
  photos?: Array<{
    value: string;
  }>;
  gender?: string;
  profile?: string;
  _json?: {
    sub?: string;
    name?: string;
    given_name?: string;
    family_name?: string;
    middle_name?: string;
    nickname?: string;
    preferred_username?: string;
    profile?: string;
    picture?: string;
    website?: string;
    email?: string;
    email_verified?: boolean;
    gender?: string;
    locale?: string;
    hd?: string;
  };
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface UserSchema {
  user?: User;

  _inited: boolean;
}
