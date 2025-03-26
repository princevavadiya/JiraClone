"use client";
import { useOrganization, useUser, OrganizationSwitcher, SignedIn } from '@clerk/nextjs'
import { usePathname } from 'next/navigation';

function OrgSwitcher() {


  const { isLoaded } = useOrganization()
  const { isLoaded: isUserLoaded } = useUser()
  const pathname = usePathname()
  if (!isLoaded || !isUserLoaded) {
    return null;
  }
  return (
    <SignedIn>
      <OrganizationSwitcher hidePersonal
        afterCreateOrganizationUrl="/organization/:slug"
        afterSelectOrganizationUrl="/organization/:slug"
        createOrganizationMode={
          pathname === "/onboarding" ? "navigation" : "modal"
        }
        createOrganizationUrl="/onboarding"
        appearance={{
          elements: {
            organizationSwitcherTrigger: "border border-gray-300 rounded-md  px-5 py-2",
            organizationSwitcherTriggerIcon: "text-white ",
          },
        }}
      />
    </SignedIn>
  )
}

export default OrgSwitcher