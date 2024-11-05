export interface Ipeople {
  id: number;
  name: string;
  email: string;
  mobileNo: string;
  imgUrl: string;
  completeAddress: icompleteAddress;
  occupation: ioccupation;
  socialLinks: isocialLinks;
}

export interface icompleteAddress {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
}

export interface ioccupation {
  title: string;
  department: string;
}

export interface isocialLinks {
  website: string;
  gitHub: string;
  linkedIn: string;
  instagram: string;
  facebook: string;
}
