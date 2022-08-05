/* eslint-disable */
// @ts-ignore
declare namespace CloudBUserService {
  namespace Request {
    //#region request:590
    /**
     * 数据
     */
    export interface IPostAddUserRequest {
      /**
       * email
       */
      email?: string;
      /**
       * userName
       */
      userName?: string;
      /**
       * userId
       */
      userId?: string;
      /**
       * department
       */
      department?: string;
      /**
       * phoneNumber
       */
      phoneNumber?: string;
      /**
       * 状态，true为启用，false为禁用
       */
      status: boolean;
      /**
       * roleIds
       */
      roleIds?: number[];
      /**
       * targetBizSystemId
       */
      targetBizSystemId: string;
      [k: string]: any;
    }

    /**
     * 数据
     */
    export interface IPostCloudV1BuserDeleteUserRequest {
      /**
       * userId
       */
      userId?: string;
      /**
       * targetBizSystemId
       */
      targetBizSystemId: string;
      [k: string]: any;
    }

    /**
     * 数据
     */
    export interface IPostEditUserRequest {
      /**
       * targetBizSystemId
       */
      targetBizSystemId?: string;
      /**
       * userId
       */
      userId?: string;
      /**
       * phoneNumber
       */
      phoneNumber?: string;
      /**
       * 状态，true启用，false禁用
       */
      status: boolean;
      /**
       * roleIds
       */
      roleIds?: number[];
      /**
       * 部门
       */
      department?: string;
      [k: string]: any;
    }

    /**
     * 数据
     */
    export interface IPostGetAllUserRequest {
      [k: string]: any;
    }

    /**
     * request
     */
    export interface IPostBuserserviceV1CloudV1BuserGetItUserInfoByEmailRequest {
      /**
       * email
       */
      email: string;
      [k: string]: any;
    }

    /**
     * 数据
     */
    export interface IPostCloudV1BuserGetSystemOptionRequest {
      [k: string]: any;
    }

    /**
     * 数据
     */
    export interface IPostCloudV1BuserGetUserByAccountIdListRequest {
      /**
       * accountIdList
       */
      accountIdList?: string[];
      [k: string]: any;
    }

    /**
     * 数据
     */
    export interface IPostCloudV1BuserGetUserInfoByAccountIdRequest {
      [k: string]: any;
    }

    /**
     * 数据
     */
    export interface IPostGetUserInfoByEmailRequest {
      /**
       * email
       */
      email?: string;
      [k: string]: any;
    }

