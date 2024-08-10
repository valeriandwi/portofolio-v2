import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  thumbnail,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  thumbnail?: string;
  titleClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div
        className="absolute inset-0 z-0 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      />
      <div className="pl-4 py-4 pr-14 relative h-full flex flex-col justify-end z-10 max-w-full group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className={cn(
            "font-sans font-bold text-2xl text-neutral-600 dark:text-neutral-200 mb-2 mt-2",
            titleClassName
          )}
        >
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
