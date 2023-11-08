export enum Path {
  home = "home",
  projects = "projects",
  projectId = ":projectId",
  news = "news",
  newsId = ":newsId",
  services = "services",
  detailId = "detailId",
  contact = "contact",
  employees = "employees",
  diagram = "diagram",
  overview = "overview",
  recruitment = "recruitment",
}

export enum QueryKey {
  career = "career",
  analytics = "analytics",
  post = "post",
  posts = "posts",
}

export enum ApiProxyBasePath {
  api = "api",
}

export enum pathNameNavBar {
  home = "",
  findJob = "find-job",
  company = "company",
  contact = "contact",
}

export enum RecoilAtomKey {
  loadingOverlay = "loadingOverlay",
}

export enum ProjectTypeTabId {
  all = "all",
  tab1 = "Dân dụng - Công nghiệp",
  tab2 = "Giao thông",
  tab3 = "Thủy lợi",
  tab4 = "Quy hoạch",
}

export enum RecaptchaKey {
  siteKey = "6Lf7JTkoAAAAAMJMPBBkpBB-UL2NS0NpsRNlhlNF",
}

export enum ErrorMessage {
  emptyErrorMessage = "Vui lòng điền thông tin!",
  invalidEmailErrorMessage = "Email không hợp lệ!",
  invalidPhoneErrorMessage = "Số điện thoại không hợp lệ!",
  limitPhoneErrorMessage = "Số điện thoại không được lớn hơn 10!",
}

export const regexEmailValidator = /^[\w\-._+]+@[\w\-._]+\.[A-Za-z]+$/;
export const regexPhoneValidator = /^0\d{9,10}$|^84\d{9,10}$/;
export const apiKeyGoogleMap = "AIzaSyDMxcVLQEDO3WZdHIEXoU9sybtmVc8vp0w";
export const accessToken = "1|YFGYFlTw1mVLF83UuajgobFVpyBmoPhGJonhXpDv";
export const longitude = 105.979021;
export const latitude = 10.250192;
export const baseURL = "https://dashboard.tuvanxaydungvinhlong.vn";
