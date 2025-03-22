import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui";
import { cn } from "@/shared/ui/utils";
import { Profile } from "../model/types";
import { getProfileAvatarUrl } from "../lib/get-profile-avatar-url";
import { getProfileLetters } from "../lib/get-profile-letters";

export const ProfileAvatar = ({
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
    <Avatar className={cn(className)}>
      <AvatarImage
        src={getProfileAvatarUrl(profile.avatar ?? "")}
        className="object-cover"
      />
      <AvatarFallback className={cn(className)}>
        {getProfileLetters(profile)}
      </AvatarFallback>
    </Avatar>
  );
};
