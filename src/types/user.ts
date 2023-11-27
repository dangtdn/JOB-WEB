export interface UsersLoginRequest {
  email: string;
  password: string;
}

export interface UsersLoginResponse {
  token: string;
  user: User;
}

export interface User {
  email: string;
  isSupervisor: boolean;
  isWorkspaceAdmin: boolean;
  userId: string;
  name: string;
}

export interface GetUserProfileResponse {
  fullName: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  isConfirmed: boolean;
  // package: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Package"
  // },
  resetLink: string;
  avatar: string;
  cloudinary_id: string;
  role: {
    isCandidate: boolean;
    isEmployer: boolean;
    isAdmin: boolean;
  };
}
