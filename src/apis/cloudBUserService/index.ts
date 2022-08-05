/* eslint-disable */
// @ts-ignore
import {
  AxiosPromise as RequestPromise,
  AxiosRequestConfig as RequestConfig,
} from "axios";
import * as defs from "../../service/axios";
interface IResponseWrapper<T> {
  code: number;
  message: string;
  data: T;
}

const MockUrl = "https://yapi.vesync.com//mock/230/buserservice/v1";
//#region interface:590
/**
 * addUser
 */
export function postAddUser(
  body: CloudBUserService.Request.IPostAddUserRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostAddUserResponse>
> {
  return defs.$axios.post(`${isMock && MockUrl ? MockUrl : ""}/addUser`, body, {
    ...configs,
  });
}
/**
 * deleteUser
 */
export function postCloudV1BuserDeleteUser(
  body: CloudBUserService.Request.IPostCloudV1BuserDeleteUserRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostCloudV1BuserDeleteUserResponse>
> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/cloud/v1/buser/deleteUser`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * editUser
 */
export function postEditUser(
  body: CloudBUserService.Request.IPostEditUserRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostEditUserResponse>
> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/editUser`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getAllUser
 */
export function postGetAllUser(
  body: CloudBUserService.Request.IPostGetAllUserRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostGetAllUserResponse>
> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/getAllUser`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getItUserInfoByEmail
 */
export function postBuserserviceV1CloudV1BuserGetItUserInfoByEmail(
  body: CloudBUserService.Request.IPostBuserserviceV1CloudV1BuserGetItUserInfoByEmailRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostBuserserviceV1CloudV1BuserGetItUserInfoByEmailResponse>
> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/buserservice/v1/cloud/v1/buser/getItUserInfoByEmail`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getSystemOption
 */
export function postCloudV1BuserGetSystemOption(
  body: CloudBUserService.Request.IPostCloudV1BuserGetSystemOptionRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostCloudV1BuserGetSystemOptionResponse>
> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/cloud/v1/buser/getSystemOption`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getUserByAccountIdList
 */
export function postCloudV1BuserGetUserByAccountIdList(
  body: CloudBUserService.Request.IPostCloudV1BuserGetUserByAccountIdListRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostCloudV1BuserGetUserByAccountIdListResponse>
> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/cloud/v1/buser/getUserByAccountIdList`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getUserInfoByAccountId
 */
export function postCloudV1BuserGetUserInfoByAccountId(
  body: CloudBUserService.Request.IPostCloudV1BuserGetUserInfoByAccountIdRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostCloudV1BuserGetUserInfoByAccountIdResponse>
> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/cloud/v1/buser/getUserInfoByAccountId`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getUserInfoByEmail
 */
export function postGetUserInfoByEmail(
  body: CloudBUserService.Request.IPostGetUserInfoByEmailRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostGetUserInfoByEmailResponse>
> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/getUserInfoByEmail`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getUserList
 */
export function postGetUserList(
  body: CloudBUserService.Request.IPostGetUserListRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostGetUserListResponse>
> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/getUserList`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * itSysLogin
 */
export function postItSysLogin(
  body: CloudBUserService.Request.IPostItSysLoginRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostItSysLoginResponse>
> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/itSysLogin`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * loginForPlantManage
 */
export function postLoginForPlantManage(
  body: CloudBUserService.Request.IPostLoginForPlantManageRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostLoginForPlantManageResponse>
> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/loginForPlantManage`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * logout
 */
export function postLogout(
  body: CloudBUserService.Request.IPostLogoutRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostLogoutResponse>
> {
  return defs.$axios.post(`${isMock && MockUrl ? MockUrl : ""}/logout`, body, {
    ...configs,
  });
}
/**
 * verifyToken
 */
export function postVerifyToken(
  body: CloudBUserService.Request.IPostVerifyTokenRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<
  IResponseWrapper<CloudBUserService.Response.IPostVerifyTokenResponse>
> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/verifyToken`,
    body,
    {
      ...configs,
    }
  );
}
//#endregion interface:590
