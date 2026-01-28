"use client";

import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import RegisterModal from "../modals/registrationModal";
import LoginModal from "../modals/loginModal";

export const Logo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Header() {
  const pathname = usePathname();

  const [isRegisterModal, setIsRegisterModal] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);

  const onCloseRegisterModal = useCallback(() => {
    setIsRegisterModal(false);
  }, []);

  const onCloseLoginModal = useCallback(() => {
    setIsLoginModal(false);
  }, []);

  const getNavItems = useMemo(() => {
    return siteConfig.navItem.map((item) => {
      const isActiveLink = item.href === pathname;

      return (
        <NavbarItem key={item.href} isActive={isActiveLink}>
          <Link
            color="foreground"
            href={item.href}
            className={`${isActiveLink ? "text-blue-500" : "text-foreground"} transition-colors duration-500 hover:text-blue-300`}
          >
            {item.label}
          </Link>
        </NavbarItem>
      );
    });
  }, [pathname]);
  console.log("pathname >> ", pathname);

  return (
    <Navbar style={{ height: layoutConfig.headerHeight }}>
      <NavbarBrand>
        <Link href={"/"} className="flex items-center gap-1">
          <Logo />
          <p className="font-bold text-inherit">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {getNavItems}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            href="#"
            color="primary"
            variant="bordered"
            onPress={() => setIsLoginModal(true)}
          >
            Войти
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onPress={() => setIsRegisterModal(true)}
          >
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>

      <RegisterModal isOpen={isRegisterModal} onClose={onCloseRegisterModal} />
      <LoginModal isOpen={isLoginModal} onClose={onCloseLoginModal} />
    </Navbar>
  );
}
