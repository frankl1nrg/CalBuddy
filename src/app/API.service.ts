/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateAcademicEvents: OnCreateAcademicEventsSubscription;
  onUpdateAcademicEvents: OnUpdateAcademicEventsSubscription;
  onDeleteAcademicEvents: OnDeleteAcademicEventsSubscription;
  onCreateAthleticEvents: OnCreateAthleticEventsSubscription;
  onUpdateAthleticEvents: OnUpdateAthleticEventsSubscription;
  onDeleteAthleticEvents: OnDeleteAthleticEventsSubscription;
  onCreateClubEvents: OnCreateClubEventsSubscription;
  onUpdateClubEvents: OnUpdateClubEventsSubscription;
  onDeleteClubEvents: OnDeleteClubEventsSubscription;
  onCreateTags: OnCreateTagsSubscription;
  onUpdateTags: OnUpdateTagsSubscription;
  onDeleteTags: OnDeleteTagsSubscription;
  onCreatePersonalEvents: OnCreatePersonalEventsSubscription;
  onUpdatePersonalEvents: OnUpdatePersonalEventsSubscription;
  onDeletePersonalEvents: OnDeletePersonalEventsSubscription;
  onCreateUsers: OnCreateUsersSubscription;
  onUpdateUsers: OnUpdateUsersSubscription;
  onDeleteUsers: OnDeleteUsersSubscription;
};

export type CreateAcademicEventsInput = {
  id?: string | null;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
};

export type ModelAcademicEventsConditionInput = {
  name?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  startDatetime?: ModelStringInput | null;
  endDatetime?: ModelStringInput | null;
  MonthYear?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  and?: Array<ModelAcademicEventsConditionInput | null> | null;
  or?: Array<ModelAcademicEventsConditionInput | null> | null;
  not?: ModelAcademicEventsConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type AcademicEvents = {
  __typename: "AcademicEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAcademicEventsInput = {
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
};

export type DeleteAcademicEventsInput = {
  id: string;
};

export type CreateAthleticEventsInput = {
  id?: string | null;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
};

export type ModelAthleticEventsConditionInput = {
  name?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  startDatetime?: ModelStringInput | null;
  endDatetime?: ModelStringInput | null;
  MonthYear?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  and?: Array<ModelAthleticEventsConditionInput | null> | null;
  or?: Array<ModelAthleticEventsConditionInput | null> | null;
  not?: ModelAthleticEventsConditionInput | null;
};

export type AthleticEvents = {
  __typename: "AthleticEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAthleticEventsInput = {
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
};

export type DeleteAthleticEventsInput = {
  id: string;
};

export type CreateClubEventsInput = {
  id?: string | null;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
};

export type ModelClubEventsConditionInput = {
  name?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  startDatetime?: ModelStringInput | null;
  endDatetime?: ModelStringInput | null;
  MonthYear?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  and?: Array<ModelClubEventsConditionInput | null> | null;
  or?: Array<ModelClubEventsConditionInput | null> | null;
  not?: ModelClubEventsConditionInput | null;
};

export type ClubEvents = {
  __typename: "ClubEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClubEventsInput = {
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
};

export type DeleteClubEventsInput = {
  id: string;
};

export type CreateTagsInput = {
  id?: string | null;
  name?: string | null;
};

export type ModelTagsConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelTagsConditionInput | null> | null;
  or?: Array<ModelTagsConditionInput | null> | null;
  not?: ModelTagsConditionInput | null;
};