    /**
     * 数据
     */
    export interface IPostGetUserListRequest {
      /**
       * roleId
       */
      roleId?: number;
      /**
       * userName
       */
      userName?: string;
      /**
       * pageSize
       */
      pageSize: number;
      /**
       * pageNum
       */
      pageNum: number;
      /**
       * targetBizSystemId
       */
      targetBizSystemId: string;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostItSysLoginRequest {
      /**
       * 认证中心返回的ticket
       */
      ticket?: string;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostLoginForPlantManageRequest {
      /**
       * 邮箱
       */
      email: string;
      /**
       * 密码
       */
      password: string;
      [k: string]: any;
    }

    /**
     * 数据
     */
    export interface IPostLogoutRequest {
      [k: string]: any;
    }

    /**
     * 数据
     */
    export interface IPostVerifyTokenRequest {
      [k: string]: any;
    }

    //#endregion request:590
    //#append request
  }
  namespace Response {
    //#region response:590
    /**
     * 响应参数
     */
    export interface IPostAddUserResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostAddUserResponseResult;
      errorCode: string;
      exception?: IPostAddUserResponseException;
      [k: string]: any;
    }
    /**
     * 响应参数
     */
    export interface IPostAddUserResponseResult {
      [k: string]: any;
    }
    export interface IPostAddUserResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostCloudV1BuserDeleteUserResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostCloudV1BuserDeleteUserResponseResult;
      errorCode: string;
      exception?: IPostCloudV1BuserDeleteUserResponseException;
      [k: string]: any;
    }
    /**
     * 响应参数
     */
    export interface IPostCloudV1BuserDeleteUserResponseResult {
      [k: string]: any;
    }
    export interface IPostCloudV1BuserDeleteUserResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostEditUserResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostEditUserResponseResult;
      errorCode: string;
      exception?: IPostEditUserResponseException;
      [k: string]: any;
    }
    /**
     * 响应参数
     */
    export interface IPostEditUserResponseResult {
      [k: string]: any;
    }
    export interface IPostEditUserResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostGetAllUserResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostGetAllUserResponseResult;
      errorCode: string;
      exception?: IPostGetAllUserResponseException;
      [k: string]: any;
    }
    /**
     * 响应参数
     */
    export interface IPostGetAllUserResponseResult {
      /**
       * userList
       */
      userList?: IPostGetAllUserResponseResultUserList[];
      [k: string]: any;
    }
    /**
     * userInfo
     */
    export interface IPostGetAllUserResponseResultUserList {
      /**
       * userId
       */
      userId: string;
      /**
       * userName
       */
      userName: string;
      /**
       * email
       */
      email: string;
      /**
       * phoneNumber
       */
      phoneNumber: string;
      /**
       * department
       */
      department: string;
      [k: string]: any;
    }
    export interface IPostGetAllUserResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostBuserserviceV1CloudV1BuserGetItUserInfoByEmailResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostBuserserviceV1CloudV1BuserGetItUserInfoByEmailResponseResult;
      errorCode: string;
      exception?: IPostBuserserviceV1CloudV1BuserGetItUserInfoByEmailResponseException;
      [k: string]: any;
    }
    /**
     * response
     */
    export interface IPostBuserserviceV1CloudV1BuserGetItUserInfoByEmailResponseResult {
      /**
       * userId
       */
      userId: string;
      /**
       * userName
       */
      userName: string;
      /**
       * department
       */
      department: string;
      /**
       * email
       */
      email: string;
      [k: string]: any;
    }
    export interface IPostBuserserviceV1CloudV1BuserGetItUserInfoByEmailResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostCloudV1BuserGetSystemOptionResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostCloudV1BuserGetSystemOptionResponseResult;
      errorCode: string;
      exception?: IPostCloudV1BuserGetSystemOptionResponseException;
      [k: string]: any;
    }
    /**
     * 响应参数
     */
    export interface IPostCloudV1BuserGetSystemOptionResponseResult {
      /**
       * systems
       */
      systems?: IPostCloudV1BuserGetSystemOptionResponseResultSystems[];
      [k: string]: any;
    }
    /**
     * system
     */
    export interface IPostCloudV1BuserGetSystemOptionResponseResultSystems {
      /**
       * bizSystemId
       */
      bizSystemId: string;
      /**
       * bizSystemName
       */
      bizSystemName: string;
      [k: string]: any;
    }
    export interface IPostCloudV1BuserGetSystemOptionResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostCloudV1BuserGetUserByAccountIdListResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostCloudV1BuserGetUserByAccountIdListResponseResult;
      errorCode: string;
      exception?: IPostCloudV1BuserGetUserByAccountIdListResponseException;
      [k: string]: any;
    }
    /**
     * 响应参数
     */
    export interface IPostCloudV1BuserGetUserByAccountIdListResponseResult {
      /**
       * userList
       */
      userList?: IPostCloudV1BuserGetUserByAccountIdListResponseResultUserList[];
      [k: string]: any;
    }
    /**
     * userInfo
     */
    export interface IPostCloudV1BuserGetUserByAccountIdListResponseResultUserList {
      /**
       * userId
       */
      userId: string;
      /**
       * userName
       */
      userName: string;
      /**
       * email
       */
      email: string;
      /**
       * phoneNumber
       */
      phoneNumber: string;
      /**
       * department
       */
      department: string;
      [k: string]: any;
    }
    export interface IPostCloudV1BuserGetUserByAccountIdListResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostCloudV1BuserGetUserInfoByAccountIdResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostCloudV1BuserGetUserInfoByAccountIdResponseResult;
      errorCode: string;
      exception?: IPostCloudV1BuserGetUserInfoByAccountIdResponseException;
      [k: string]: any;
    }
    /**
     * 响应参数
     */
    export interface IPostCloudV1BuserGetUserInfoByAccountIdResponseResult {
      /**
       * userId
       */
      userId?: string;
      /**
       * userName
       */
      userName?: string;
      /**
       * email
       */
      email?: string;
      /**
       * phoneNumber
       */
      phoneNumber?: string;
      /**
       * department
       */
      department?: string;
      [k: string]: any;
    }
    export interface IPostCloudV1BuserGetUserInfoByAccountIdResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostGetUserInfoByEmailResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostGetUserInfoByEmailResponseResult;
      errorCode: string;
      exception?: IPostGetUserInfoByEmailResponseException;
      [k: string]: any;
    }
    /**
     * 响应参数
     */
    export interface IPostGetUserInfoByEmailResponseResult {
      /**
       * userId
       */
      userId?: string;
      /**
       * userName
       */
      userName?: string;
      /**
       * email
       */
      email?: string;
      /**
       * phoneNumber
       */
      phoneNumber?: string;
      /**
       * 部门信息
       */
      department?: string;
      [k: string]: any;
    }
    export interface IPostGetUserInfoByEmailResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostGetUserListResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostGetUserListResponseResult;
      errorCode: string;
      exception?: IPostGetUserListResponseException;
      [k: string]: any;
    }
    /**
     * 响应参数
     */
    export interface IPostGetUserListResponseResult {
      /**
       * users
       */
      users?: IPostGetUserListResponseResultUsers[];
      /**
       * total
       */
      total: number;
      [k: string]: any;
    }
    /**
     * user
     */
    export interface IPostGetUserListResponseResultUsers {
      /**
       * userId
       */
      userId: string;
      /**
       * userName
       */
      userName: string;
      /**
       * email
       */
      email: string;
      /**
       * department
       */
      department: string;
      /**
       * phoneNumber
       */
      phoneNumber: string;
      /**
       * 状态，false为禁用，true为启用
       */
      status: boolean;
      /**
       * roles
       */
      roles: {
        /**
         * roleId
         */
        roleId: number;
        /**
         * roleName
         */
        roleName: string;
        [k: string]: any;
      }[];
      /**
       * 业务线名称list
       */
      businessUnit: string[];
      /**
       * 多站点名称list
       */
      sites: string[];
      /**
       * roleIds
       */
      roleIds: number[];
      [k: string]: any;
    }
    export interface IPostGetUserListResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostItSysLoginResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostItSysLoginResponseResult;
      errorCode: string;
      exception?: IPostItSysLoginResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostItSysLoginResponseResult {
      /**
       * accountId
       */
      accountId: string;
      /**
       * name
       */
      name: string;
      /**
       * token
       */
      token: string;
      /**
       * 业务线
       */
      businessUnit?: string[];
      /**
       * menus
       */
      menus: IPostItSysLoginResponseResultMenus[];
      [k: string]: any;
    }
    /**
     * menu
     */
    export interface IPostItSysLoginResponseResultMenus {
      /**
       * 菜单id
       */
      id: number;
      /**
       * 菜单名称
       */
      name: string;
      /**
       * 路由
       */
      router: string;
      /**
       * 图标
       */
      icon: string;
      /**
       * menu
       */
      children: {
        [k: string]: any;
      };
      [k: string]: any;
    }
    export interface IPostItSysLoginResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostLoginForPlantManageResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostLoginForPlantManageResponseResult;
      errorCode: string;
      exception?: IPostLoginForPlantManageResponseException;
      [k: string]: any;
    }
    /**
     * res
     */
    export interface IPostLoginForPlantManageResponseResult {
      /**
       * token
       */
      token: string;
      /**
       * 用户ID
       */
      accountId: string;
      [k: string]: any;
    }
    export interface IPostLoginForPlantManageResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostLogoutResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostLogoutResponseResult;
      errorCode: string;
      exception?: IPostLogoutResponseException;
      [k: string]: any;
    }
    /**
     * 响应参数
     */
    export interface IPostLogoutResponseResult {
      [k: string]: any;
    }
    export interface IPostLogoutResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostVerifyTokenResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostVerifyTokenResponseResult;
      errorCode: string;
      exception?: IPostVerifyTokenResponseException;
      [k: string]: any;
    }
    /**
     * 响应参数
     */
    export interface IPostVerifyTokenResponseResult {
      [k: string]: any;
    }
    export interface IPostVerifyTokenResponseException {
      [k: string]: any;
    }

    //#endregion response:590
    //#append response
  }
}
