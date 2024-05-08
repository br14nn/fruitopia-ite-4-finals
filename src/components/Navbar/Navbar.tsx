import Image from "next/image";

import NavbarMenu from "./NavbarMenu";
import NavbarMenuProfile from "./NavbarMenuProfile";
import NavbarMenuLink from "./NavbarMenuLink";
import NavbarLink from "./NavbarLink";
import NavbarMenuGithubLoginButton from "./NavbarMenuGithubLoginButton";
import NavbarMenuGoogleLoginButton from "./NavbarMenuGoogleLoginButton";

import brandLogo from "@/assets/images/brand-logo.png";

import { createClient } from "@/utils/supabase/server";
import NavbarMenuLogoutButton from "./NavbarMenuLogoutButton";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <div className="fixed left-0 right-0 z-[999] mx-auto w-full max-w-[2000px] p-4 md:p-9">
      <nav className="flex w-full items-center justify-between rounded-full border-2 border-white bg-white/20 px-6 py-4 backdrop-blur-lg lg:px-9">
        <div className="flex flex-row items-center lg:gap-6">
          <Image className="w-24 lg:w-36" src={brandLogo} alt="Brand Logo" />
          <div className="hidden flex-row items-center gap-6 lg:flex">
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
          <div className="flex w-full flex-col items-center border-y-2 border-white py-4 lg:hidden">
            {user && (
              <NavbarMenuLink href="/basket">View Basket</NavbarMenuLink>
            )}
            <NavbarMenuLink href="#">Home</NavbarMenuLink>
            <NavbarMenuLink href="#">Fruits</NavbarMenuLink>
            <NavbarMenuLink href="#">About Us</NavbarMenuLink>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            {!user ? (
              <>
                <NavbarMenuGoogleLoginButton />
                <NavbarMenuGithubLoginButton />
              </>
            ) : (
              <NavbarMenuLogoutButton />
            )}
          </div>
        </NavbarMenu>
      </nav>
    </div>
  );
}
