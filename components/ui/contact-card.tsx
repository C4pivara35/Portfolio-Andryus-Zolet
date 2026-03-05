import type React from "react"
import { cn } from "@/lib/utils"
import { type LucideIcon, PlusIcon } from "lucide-react"
import DotPattern from "@/components/ui/dot-pattern"

type ContactInfoProps = React.ComponentProps<"div"> & {
  icon: LucideIcon
  label: string
  value: string
  href?: string
  noTruncate?: boolean
}

type ContactCardProps = React.ComponentProps<"div"> & {
  title?: string
  description?: string
  contactInfo?: ContactInfoProps[]
  formSectionClassName?: string
}

export function ContactCard({
  title = "Entre em contato",
  description = "Se tiver alguma dúvida ou quiser conversar sobre um projeto, preencha o formulário ao lado. Faço o possível para responder em até 1 dia útil.",
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "relative h-full w-full border-2 border-white/10 bg-white/5 backdrop-blur-sm shadow-lg rounded-lg",
        children ? "grid md:grid-cols-2 lg:grid-cols-3" : "block",
        className,
      )}
      {...props}
    >
      <DotPattern width={5} height={5} />
      <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]" />
      <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]" />
      <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]" />
      <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]" />
      <div className={cn("flex flex-col justify-between", children && "lg:col-span-2")}>
        <div className="relative h-full space-y-4 px-4 py-8 md:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
            {title}
          </h1>
          <p className="max-w-xl text-sm md:text-base lg:text-lg text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom">
            {description}
          </p>
          <div className="grid gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
      {children && (
        <div
          className={cn(
            "flex h-full w-full items-center border-t border-white/10 bg-white/10 p-5 md:col-span-1 md:border-t-0 md:border-l",
            formSectionClassName,
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

function ContactInfo({ icon: Icon, label, value, href, noTruncate, className, ...props }: ContactInfoProps) {
  return (
    <div className={cn("flex items-center gap-3 py-3 min-w-0", className)} {...props}>
      <div className="shrink-0 rounded-lg bg-white/10 p-3">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0">
        <p className="font-medium text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)] font-open-sans-custom">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("block text-xs text-gray-300 hover:text-white transition-colors [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom", !noTruncate && "truncate")}
          >
            {value}
          </a>
        ) : (
          <p className={cn("text-xs text-gray-300 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom", !noTruncate ? "truncate" : "break-all")}>{value}</p>
        )}
      </div>
    </div>
  )
}
