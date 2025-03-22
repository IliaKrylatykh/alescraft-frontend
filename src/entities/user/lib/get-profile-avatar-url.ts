const BASE_IMAGE_URL =
  "https://s3.timeweb.cloud/acac74b6-4391c9c0-f181-4ee0-a92c-3ff4548cf6a5";

export const getProfileAvatarUrl = (avatarHash: string): string => {
  return BASE_IMAGE_URL + `/${avatarHash}` + "/small";
};
