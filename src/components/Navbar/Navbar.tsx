import Image from "next/image";

import NavbarMenu from "./NavbarMenu";
import NavbarMenuProfile from "./NavbarMenuProfile";
import NavbarMenuLink from "./NavbarMenuLink";
import NavbarLink from "./NavbarLink";
import NavbarMenuGithubLoginButton from "./NavbarMenuGithubLoginButton";
import NavbarMenuGoogleLoginButton from "./NavbarMenuGoogleLoginButton";

import brandLogo from "@/assets/images/brand-logo.png";

import { createClient } from "@/utils/supabase/server";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <div className="fixed z-[999] w-full p-4 md:p-9">
      <nav className="flex w-full items-center justify-between rounded-full border-2 border-white bg-white/20 px-6 py-4 backdrop-blur-lg">
        <div className="flex flex-row items-center">
          <Image
            className="w-24 lg:w-36"
            width={200}
            height={100}
            src={brandLogo}
            alt="Brand Logo"
          />
          <div className="hidden flex-row items-center lg:flex">
            <NavbarLink href="#">Home</NavbarLink>
            <NavbarLink href="#">Fruits</NavbarLink>
            <NavbarLink href="#">About Us</NavbarLink>
          </div>
        </div>

        <NavbarMenu>
          {user && (
            <NavbarMenuProfile
              profilePhotoSrc={user.user_metadata.avatar_url}
              profileName={user.user_metadata.name}
            />
          )}
          {/* <NavbarMenuProfile
            profilePhotoSrc={`https://lh3.googleusercontent.com/a/ACg8ocJaDbB0fjDC8nrhnnQzVOCvADz93QKAmVh-6t1QLFx_U4NkQlg=s96-c`}
            profileName={`Brian Vitualla`}
          /> */}
          <div className="flex w-full flex-col items-center">
            {user && <NavbarMenuLink href="#">View Basket</NavbarMenuLink>}
            <NavbarMenuLink href="#">Home</NavbarMenuLink>
            <NavbarMenuLink href="#">Fruits</NavbarMenuLink>
            <NavbarMenuLink href="#">About Us</NavbarMenuLink>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <NavbarMenuGoogleLoginButton />
            <NavbarMenuGithubLoginButton />
          </div>
        </NavbarMenu>
      </nav>
    </div>
  );
}
