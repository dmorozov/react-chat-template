export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
}

export type ZonedDateTime = Date;

export enum DataStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
}

export type Uuid = string;

export enum Role {
  ROLE_SUPER_ADMIN = 'ROLE_SUPER_ADMIN',
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_USER = 'ROLE_USER',
  ROLE_CHAT_OWNER = 'ROLE_CHAT_OWNER',
}

export enum UserSettingName {
  NOTIFICATION_EMAIL = 'NOTIFICATION_EMAIL',
  NOTIFICATION_PHONE_SMS = 'NOTIFICATION_PHONE_SMS',
  NOTIFICATION_PHONE_PUSH = 'NOTIFICATION_PHONE_PUSH',
}

export enum IndexingStatus {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Indexed = 'Indexed',
  Failed = 'Failed',
  Canceled = 'Canceled',
}

export interface UserDto {
  avatarUrl?: string;
  createdBy?: Uuid;
  createdTime?: ZonedDateTime;
  displayName?: string;
  email?: string;
  firstName?: string;
  id?: Uuid;
  lastName?: string;
  modifiedBy?: Uuid;
  modifiedTime?: ZonedDateTime;
  organizationId?: Uuid;
  password?: string;
  phoneNumber?: string;
  roles?: Role[];
  settings?: UserSettingName[];
  status?: DataStatus;
}

export interface TagDto {
  description?: string;
  name?: string;
  organizationId?: Uuid;
}

export interface DocumentDto {
  contentType?: string;
  fileSize?: number;
  id?: Uuid;
  indexedTime?: ZonedDateTime;
  indexingProgress?: number;
  indexingStatus?: IndexingStatus;
  jobId?: Uuid;
  modifiedBy?: Uuid;
  modifiedTime?: ZonedDateTime;
  name?: string;
  status?: DataStatus;
  storageId?: string;
  tags?: string[];
}

export interface ChatMessageDto {
  avatar?: string;
  chatBot?: boolean;
  createdBy?: Uuid;
  delivered?: boolean;
  firstName?: string;
  id?: string;
  lastName?: string;
  message?: string;
  partial?: boolean;
  sendTime?: ZonedDateTime;
}

export type ChatDtoUsers = { [key: string]: Role };

export interface ChatDto {
  documents?: DocumentDto[];
  id?: Uuid;
  lastMessage?: string;
  lastSentTime?: string;
  name?: string;
  tags?: string[];
  users?: ChatDtoUsers;
}
