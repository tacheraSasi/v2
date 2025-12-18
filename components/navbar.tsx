"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import HireUsModal from "@/components/hire-us-modal";
import { useDisclosure } from "@heroui/use-disclosure";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import {
  ChevronDownIcon,
  GlobeIcon,
  PersonIcon,
  TimerIcon,
} from "@radix-ui/react-icons";

export default function NavBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  const menuItems = [
    { name: "Products", href: "#products" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <Navbar isBlurred maxWidth="xl">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <a
            href="/"
            className="font-light tracking-tighter text-inherit text-lg"
          >
            ekilie
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand>
          <a
            href="/"
            className="font-light tracking-tighter text-2xl flex gap-3 justify-center items-center"
          >
            ekilie
          </a>
        </NavbarBrand>
        <NavbarItem>
          <Button as={Link} href="#products" variant="light" size="sm">
            Products
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#testimonials" variant="light" size="sm">
            Testimonials
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                endContent={<ChevronDownIcon />}
                variant="light"
                size="sm"
              >
                Ekilie Solutions
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Ekilie solutions"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="ekilisense"
                description="Advanced sensing and monitoring solutions that transform data into actionable insights."
                startContent={<TimerIcon />}
              >
                ekiliSense
              </DropdownItem>
              <DropdownItem
                key="ekilirelay"
                description="Seamless communication and relay systems for modern digital infrastructure."
                startContent={<TimerIcon />}
              >
                ekiliRelay
              </DropdownItem>
              <DropdownItem
                key="ekiliconvo"
                description="Intelligent conversation and interaction platforms for enhanced user engagement."
                startContent={<PersonIcon />}
              >
                ekiliConvo
              </DropdownItem>
              <DropdownItem
                key="insights"
                description="Comprehensive analytics and insights to drive data-driven decision making."
                startContent={<GlobeIcon />}
              >
                Insights
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            onPress={onOpen}
            color="primary"
            variant="solid"
            className="hidden sm:flex"
            size="sm"
          >
            Hire Us
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              size="lg"
              color="foreground"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            onPress={onOpen}
            color="primary"
            variant="solid"
            className="w-full"
            size="lg"
          >
            Hire Us
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
      
      <HireUsModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </Navbar>
  );
}
