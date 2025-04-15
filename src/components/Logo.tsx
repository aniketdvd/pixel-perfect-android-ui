
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={cn("text-2xl font-bold select-none", className)}>
      zariya
    </h1>
  );
};

export default Logo;
