export interface UserInfoDB {
  insert_entry(info: UserInfo): UserInfo;
  get_entry(user: string): UserInfo;
}

export interface UserInfo {
  user: string,
  pass_hash: string
}
