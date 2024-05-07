import Image from "next/image";

interface INavbarMenuProfileProps {
  profilePhotoSrc?: string;
  profileName?: string;
}

export default function NavbarMenuProfile({
  profilePhotoSrc = "",
  profileName,
}: INavbarMenuProfileProps) {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <Image
        className="aspect-square w-20 rounded-full bg-white object-cover outline outline-white "
        src={profilePhotoSrc}
        width={512}
        height={512}
        alt="Profile photo"
      />
      <p className="text-center text-white/50">
        Welcome, <br />{" "}
        <span className="text-md font-bold text-white">{profileName}</span>
      </p>
    </div>
  );
}
