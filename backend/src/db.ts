export interface UserInfoDB {
  insert_entry(info: UserInfo): UserInfo;
  get_entry(user: string): UserInfo;
  append_completion(user: string, completion: string): void;
}

export interface UserInfo {
  user: string,
  pass_hash: string,
  completed?: Array<string>, // optional
}

export interface QuestionContentDB {
  get_question(params: QuestionParams): Promise<Object>;
}

export interface QuestionParams {
  language: string,
  subject: string,
  type: string,
  difficulty: string,
  id: string,
}