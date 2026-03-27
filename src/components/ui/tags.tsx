import Image from "next/image";

export function TagsImage({ icon, name }: { icon: string; name: string }) {
  return (
  <div className="bg-bg-tags text-text-secondary text-sm font-body rounded-md flex flex-row items-center gap-3 p-3">
    <div className="flex items-center justify-center h-5.5 w-5.5 relative">
      <Image src={icon} alt={name} fill className="object-contain" />
    </div>
    {name}
  </div>
  );
}

export function TagsText({ name }: { name: string }) {
  return (
  <div className="bg-bg-tags text-text-secondary text-xs font-body px-2 py-1 rounded">
    {name}
  </div>
  );
}