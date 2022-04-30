/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIssue = /* GraphQL */ `
  query GetIssue($id: ID!) {
    getIssue(id: $id) {
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
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
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
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listIssues = /* GraphQL */ `
  query ListIssues(
    $filter: ModelIssueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIssues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Credits
        Days
        Name
        Teacher
        _deleted
        _lastChangedAt
        _version
        createdAt
        id
        updatedAt
        userID
      }
      nextToken
      startedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Email
        Experience
        Icon
        Level
        Name
        Password
        Username
        _deleted
        _lastChangedAt
        _version
        createdAt
        id
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncIssues = /* GraphQL */ `
  query SyncIssues(
    $filter: ModelIssueFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncIssues(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSubjects = /* GraphQL */ `
  query SyncSubjects(
    $filter: ModelSubjectFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncSubjects(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        Credits
        Days
        Name
        Teacher
        _deleted
        _lastChangedAt
        _version
        createdAt
        id
        updatedAt
        userID
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncTasks(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncUsers(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        Email
        Experience
        Icon
        Level
        Name
        Password
        Username
        _deleted
        _lastChangedAt
        _version
        createdAt
        id
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
