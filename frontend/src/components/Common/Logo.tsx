import { Link } from "@tanstack/react-router"

import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const LOGO_LIGHT = {
  full: "/assets/images/logo-full.svg",
  icon: "/assets/images/favicon.svg",
}

const LOGO_DARK = {
  full: "/assets/images/logo-full-dark.svg",
  icon: "/assets/images/favicon.svg",
}

interface LogoProps {
  variant?: "full" | "icon" | "responsive"
  className?: string
  asLink?: boolean
}

export function Logo({
  variant = "full",
  className,
  asLink = true,
}: LogoProps) {
  const { resolvedTheme } = useTheme()
  const logos = resolvedTheme === "dark" ? LOGO_DARK : LOGO_LIGHT

  const content =
    variant === "responsive" ? (
      <>
        <img
          src={logos.full}
          alt="FastAPI React Template"
          className={cn(
            "h-7 w-auto max-w-[180px] object-contain object-left group-data-[collapsible=icon]:hidden",
            className,
          )}
        />
        <img
          src={logos.icon}
          alt="FastAPI React Template"
          className={cn(
            "hidden size-7 object-contain group-data-[collapsible=icon]:block",
            className,
          )}
        />
      </>
    ) : (
      <img
        src={variant === "full" ? logos.full : logos.icon}
        alt="FastAPI React Template"
        className={cn(
          variant === "full"
            ? "h-7 w-auto max-w-[180px] object-contain object-left"
            : "size-7 object-contain",
          className,
        )}
      />
    )

  if (!asLink) {
    return content
  }

  return <Link to="/">{content}</Link>
}
