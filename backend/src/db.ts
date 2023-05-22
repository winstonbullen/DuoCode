/// Interfaces defining how the business logic should interact with the database layer

/**
 * User information database should implement these methods, then we can swap out concrete classes as necessary
 */
export interface UserInfoDB {
  /**
   * Insert a {@link UserInfo} entry into the database
   * @param info - the {@link UserInfo} to insert
   * @returns A promise if any {@link UserInfo} was already associated with the username of the
   *          UserInfo being inserted, or else empty object
   */
  insert_entry(info: UserInfo): Promise<UserInfo>;
  /**
   * Get a {@link UserInfo} entry via a username
   * @param user - username of user to get the {@link UserInfo} entry from the database for
   * @returns Promise of {@link UserInfo} if key by name `user` exists, else empty object
   */
  get_entry(user: string): Promise<UserInfo>;
  /**
   * Append an entry to the completion list of a user's {@link UserInfo} in the database
   * @param user - username of user to add the specified completion to
   * @param completion - a completion string of the form `[language]_[subject]_[lesson_number]?`
   */
  append_completion(user: string, completion: string): void;
}

/** Defines what information is stored in the UserInfoDB */
export interface UserInfo {
  user: string,
  pass_hash: string,
  completed?: Array<string>, // optional
}

/**
 * Content database should implement these methods, and like above we can swap
 * out concrete implementations
 */
export interface QuestionContentDB {
  /**
   * Return (promise) of question JSON that matches specified parameters based on
   * specified {@link QuestionParams}
   * @param params - the {@link QuestionParams} that specify the question to find
   * @returns an object which has all the question JSON information or else is empty
   */
  get_question(params: QuestionParams): Promise<Object>;
}

/** Question content is specified by these parameters */
export interface QuestionParams {
  language: string,
  subject: string,
  type: string,
  difficulty: string,
  id: string,
}