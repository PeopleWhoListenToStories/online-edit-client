import { Icons } from '~/components/Icons';
export const BottomBar = () => {
  const dir = localStorage.getItem('currentDirectory');
  return (
    <div className="flex p-1 space-x-2">
      <div className="flex items-center justify-center text-[#dba4a2]">
        <Icons.terminal className="h-4 w-4 fill-current" />
        <span className="">~</span>
        <p>{dir}</p>
      </div>
    </div>
  );
};
