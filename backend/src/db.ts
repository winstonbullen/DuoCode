export interface UserInfoDB {
  insert_entry(info: UserInfo): UserInfo;
  get_entry(user: string): UserInfo;
}

export interface UserInfo {
  user: string,
  pass_hash: string
}

export interface QuestionContentDB {
  get_question(params: QuestionParams): Promise<JSON>;
}

export interface QuestionParams {
  language: string,
  subject: string,
  type: string,
  difficulty: string,
  id: string,
}