export type Tags = {
  __typename: "Tags";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTagsInput = {
  id: string;
  name?: string | null;
};

export type DeleteTagsInput = {
  id: string;
};

export type CreatePersonalEventsInput = {
  id?: string | null;
  name?: string | null;
  location?: string | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  tags?: Array<string | null> | null;
  description?: string | null;
  status?: string | null;
  personalEventsUsersId?: string | null;
};

export type ModelPersonalEventsConditionInput = {
  name?: ModelStringInput | null;
  location?: ModelStringInput | null;
  startDatetime?: ModelStringInput | null;
  endDatetime?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelPersonalEventsConditionInput | null> | null;
  or?: Array<ModelPersonalEventsConditionInput | null> | null;
  not?: ModelPersonalEventsConditionInput | null;
  personalEventsUsersId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type PersonalEvents = {
  __typename: "PersonalEvents";
  id: string;
  name?: string | null;
  location?: string | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  tags?: Array<string | null> | null;
  description?: string | null;
  Users?: Users | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
  personalEventsUsersId?: string | null;
};

export type Users = {
  __typename: "Users";
  id: string;
  school_email?: string | null;
  personal_email?: string | null;
  d2l_calendar_token?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePersonalEventsInput = {
  id: string;
  name?: string | null;
  location?: string | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  tags?: Array<string | null> | null;
  description?: string | null;
  status?: string | null;
  personalEventsUsersId?: string | null;
};

export type DeletePersonalEventsInput = {
  id: string;
};

export type CreateUsersInput = {
  id?: string | null;
  school_email?: string | null;
  personal_email?: string | null;
  d2l_calendar_token?: string | null;
};

export type ModelUsersConditionInput = {
  school_email?: ModelStringInput | null;
  personal_email?: ModelStringInput | null;
  d2l_calendar_token?: ModelStringInput | null;
  and?: Array<ModelUsersConditionInput | null> | null;
  or?: Array<ModelUsersConditionInput | null> | null;
  not?: ModelUsersConditionInput | null;
};

export type UpdateUsersInput = {
  id: string;
  school_email?: string | null;
  personal_email?: string | null;
  d2l_calendar_token?: string | null;
};

export type DeleteUsersInput = {
  id: string;
};

export type ModelAcademicEventsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  startDatetime?: ModelStringInput | null;
  endDatetime?: ModelStringInput | null;
  MonthYear?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  and?: Array<ModelAcademicEventsFilterInput | null> | null;
  or?: Array<ModelAcademicEventsFilterInput | null> | null;
  not?: ModelAcademicEventsFilterInput | null;
};

export type ModelAcademicEventsConnection = {
  __typename: "ModelAcademicEventsConnection";
  items: Array<AcademicEvents | null>;
  nextToken?: string | null;
};

export type ModelAthleticEventsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  startDatetime?: ModelStringInput | null;
  endDatetime?: ModelStringInput | null;
  MonthYear?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  and?: Array<ModelAthleticEventsFilterInput | null> | null;
  or?: Array<ModelAthleticEventsFilterInput | null> | null;
  not?: ModelAthleticEventsFilterInput | null;
};

export type ModelAthleticEventsConnection = {
  __typename: "ModelAthleticEventsConnection";
  items: Array<AthleticEvents | null>;
  nextToken?: string | null;
};

export type ModelClubEventsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  startDatetime?: ModelStringInput | null;
  endDatetime?: ModelStringInput | null;
  MonthYear?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  and?: Array<ModelClubEventsFilterInput | null> | null;
  or?: Array<ModelClubEventsFilterInput | null> | null;
  not?: ModelClubEventsFilterInput | null;
};

export type ModelClubEventsConnection = {
  __typename: "ModelClubEventsConnection";
  items: Array<ClubEvents | null>;
  nextToken?: string | null;
};

export type ModelTagsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelTagsFilterInput | null> | null;
  or?: Array<ModelTagsFilterInput | null> | null;
  not?: ModelTagsFilterInput | null;
};

export type ModelTagsConnection = {
  __typename: "ModelTagsConnection";
  items: Array<Tags | null>;
  nextToken?: string | null;
};

export type ModelPersonalEventsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  location?: ModelStringInput | null;
  startDatetime?: ModelStringInput | null;
  endDatetime?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelPersonalEventsFilterInput | null> | null;
  or?: Array<ModelPersonalEventsFilterInput | null> | null;
  not?: ModelPersonalEventsFilterInput | null;
  personalEventsUsersId?: ModelIDInput | null;
};

export type ModelPersonalEventsConnection = {
  __typename: "ModelPersonalEventsConnection";
  items: Array<PersonalEvents | null>;
  nextToken?: string | null;
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null;
  school_email?: ModelStringInput | null;
  personal_email?: ModelStringInput | null;
  d2l_calendar_token?: ModelStringInput | null;
  and?: Array<ModelUsersFilterInput | null> | null;
  or?: Array<ModelUsersFilterInput | null> | null;
  not?: ModelUsersFilterInput | null;
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection";
  items: Array<Users | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionAcademicEventsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  tags?: ModelSubscriptionStringInput | null;
  startDatetime?: ModelSubscriptionStringInput | null;
  endDatetime?: ModelSubscriptionStringInput | null;
  MonthYear?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  location?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAcademicEventsFilterInput | null> | null;
  or?: Array<ModelSubscriptionAcademicEventsFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionAthleticEventsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  tags?: ModelSubscriptionStringInput | null;
  startDatetime?: ModelSubscriptionStringInput | null;
  endDatetime?: ModelSubscriptionStringInput | null;
  MonthYear?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  location?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAthleticEventsFilterInput | null> | null;
  or?: Array<ModelSubscriptionAthleticEventsFilterInput | null> | null;
};

export type ModelSubscriptionClubEventsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  tags?: ModelSubscriptionStringInput | null;
  startDatetime?: ModelSubscriptionStringInput | null;
  endDatetime?: ModelSubscriptionStringInput | null;
  MonthYear?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  location?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionClubEventsFilterInput | null> | null;
  or?: Array<ModelSubscriptionClubEventsFilterInput | null> | null;
};

export type ModelSubscriptionTagsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTagsFilterInput | null> | null;
  or?: Array<ModelSubscriptionTagsFilterInput | null> | null;
};

export type ModelSubscriptionPersonalEventsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  location?: ModelSubscriptionStringInput | null;
  startDatetime?: ModelSubscriptionStringInput | null;
  endDatetime?: ModelSubscriptionStringInput | null;
  tags?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPersonalEventsFilterInput | null> | null;
  or?: Array<ModelSubscriptionPersonalEventsFilterInput | null> | null;
};

export type ModelSubscriptionUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  school_email?: ModelSubscriptionStringInput | null;
  personal_email?: ModelSubscriptionStringInput | null;
  d2l_calendar_token?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUsersFilterInput | null> | null;
  or?: Array<ModelSubscriptionUsersFilterInput | null> | null;
};

export type CreateAcademicEventsMutation = {
  __typename: "AcademicEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAcademicEventsMutation = {
  __typename: "AcademicEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAcademicEventsMutation = {
  __typename: "AcademicEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAthleticEventsMutation = {
  __typename: "AthleticEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAthleticEventsMutation = {
  __typename: "AthleticEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAthleticEventsMutation = {
  __typename: "AthleticEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateClubEventsMutation = {
  __typename: "ClubEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClubEventsMutation = {
  __typename: "ClubEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteClubEventsMutation = {
  __typename: "ClubEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTagsMutation = {
  __typename: "Tags";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTagsMutation = {
  __typename: "Tags";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTagsMutation = {
  __typename: "Tags";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePersonalEventsMutation = {
  __typename: "PersonalEvents";
  id: string;
  name?: string | null;
  location?: string | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  tags?: Array<string | null> | null;
  description?: string | null;
  Users?: {
    __typename: "Users";
    id: string;
    school_email?: string | null;
    personal_email?: string | null;
    d2l_calendar_token?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
  personalEventsUsersId?: string | null;
};

export type UpdatePersonalEventsMutation = {
  __typename: "PersonalEvents";
  id: string;
  name?: string | null;
  location?: string | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  tags?: Array<string | null> | null;
  description?: string | null;
  Users?: {
    __typename: "Users";
    id: string;
    school_email?: string | null;
    personal_email?: string | null;
    d2l_calendar_token?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
  personalEventsUsersId?: string | null;
};

export type DeletePersonalEventsMutation = {
  __typename: "PersonalEvents";
  id: string;
  name?: string | null;
  location?: string | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  tags?: Array<string | null> | null;
  description?: string | null;
  Users?: {
    __typename: "Users";
    id: string;
    school_email?: string | null;
    personal_email?: string | null;
    d2l_calendar_token?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
  personalEventsUsersId?: string | null;
};

export type CreateUsersMutation = {
  __typename: "Users";
  id: string;
  school_email?: string | null;
  personal_email?: string | null;
  d2l_calendar_token?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUsersMutation = {
  __typename: "Users";
  id: string;
  school_email?: string | null;
  personal_email?: string | null;
  d2l_calendar_token?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUsersMutation = {
  __typename: "Users";
  id: string;
  school_email?: string | null;
  personal_email?: string | null;
  d2l_calendar_token?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetAcademicEventsQuery = {
  __typename: "AcademicEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAcademicEventsQuery = {
  __typename: "ModelAcademicEventsConnection";
  items: Array<{
    __typename: "AcademicEvents";
    id: string;
    name?: string | null;
    tags?: Array<string | null> | null;
    startDatetime?: string | null;
    endDatetime?: string | null;
    MonthYear?: string | null;
    description?: string | null;
    location?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetAthleticEventsQuery = {
  __typename: "AthleticEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAthleticEventsQuery = {
  __typename: "ModelAthleticEventsConnection";
  items: Array<{
    __typename: "AthleticEvents";
    id: string;
    name?: string | null;
    tags?: Array<string | null> | null;
    startDatetime?: string | null;
    endDatetime?: string | null;
    MonthYear?: string | null;
    description?: string | null;
    location?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetClubEventsQuery = {
  __typename: "ClubEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListClubEventsQuery = {
  __typename: "ModelClubEventsConnection";
  items: Array<{
    __typename: "ClubEvents";
    id: string;
    name?: string | null;
    tags?: Array<string | null> | null;
    startDatetime?: string | null;
    endDatetime?: string | null;
    MonthYear?: string | null;
    description?: string | null;
    location?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTagsQuery = {
  __typename: "Tags";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTagsQuery = {
  __typename: "ModelTagsConnection";
  items: Array<{
    __typename: "Tags";
    id: string;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetPersonalEventsQuery = {
  __typename: "PersonalEvents";
  id: string;
  name?: string | null;
  location?: string | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  tags?: Array<string | null> | null;
  description?: string | null;
  Users?: {
    __typename: "Users";
    id: string;
    school_email?: string | null;
    personal_email?: string | null;
    d2l_calendar_token?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
  personalEventsUsersId?: string | null;
};

export type ListPersonalEventsQuery = {
  __typename: "ModelPersonalEventsConnection";
  items: Array<{
    __typename: "PersonalEvents";
    id: string;
    name?: string | null;
    location?: string | null;
    startDatetime?: string | null;
    endDatetime?: string | null;
    tags?: Array<string | null> | null;
    description?: string | null;
    status?: string | null;
    createdAt: string;
    updatedAt: string;
    personalEventsUsersId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetUsersQuery = {
  __typename: "Users";
  id: string;
  school_email?: string | null;
  personal_email?: string | null;
  d2l_calendar_token?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUsersConnection";
  items: Array<{
    __typename: "Users";
    id: string;
    school_email?: string | null;
    personal_email?: string | null;
    d2l_calendar_token?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateAcademicEventsSubscription = {
  __typename: "AcademicEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAcademicEventsSubscription = {
  __typename: "AcademicEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAcademicEventsSubscription = {
  __typename: "AcademicEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAthleticEventsSubscription = {
  __typename: "AthleticEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAthleticEventsSubscription = {
  __typename: "AthleticEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAthleticEventsSubscription = {
  __typename: "AthleticEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateClubEventsSubscription = {
  __typename: "ClubEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateClubEventsSubscription = {
  __typename: "ClubEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteClubEventsSubscription = {
  __typename: "ClubEvents";
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  MonthYear?: string | null;
  description?: string | null;
  location?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTagsSubscription = {
  __typename: "Tags";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTagsSubscription = {
  __typename: "Tags";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTagsSubscription = {
  __typename: "Tags";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePersonalEventsSubscription = {
  __typename: "PersonalEvents";
  id: string;
  name?: string | null;
  location?: string | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  tags?: Array<string | null> | null;
  description?: string | null;
  Users?: {
    __typename: "Users";
    id: string;
    school_email?: string | null;
    personal_email?: string | null;
    d2l_calendar_token?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
  personalEventsUsersId?: string | null;
};

export type OnUpdatePersonalEventsSubscription = {
  __typename: "PersonalEvents";
  id: string;
  name?: string | null;
  location?: string | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  tags?: Array<string | null> | null;
  description?: string | null;
  Users?: {
    __typename: "Users";
    id: string;
    school_email?: string | null;
    personal_email?: string | null;
    d2l_calendar_token?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
  personalEventsUsersId?: string | null;
};

export type OnDeletePersonalEventsSubscription = {
  __typename: "PersonalEvents";
  id: string;
  name?: string | null;
  location?: string | null;
  startDatetime?: string | null;
  endDatetime?: string | null;
  tags?: Array<string | null> | null;
  description?: string | null;
  Users?: {
    __typename: "Users";
    id: string;
    school_email?: string | null;
    personal_email?: string | null;
    d2l_calendar_token?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
  personalEventsUsersId?: string | null;
};

export type OnCreateUsersSubscription = {
  __typename: "Users";
  id: string;
  school_email?: string | null;
  personal_email?: string | null;
  d2l_calendar_token?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUsersSubscription = {
  __typename: "Users";
  id: string;
  school_email?: string | null;
  personal_email?: string | null;
  d2l_calendar_token?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUsersSubscription = {
  __typename: "Users";
  id: string;
  school_email?: string | null;
  personal_email?: string | null;
  d2l_calendar_token?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAcademicEvents(
    input: CreateAcademicEventsInput,
    condition?: ModelAcademicEventsConditionInput
  ): Promise<CreateAcademicEventsMutation> {
    const statement = `mutation CreateAcademicEvents($input: CreateAcademicEventsInput!, $condition: ModelAcademicEventsConditionInput) {
        createAcademicEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAcademicEventsMutation>response.data.createAcademicEvents;
  }
  async UpdateAcademicEvents(
    input: UpdateAcademicEventsInput,
    condition?: ModelAcademicEventsConditionInput
  ): Promise<UpdateAcademicEventsMutation> {
    const statement = `mutation UpdateAcademicEvents($input: UpdateAcademicEventsInput!, $condition: ModelAcademicEventsConditionInput) {
        updateAcademicEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAcademicEventsMutation>response.data.updateAcademicEvents;
  }
  async DeleteAcademicEvents(
    input: DeleteAcademicEventsInput,
    condition?: ModelAcademicEventsConditionInput
  ): Promise<DeleteAcademicEventsMutation> {
    const statement = `mutation DeleteAcademicEvents($input: DeleteAcademicEventsInput!, $condition: ModelAcademicEventsConditionInput) {
        deleteAcademicEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAcademicEventsMutation>response.data.deleteAcademicEvents;
  }
  async CreateAthleticEvents(
    input: CreateAthleticEventsInput,
    condition?: ModelAthleticEventsConditionInput
  ): Promise<CreateAthleticEventsMutation> {
    const statement = `mutation CreateAthleticEvents($input: CreateAthleticEventsInput!, $condition: ModelAthleticEventsConditionInput) {
        createAthleticEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAthleticEventsMutation>response.data.createAthleticEvents;
  }
  async UpdateAthleticEvents(
    input: UpdateAthleticEventsInput,
    condition?: ModelAthleticEventsConditionInput
  ): Promise<UpdateAthleticEventsMutation> {
    const statement = `mutation UpdateAthleticEvents($input: UpdateAthleticEventsInput!, $condition: ModelAthleticEventsConditionInput) {
        updateAthleticEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAthleticEventsMutation>response.data.updateAthleticEvents;
  }
  async DeleteAthleticEvents(
    input: DeleteAthleticEventsInput,
    condition?: ModelAthleticEventsConditionInput
  ): Promise<DeleteAthleticEventsMutation> {
    const statement = `mutation DeleteAthleticEvents($input: DeleteAthleticEventsInput!, $condition: ModelAthleticEventsConditionInput) {
        deleteAthleticEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAthleticEventsMutation>response.data.deleteAthleticEvents;
  }
  async CreateClubEvents(
    input: CreateClubEventsInput,
    condition?: ModelClubEventsConditionInput
  ): Promise<CreateClubEventsMutation> {
    const statement = `mutation CreateClubEvents($input: CreateClubEventsInput!, $condition: ModelClubEventsConditionInput) {
        createClubEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateClubEventsMutation>response.data.createClubEvents;
  }
  async UpdateClubEvents(
    input: UpdateClubEventsInput,
    condition?: ModelClubEventsConditionInput
  ): Promise<UpdateClubEventsMutation> {
    const statement = `mutation UpdateClubEvents($input: UpdateClubEventsInput!, $condition: ModelClubEventsConditionInput) {
        updateClubEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateClubEventsMutation>response.data.updateClubEvents;
  }
  async DeleteClubEvents(
    input: DeleteClubEventsInput,
    condition?: ModelClubEventsConditionInput
  ): Promise<DeleteClubEventsMutation> {
    const statement = `mutation DeleteClubEvents($input: DeleteClubEventsInput!, $condition: ModelClubEventsConditionInput) {
        deleteClubEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteClubEventsMutation>response.data.deleteClubEvents;
  }
  async CreateTags(
    input: CreateTagsInput,
    condition?: ModelTagsConditionInput
  ): Promise<CreateTagsMutation> {
    const statement = `mutation CreateTags($input: CreateTagsInput!, $condition: ModelTagsConditionInput) {
        createTags(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTagsMutation>response.data.createTags;
  }
  async UpdateTags(
    input: UpdateTagsInput,
    condition?: ModelTagsConditionInput
  ): Promise<UpdateTagsMutation> {
    const statement = `mutation UpdateTags($input: UpdateTagsInput!, $condition: ModelTagsConditionInput) {
        updateTags(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTagsMutation>response.data.updateTags;
  }
  async DeleteTags(
    input: DeleteTagsInput,
    condition?: ModelTagsConditionInput
  ): Promise<DeleteTagsMutation> {
    const statement = `mutation DeleteTags($input: DeleteTagsInput!, $condition: ModelTagsConditionInput) {
        deleteTags(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTagsMutation>response.data.deleteTags;
  }
  async CreatePersonalEvents(
    input: CreatePersonalEventsInput,
    condition?: ModelPersonalEventsConditionInput
  ): Promise<CreatePersonalEventsMutation> {
    const statement = `mutation CreatePersonalEvents($input: CreatePersonalEventsInput!, $condition: ModelPersonalEventsConditionInput) {
        createPersonalEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          location
          startDatetime
          endDatetime
          tags
          description
          Users {
            __typename
            id
            school_email
            personal_email
            d2l_calendar_token
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
          personalEventsUsersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePersonalEventsMutation>response.data.createPersonalEvents;
  }
  async UpdatePersonalEvents(
    input: UpdatePersonalEventsInput,
    condition?: ModelPersonalEventsConditionInput
  ): Promise<UpdatePersonalEventsMutation> {
    const statement = `mutation UpdatePersonalEvents($input: UpdatePersonalEventsInput!, $condition: ModelPersonalEventsConditionInput) {
        updatePersonalEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          location
          startDatetime
          endDatetime
          tags
          description
          Users {
            __typename
            id
            school_email
            personal_email
            d2l_calendar_token
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
          personalEventsUsersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePersonalEventsMutation>response.data.updatePersonalEvents;
  }
  async DeletePersonalEvents(
    input: DeletePersonalEventsInput,
    condition?: ModelPersonalEventsConditionInput
  ): Promise<DeletePersonalEventsMutation> {
    const statement = `mutation DeletePersonalEvents($input: DeletePersonalEventsInput!, $condition: ModelPersonalEventsConditionInput) {
        deletePersonalEvents(input: $input, condition: $condition) {
          __typename
          id
          name
          location
          startDatetime
          endDatetime
          tags
          description
          Users {
            __typename
            id
            school_email
            personal_email
            d2l_calendar_token
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
          personalEventsUsersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePersonalEventsMutation>response.data.deletePersonalEvents;
  }
  async CreateUsers(
    input: CreateUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<CreateUsersMutation> {
    const statement = `mutation CreateUsers($input: CreateUsersInput!, $condition: ModelUsersConditionInput) {
        createUsers(input: $input, condition: $condition) {
          __typename
          id
          school_email
          personal_email
          d2l_calendar_token
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUsersMutation>response.data.createUsers;
  }
  async UpdateUsers(
    input: UpdateUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<UpdateUsersMutation> {
    const statement = `mutation UpdateUsers($input: UpdateUsersInput!, $condition: ModelUsersConditionInput) {
        updateUsers(input: $input, condition: $condition) {
          __typename
          id
          school_email
          personal_email
          d2l_calendar_token
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUsersMutation>response.data.updateUsers;
  }
  async DeleteUsers(
    input: DeleteUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<DeleteUsersMutation> {
    const statement = `mutation DeleteUsers($input: DeleteUsersInput!, $condition: ModelUsersConditionInput) {
        deleteUsers(input: $input, condition: $condition) {
          __typename
          id
          school_email
          personal_email
          d2l_calendar_token
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUsersMutation>response.data.deleteUsers;
  }
  async GetAcademicEvents(id: string): Promise<GetAcademicEventsQuery> {
    const statement = `query GetAcademicEvents($id: ID!) {
        getAcademicEvents(id: $id) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAcademicEventsQuery>response.data.getAcademicEvents;
  }
  async ListAcademicEvents(
    filter?: ModelAcademicEventsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAcademicEventsQuery> {
    const statement = `query ListAcademicEvents($filter: ModelAcademicEventsFilterInput, $limit: Int, $nextToken: String) {
        listAcademicEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            tags
            startDatetime
            endDatetime
            MonthYear
            description
            location
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAcademicEventsQuery>response.data.listAcademicEvents;
  }
  async GetAthleticEvents(id: string): Promise<GetAthleticEventsQuery> {
    const statement = `query GetAthleticEvents($id: ID!) {
        getAthleticEvents(id: $id) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAthleticEventsQuery>response.data.getAthleticEvents;
  }
  async ListAthleticEvents(
    filter?: ModelAthleticEventsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAthleticEventsQuery> {
    const statement = `query ListAthleticEvents($filter: ModelAthleticEventsFilterInput, $limit: Int, $nextToken: String) {
        listAthleticEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            tags
            startDatetime
            endDatetime
            MonthYear
            description
            location
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAthleticEventsQuery>response.data.listAthleticEvents;
  }
  async GetClubEvents(id: string): Promise<GetClubEventsQuery> {
    const statement = `query GetClubEvents($id: ID!) {
        getClubEvents(id: $id) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetClubEventsQuery>response.data.getClubEvents;
  }
  async ListClubEvents(
    filter?: ModelClubEventsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListClubEventsQuery> {
    const statement = `query ListClubEvents($filter: ModelClubEventsFilterInput, $limit: Int, $nextToken: String) {
        listClubEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            tags
            startDatetime
            endDatetime
            MonthYear
            description
            location
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListClubEventsQuery>response.data.listClubEvents;
  }
  async GetTags(id: string): Promise<GetTagsQuery> {
    const statement = `query GetTags($id: ID!) {
        getTags(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTagsQuery>response.data.getTags;
  }
  async ListTags(
    filter?: ModelTagsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTagsQuery> {
    const statement = `query ListTags($filter: ModelTagsFilterInput, $limit: Int, $nextToken: String) {
        listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTagsQuery>response.data.listTags;
  }
  async GetPersonalEvents(id: string): Promise<GetPersonalEventsQuery> {
    const statement = `query GetPersonalEvents($id: ID!) {
        getPersonalEvents(id: $id) {
          __typename
          id
          name
          location
          startDatetime
          endDatetime
          tags
          description
          Users {
            __typename
            id
            school_email
            personal_email
            d2l_calendar_token
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
          personalEventsUsersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPersonalEventsQuery>response.data.getPersonalEvents;
  }
  async ListPersonalEvents(
    filter?: ModelPersonalEventsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPersonalEventsQuery> {
    const statement = `query ListPersonalEvents($filter: ModelPersonalEventsFilterInput, $limit: Int, $nextToken: String) {
        listPersonalEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            location
            startDatetime
            endDatetime
            tags
            description
            status
            createdAt
            updatedAt
            personalEventsUsersId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPersonalEventsQuery>response.data.listPersonalEvents;
  }
  async GetUsers(id: string): Promise<GetUsersQuery> {
    const statement = `query GetUsers($id: ID!) {
        getUsers(id: $id) {
          __typename
          id
          school_email
          personal_email
          d2l_calendar_token
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUsersQuery>response.data.getUsers;
  }
  async ListUsers(
    filter?: ModelUsersFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUsersFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            school_email
            personal_email
            d2l_calendar_token
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  OnCreateAcademicEventsListener(
    filter?: ModelSubscriptionAcademicEventsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateAcademicEvents">
    >
  > {
    const statement = `subscription OnCreateAcademicEvents($filter: ModelSubscriptionAcademicEventsFilterInput) {
        onCreateAcademicEvents(filter: $filter) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateAcademicEvents">
      >
    >;
  }

  OnUpdateAcademicEventsListener(
    filter?: ModelSubscriptionAcademicEventsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateAcademicEvents">
    >
  > {
    const statement = `subscription OnUpdateAcademicEvents($filter: ModelSubscriptionAcademicEventsFilterInput) {
        onUpdateAcademicEvents(filter: $filter) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateAcademicEvents">
      >
    >;
  }

  OnDeleteAcademicEventsListener(
    filter?: ModelSubscriptionAcademicEventsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteAcademicEvents">
    >
  > {
    const statement = `subscription OnDeleteAcademicEvents($filter: ModelSubscriptionAcademicEventsFilterInput) {
        onDeleteAcademicEvents(filter: $filter) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteAcademicEvents">
      >
    >;
  }

  OnCreateAthleticEventsListener(
    filter?: ModelSubscriptionAthleticEventsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateAthleticEvents">
    >
  > {
    const statement = `subscription OnCreateAthleticEvents($filter: ModelSubscriptionAthleticEventsFilterInput) {
        onCreateAthleticEvents(filter: $filter) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateAthleticEvents">
      >
    >;
  }

  OnUpdateAthleticEventsListener(
    filter?: ModelSubscriptionAthleticEventsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateAthleticEvents">
    >
  > {
    const statement = `subscription OnUpdateAthleticEvents($filter: ModelSubscriptionAthleticEventsFilterInput) {
        onUpdateAthleticEvents(filter: $filter) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateAthleticEvents">
      >
    >;
  }

  OnDeleteAthleticEventsListener(
    filter?: ModelSubscriptionAthleticEventsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteAthleticEvents">
    >
  > {
    const statement = `subscription OnDeleteAthleticEvents($filter: ModelSubscriptionAthleticEventsFilterInput) {
        onDeleteAthleticEvents(filter: $filter) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteAthleticEvents">
      >
    >;
  }

  OnCreateClubEventsListener(
    filter?: ModelSubscriptionClubEventsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateClubEvents">>
  > {
    const statement = `subscription OnCreateClubEvents($filter: ModelSubscriptionClubEventsFilterInput) {
        onCreateClubEvents(filter: $filter) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateClubEvents">>
    >;
  }

  OnUpdateClubEventsListener(
    filter?: ModelSubscriptionClubEventsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateClubEvents">>
  > {
    const statement = `subscription OnUpdateClubEvents($filter: ModelSubscriptionClubEventsFilterInput) {
        onUpdateClubEvents(filter: $filter) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateClubEvents">>
    >;
  }

  OnDeleteClubEventsListener(
    filter?: ModelSubscriptionClubEventsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteClubEvents">>
  > {
    const statement = `subscription OnDeleteClubEvents($filter: ModelSubscriptionClubEventsFilterInput) {
        onDeleteClubEvents(filter: $filter) {
          __typename
          id
          name
          tags
          startDatetime
          endDatetime
          MonthYear
          description
          location
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteClubEvents">>
    >;
  }

  OnCreateTagsListener(
    filter?: ModelSubscriptionTagsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTags">>
  > {
    const statement = `subscription OnCreateTags($filter: ModelSubscriptionTagsFilterInput) {
        onCreateTags(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTags">>
    >;
  }

  OnUpdateTagsListener(
    filter?: ModelSubscriptionTagsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTags">>
  > {
    const statement = `subscription OnUpdateTags($filter: ModelSubscriptionTagsFilterInput) {
        onUpdateTags(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTags">>
    >;
  }

  OnDeleteTagsListener(
    filter?: ModelSubscriptionTagsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTags">>
  > {
    const statement = `subscription OnDeleteTags($filter: ModelSubscriptionTagsFilterInput) {
        onDeleteTags(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTags">>
    >;
  }

  OnCreatePersonalEventsListener(
    filter?: ModelSubscriptionPersonalEventsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreatePersonalEvents">
    >
  > {
    const statement = `subscription OnCreatePersonalEvents($filter: ModelSubscriptionPersonalEventsFilterInput) {
        onCreatePersonalEvents(filter: $filter) {
          __typename
          id
          name
          location
          startDatetime
          endDatetime
          tags
          description
          Users {
            __typename
            id
            school_email
            personal_email
            d2l_calendar_token
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
          personalEventsUsersId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreatePersonalEvents">
      >
    >;
  }

  OnUpdatePersonalEventsListener(
    filter?: ModelSubscriptionPersonalEventsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdatePersonalEvents">
    >
  > {
    const statement = `subscription OnUpdatePersonalEvents($filter: ModelSubscriptionPersonalEventsFilterInput) {
        onUpdatePersonalEvents(filter: $filter) {
          __typename
          id
          name
          location
          startDatetime
          endDatetime
          tags
          description
          Users {
            __typename
            id
            school_email
            personal_email
            d2l_calendar_token
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
          personalEventsUsersId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdatePersonalEvents">
      >
    >;
  }

  OnDeletePersonalEventsListener(
    filter?: ModelSubscriptionPersonalEventsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeletePersonalEvents">
    >
  > {
    const statement = `subscription OnDeletePersonalEvents($filter: ModelSubscriptionPersonalEventsFilterInput) {
        onDeletePersonalEvents(filter: $filter) {
          __typename
          id
          name
          location
          startDatetime
          endDatetime
          tags
          description
          Users {
            __typename
            id
            school_email
            personal_email
            d2l_calendar_token
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
          personalEventsUsersId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeletePersonalEvents">
      >
    >;
  }

  OnCreateUsersListener(
    filter?: ModelSubscriptionUsersFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUsers">>
  > {
    const statement = `subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
        onCreateUsers(filter: $filter) {
          __typename
          id
          school_email
          personal_email
          d2l_calendar_token
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUsers">>
    >;
  }

  OnUpdateUsersListener(
    filter?: ModelSubscriptionUsersFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUsers">>
  > {
    const statement = `subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
        onUpdateUsers(filter: $filter) {
          __typename
          id
          school_email
          personal_email
          d2l_calendar_token
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUsers">>
    >;
  }

  OnDeleteUsersListener(
    filter?: ModelSubscriptionUsersFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUsers">>
  > {
    const statement = `subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
        onDeleteUsers(filter: $filter) {
          __typename
          id
          school_email
          personal_email
          d2l_calendar_token
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUsers">>
    >;
  }
}
