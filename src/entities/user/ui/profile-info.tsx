import { cn } from "@/shared/ui/utils";
import { Profile } from "../model/types";
import { ProfileAvatar } from "./profile-avatar";

export const ProfileInfo = ({
  profile,
  className,
}: {
  profile?: Profile;
  className?: string;
}) => {
  if (!profile) {
    return null;
  }

  return (
    <div className={cn("flex flex-col relative px-6", className)}>
      <ProfileAvatar
        className={cn("h-40 w-40 border-white border-4")}
        profile={profile}
      />
      <h1 className={cn("flex gap-2 font-semibold text-xl mt-2")}>
        {`${profile.firstName} ${profile.lastName}`}
      </h1>
      <div>{profile.description}</div>
      <div>{profile.role}</div>
      <div>{profile.phone}</div>
    </div>
  );
};
