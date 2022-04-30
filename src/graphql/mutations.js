/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIssue = /* GraphQL */ `
  mutation CreateIssue(
    $condition: ModelIssueConditionInput
    $input: CreateIssueInput!
  ) {
    createIssue(condition: $condition, input: $input) {
      Answer
      Area
      Difficult
      Points
      Question
      SubArea
      Theme
      Type
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
      userID
    }
  }
`;
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $condition: ModelSubjectConditionInput
    $input: CreateSubjectInput!
  ) {
    createSubject(condition: $condition, input: $input) {
      Credits
      Days
      Name
      Teacher
      Timetable {
        nextToken
        startedAt
      }
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
      userID
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $condition: ModelTaskConditionInput
    $input: CreateTaskInput!
  ) {
    createTask(condition: $condition, input: $input) {
      Description
      FinalDate
      StartDate
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      subjectID
      updatedAt
      userID
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $condition: ModelUserConditionInput
    $input: CreateUserInput!
  ) {
    createUser(condition: $condition, input: $input) {
      Email
      Experience
      Icon
      Issues {
        nextToken
        startedAt
      }
      Level
      Name
      Password
      Subjects {
        nextToken
        startedAt
      }
      Tasks {
        nextToken
        startedAt
      }
      Username
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
    }
  }
`;
export const deleteIssue = /* GraphQL */ `
  mutation DeleteIssue(
    $condition: ModelIssueConditionInput
    $input: DeleteIssueInput!
  ) {
    deleteIssue(condition: $condition, input: $input) {
      Answer
      Area
      Difficult
      Points
      Question
      SubArea
      Theme
      Type
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
      userID
    }
  }
`;
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $condition: ModelSubjectConditionInput
    $input: DeleteSubjectInput!
  ) {
    deleteSubject(condition: $condition, input: $input) {
      Credits
      Days
      Name
      Teacher
      Timetable {
        nextToken
        startedAt
      }
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
      userID
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $condition: ModelTaskConditionInput
    $input: DeleteTaskInput!
  ) {
    deleteTask(condition: $condition, input: $input) {
      Description
      FinalDate
      StartDate
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      subjectID
      updatedAt
      userID
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $condition: ModelUserConditionInput
    $input: DeleteUserInput!
  ) {
    deleteUser(condition: $condition, input: $input) {
      Email
      Experience
      Icon
      Issues {
        nextToken
        startedAt
      }
      Level
      Name
      Password
      Subjects {
        nextToken
        startedAt
      }
      Tasks {
        nextToken
        startedAt
      }
      Username
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
    }
  }
`;
export const updateIssue = /* GraphQL */ `
  mutation UpdateIssue(
    $condition: ModelIssueConditionInput
    $input: UpdateIssueInput!
  ) {
    updateIssue(condition: $condition, input: $input) {
      Answer
      Area
      Difficult
      Points
      Question
      SubArea
      Theme
      Type
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
      userID
    }
  }
`;
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $condition: ModelSubjectConditionInput
    $input: UpdateSubjectInput!
  ) {
    updateSubject(condition: $condition, input: $input) {
      Credits
      Days
      Name
      Teacher
      Timetable {
        nextToken
        startedAt
      }
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
      userID
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $condition: ModelTaskConditionInput
    $input: UpdateTaskInput!
  ) {
    updateTask(condition: $condition, input: $input) {
      Description
      FinalDate
      StartDate
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      subjectID
      updatedAt
      userID
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $condition: ModelUserConditionInput
    $input: UpdateUserInput!
  ) {
    updateUser(condition: $condition, input: $input) {
      Email
      Experience
      Icon
      Issues {
        nextToken
        startedAt
      }
      Level
      Name
      Password
      Subjects {
        nextToken
        startedAt
      }
      Tasks {
        nextToken
        startedAt
      }
      Username
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      updatedAt
    }
  }
`;
